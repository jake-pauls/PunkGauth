#!/usr/bin/python3
import os
from brownie import PunkGauthDistributable, accounts, config, network

def main():
    dev = accounts.add(os.getenv(config['wallets']['from_key']))
    publish_source = True if os.getenv("ETHERSCAN_TOKEN") else False
    punkgauth = PunkGauthDistributable.deploy({'from': dev}, publish_source=publish_source)
    append_contract_data(str(punkgauth))

def append_contract_data(nft_contract):
    with open("../nft.json", "w") as json:
        json.write("{\n")
        json.write("\t\"nft\": \"" + nft_contract + "\"\n")
        json.write("}")
        json.close()