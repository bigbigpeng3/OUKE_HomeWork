//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint count;

    constructor() {
        console.log("Deploying a Counter");
    }

    function setCount(uint _count) public {
        count = _count;
    }

    function getCount() public view returns (uint) {
        return count;
    }
}
