import * as fs from "fs";
import * as hardhat from "hardhat";
import * as ipfsClient from "ipfs-http-client";
import * as path from "path";
import { mintingConfig } from "./config";
import { loadDeployment } from "./deployment";

const ipfsOptions = {
    cidVersion: 1,
    hashAlg: "sha2-256"
}

/**
 * Build a new instance of PunkMint
 */
export const BuildPunkMint = async () => {
    const pm = new PunkMint();
    await pm.init();
    return pm;
}

class PunkMint {
    constructor() {
        this.ipfs = null;
        this.contract = null;
        this.deploymentData = null;
        this._init = false;
    }

    /**
     * Initialize the PunkMint service
     * @returns Initialized PunkMint instance
     */
    async initialize() {
        if (this._init) {
            return; 
        }        

        /* 
         * PunkMint expects an already generated/deployed contract
         * This performs required operations on the deployment file
         */
        this.deploymentData = await loadDeployment();

        // Connect to the smart contract using the ABI
        const { abi, address } = this.deploymentData.contract;
        this.contract = await hardhat.ethers.getContractAt(abi, address);

        // Create a testnet IPFS node
        this.ipfs = ipfsClient(mintingConfig.ipfsApiUrl);

        this._init = true;
    }

    async createNFTFromAssetFile(fileName, options) {
        // Read file name, append path to options
        const content = await fs.readFile(fileName);
        options = {...options, path: fileName};

        // Pin the asset to IPFS
        const filePath = options.path || "asset.bin";
        const basename = path.basename(filePath);

        // Generate IPFS directory
        const ipfsPath = "/nft/" + basename;
        const { cid: assetCid } = await this.ipfs.add({ path: ipfsPath, content }, ipfsOptions);

        // Append NFT metadata as JSON
        const assetURI = ensureIpfsUriPrefix(assetCid) + "/" + basename;
        const metadata = await this.makeNFTMetadata(assetURI, options);

        // Append the metadata to IPFS
        const { cid: metadataCid } = await this.ipfs.add({ path: "/nft/metadata.json", content: JSON.stringify(metadata) }, ipfsOptions);
        const metadataURI = ensureIpfsUriPrefix(metadataCid) + "/metadata.json";

        // Get address of token owner
        let ownerAddress = options.owner
        if (!ownerAddress) {
            ownerAddress = await this.defaultOwnerAddress();
        }

        // Mint new token in accordance to metadata URI
        const tokenId = await this.mintToken(ownerAddress, metada);

        return {
            tokenId,
            ownerAddress,
            metadata,
            assetURI,
            metadataURI,
            assetGatewayURL: makeGatewayURL(assetURI),
            metadataGatewayURL: makeGatewayURL(metadataURI)
        }
    }

    /**
     * NFT Utility
     */
    async makeNFTMetadata(assetURI, options) {
        const {name, description} = options;
        assetURI = ensureIpfsUriPrefix(assetURI)
        return {
            name,
            description,
            image: assetURI
        }
    }

    /*
     * Smart Contract Interactions
     */
    async defaultOwnerAddress() {
        const signers = await this.hardhat.ethers.getSigners()
        return signers[0].address
    }
}

/**
 * URI Helper Methods
 */
const ensureIpfsUriPrefix = (cidOrURI) => {
    let uri = cidOrURI.toString()
    if (!uri.startsWith('ipfs://')) {
        uri = 'ipfs://' + cidOrURI
    }
    // Avoid the Nyan Cat bug (https://github.com/ipfs/go-ipfs/pull/7930)
    if (uri.startsWith('ipfs://ipfs/')) {
      uri = uri.replace('ipfs://ipfs/', 'ipfs://')
    }
    return uri
}

const makeGatewayURL = (ipfsURI) => {
    return config.ipfsGatewayUrl + '/' + stripIpfsUriPrefix(ipfsURI)
}
