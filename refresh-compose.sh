#!/bin/bash
# Purpose: Automate refreshing packages, and building TypeScript on server after pulling
# Version:1.0
# Created Date: Sat Apr 3 20:10:15 PST 2021
# Modified Date:
# Author: Jacob Pauls

# Execute this in the root directory #

# Colors for statements
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'

echo -e "${YELLOW}/server: ${WHITE}Checking packages on the server..."
cd server
yarn

echo -e "${YELLOW}/server: ${WHITE}Rebuilding TypeScript..."
yarn build

echo "${GREEN}/client: ${WHITE}Checking packages on the client..."
cd .. && cd client
yarn

echo "${BLUE}docker: ${WHITE}Cleaning dangling Docker images..."
cd .. && docker rmi $(docker images -aq -f 'dangling=true')

echo "${BLUE}docker: ${WHITE}Relaunching Docker compose..."
docker-compose up

echo "${GREEN}Refresh complete."