//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Score{

    address teacher;

    mapping (address => uint) public scores;

    constructor(address _teacherAddress) {
       teacher = _teacherAddress;
    }

    modifier onlyTeacher() {
        require(msg.sender == teacher, "caller is not Teacher!");
        _;
    }


    function setScore(address _student, uint _score) external onlyTeacher {
        require(_score <= 100, "score can't over 100!");
        scores[_student] = _score;
    }

    function getScore(address _student) external view returns(uint){
        return scores[_student];
    }

}

