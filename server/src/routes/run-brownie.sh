#!/bin/sh
# Purpose: Run Brownie to generate unique NFT after reaching express endpoint
# Version:1.0
# Created Date: Sun Apr 4 20:38:15 PST 2021
# Author: Jacob Pauls

cd ../brownie
brownie run scripts/deploy_pga_distributable.py