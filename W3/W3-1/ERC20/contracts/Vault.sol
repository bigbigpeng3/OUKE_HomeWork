//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    mapping(address => uint) public deposited;
    address public immutable token;

    constructor(address _token) {
        token = _token;
    }

    function permitDeposit(address user, uint amount, uint deadline, uint8 v, bytes32 r, bytes32 s) external {
        IERC20Permit(token).permit(msg.sender, address(this), amount, deadline, v, r, s);
        deposit(user, amount);
    }

    function deposit(address user, uint amount) public {
        require(IERC20(token).transferFrom(msg.sender, address(this), amount), "Transfer from error");
        deposited[user] += amount;
    }

    function balanceOf(address _user) external view returns(uint balance){
        return deposited[_user];
    }

    function withdrawToken(address _assetAddress,address _user) external {
        uint balance  = deposited[_user];
        require(balance > 0, "must have token");
        IERC20(_assetAddress).transfer(_user, balance);
    }


}