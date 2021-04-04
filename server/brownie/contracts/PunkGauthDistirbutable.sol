// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PunkGauthDistributable is ERC721 {
    uint256 public tokenCounter;

    constructor () public ERC721 ("PunkGauth", "PGAUTH") {
        tokenCounter = 0;
    }

    function createPunkGauthDistributable() public returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        tokenCounter = tokenCounter + 1;
        return newItemId;
    }
}