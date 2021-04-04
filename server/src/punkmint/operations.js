import { BuildPunkMint } from "./punkmint";

export const createNewNFT = async (resourcePath, options) => {
    const punkMint = await BuildPunkMint();

    // Create NFT from Asset File
    const nft = punkMint.createNFTFromAssetFile(fileName, options);
    console.log("Minted a new NFT");

    console.log("NFT:");
    console.log(JSON.stringify(nft.metadata));
}