// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "hardhat/console.sol";

contract Domains {
    mapping(string => address) public domains;

    // Checkout our new mapping! This will store values
    mapping(string => string) public records;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function register(string calldata name) public {
        // Check that the name is unregistered (explained in notes)
        require(domains[name] == address(0));
        domains[name] = msg.sender;
        console.log("%s has registered a domain!", msg.sender);
    }
}
