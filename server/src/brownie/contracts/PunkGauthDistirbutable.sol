// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PunkGauthDistributable is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdGen;

    constructor () public ERC721 ("PunkGauth", "PGAuth") { }

    function mintPunkGauthDistributable() 
    public returns (uint256) {
        uint256 newItemId = _tokenIdGen.current();
        _safeMint(msg.sender, newItemId);

        _tokenIdGen.increment();
        return newItemId;
    }
}