/**
 * Config export containing details for IPFS pinning service
 */
export const mintingConfig = {
    // Details about pinning service for NFT data
    pinningService: {
        name: "pinata",
        endpoint: "https://api.pinata.cloud/psa",
        key: process.env.PINATA_API_TOKEN
    },

    // Output file when contract is deployed
    deploymentJSONFile: "/data/pgauth-deployment.json",

    // IPFS port url inside Docker container
    ipfsApiUrl: "http://ipfs:4001",
}