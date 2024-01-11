//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract easyGame {
    mapping(address => uint32) public t; // TOKENS
    mapping(address => uint32) public xp; //XP points
    mapping(address => uint8) public lev; // Level
 
    uint public allPoints;

    // G1 ___________

    mapping(address => uint) public lastClaim1;
    mapping(address => uint) public p1; // Power in Game1
    
    function claimPointsToUserG1() public {
        //require(block.timestamp >= lastClaim1[msg.sender] + 1 hours);
        if(p1[msg.sender]==0){
            t[msg.sender] = t[msg.sender] + 10;
            xp[msg.sender] = xp[msg.sender] + 5;
            allPoints = allPoints + 10;
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
        if(p1[msg.sender] == 0){
            require(t[msg.sender] >= 1000);
            t[msg.sender] = t[msg.sender] - 1000;
            p1[msg.sender]++;
            xp[msg.sender] = xp[msg.sender] + 100;  
        }
    }

    // EVERYTHING

    function upLev() public {
        if(xp[msg.sender] > 1000) {
            lev[msg.sender]++;
        } else if(xp[msg.sender] > 5000) {
            lev[msg.sender]++;
        } else if(xp[msg.sender] > 10000) {
            lev[msg.sender]++;
        } else if(xp[msg.sender] > 20000) {
            lev[msg.sender]++;
        } else if(xp[msg.sender] > 50000) {
            lev[msg.sender]++;
        } else if(xp[msg.sender] > 5000) {
            lev[msg.sender]++;
        } else if(xp[msg.sender] > 5000) {
            lev[msg.sender]++;
        }
    }

    function buyPoints(uint16 amount) public payable {
        if(amount == 1000) {
            require(msg.value >= 10000000000000000 wei); //revisa eso es 1 ETH
            t[msg.sender] = t[msg.sender] + 1000;
        }
    }

}
