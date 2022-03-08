//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IScore{
    function getScore(address _student) external view returns(uint);
    function setScore(address _student, uint _score) external;
}