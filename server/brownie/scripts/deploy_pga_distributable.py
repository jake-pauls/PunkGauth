#!/usr/bin/python3
import os
from brownie import PunkGauthDistributable, accounts, config, network

def main():
    dev = accounts.add(os.getenv(config['wallets']['from_key']))
    print(network.show_active())
    publish_source = True if os.getenv("ETHERSCAN_TOKEN") else False
    PunkGauthDistributable.deploy({'from': dev}, publish_source=publish_source)
