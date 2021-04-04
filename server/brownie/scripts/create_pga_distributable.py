#!/usr/bin/python3
import os
from brownie import PunkGauthDistributable, accounts, config, network

def main():
    dev = accounts.add(os.getenv(config['wallets']['from_key']))
    print(network.show_active())
    pga_distributable = PunkGauthDistributable[len(PunkGauthDistributable) - 1]
    return pga_distributable.createPunkGauthDistributable("None", {'from': dev})