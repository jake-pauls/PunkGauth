import * as fs from "fs";
import mintingConfig from "./config";

/**
 * Load deployment made of Ethereum contract
 * @returns The information contained within the pgauth-deployment.json file
 */
export const loadDeployment = async () => {
    let { deploymentJSONFile } = mintingConfig;

    if (!deploymentJSONFile) {
        console.log("WARNING: No deployment file path is configurated. Using default file path: /data/pgauth-deployment.json");
        deploymentJSONFile = "/data/pgauth-deployment.json";
    }

    const fileContent = await fs.readFile(deploymentJSONFile, { encoding: 'utf-8' });
    deploymentInfo = JSON.parse(fileContent);

    try {
        validateDeployment(deploymentInfo);
    } catch (err) {
        console.log(`ERROR: Could not read deployment info from ${ deploymentJSONFile }: ${ err.message }`);
    }

    return deploymentInfo;
}

/**
 * Check to make sure the correct fields were deployed as part of the contract 
 * @param {*} deploymentInfo - Content parsed from the pgaut-deployment.json file
 */
const validateDeployment = (deploymentInfo) => {
    const { contract } = deploymentInfo;

    if (!contract) {
        console.log("ERROR: Could not find contract from deployment JSON file");
    }

    const required = arg => {
        if (!deploymentInfo.contract.hasOwnProperty(arg)) {
            console.log(`ERROR: Required field ${arg} could not be found in contract`);
        }
    }

    required("name");
    required("address");
    required("abi");
}