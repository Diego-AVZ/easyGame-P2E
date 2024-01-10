//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract easyGame {
    mapping(address => uint32) public actPoints;
    mapping(address => uint32) public xpPoints;
    mapping(address => uint8) public level;

    // G1 ___________

    mapping(address => uint) public lastClaim1;
    mapping(address => uint) public power1;
    
    function claimPointsToUserG1() public {
        require(block.timestamp >= lastClaim1[msg.sender] + 1 hours);
        if(power1[msg.sender]==1){
            actPoints[msg.sender] = actPoints[msg.sender] + 10;
            xpPoints[msg.sender] = xpPoints[msg.sender] + 5;
        }
        lastClaim1[msg.sender] = block.timestamp;
    }

    function seeIfCanPlayG1(address user) public view returns(bool) {
        if(block.timestamp >= lastClaim1[user] + 1 hours) {
            return(true);
        } else{
            return(false);
        }
    }

    function upgradeG1() public {
        if(power1[msg.sender] == 0){
            require(actPoints[msg.sender] >= 1000);
            actPoints[msg.sender] = actPoints[msg.sender] - 1000;
            power1[msg.sender]++;
            xpPoints[msg.sender] = xpPoints[msg.sender] + 100; 
        }
    }

    // EVERYTHING

    function upLevel() public {
        if(xpPoints[msg.sender] > 1000) {
            level[msg.sender]++;
        } else if(xpPoints[msg.sender] > 5000) {
            level[msg.sender]++;
        } else if(xpPoints[msg.sender] > 10000) {
            level[msg.sender]++;
        } else if(xpPoints[msg.sender] > 20000) {
            level[msg.sender]++;
        } else if(xpPoints[msg.sender] > 50000) {
            level[msg.sender]++;
        } else if(xpPoints[msg.sender] > 5000) {
            level[msg.sender]++;
        } else if(xpPoints[msg.sender] > 5000) {
            level[msg.sender]++;
        }
    }

    function buyPoints(uint16 amount) public payable {
        if(amount == 1000) {
            require(msg.value >= 1000000000000000000 wei); //revisa eso es 1 ETH
            actPoints[msg.sender] = actPoints[msg.sender] + 1000;
        }
    }

}
