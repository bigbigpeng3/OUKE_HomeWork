//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Bank {
    
    address payable owner;
    mapping (address => uint) public balances;

    constructor() payable{
       owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "caller is not the owner!");
        _;
    }
    
     // Allow the contract to receive Ether
    receive() external payable {
        balances[msg.sender] = msg.value;
    }

    function withdrawEther() public onlyOwner {
        address self = address(this); // workaround for a possible solidity bug
        uint256 balance = self.balance;
        payable(msg.sender).transfer(balance);
    }
}
