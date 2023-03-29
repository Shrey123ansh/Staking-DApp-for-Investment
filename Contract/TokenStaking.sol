// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./TestToken.sol";

contract TokenStaking {
    string public name = "Yield Farming";
    TestToken public testToken;

    //declaring owner state variable
    address owner;

    //declaring APY for  staking ( default 0.137% daily or 50% APY yearly)
    uint256  APY = 13700;

    //declaring total staked
    uint256 public TotalStaked;

    //users staking balance
    mapping(address => uint256) public StakingBalance;
    mapping(address => uint256) public claimBalance;
    //mapping list of users who ever staked
    mapping(address => bool) public HasStaked;

    //mapping list of users who are staking at the moment
    mapping(address => bool) public IsStakingAtm;

    //array of all stakers
    address[] public Stakers;

    constructor(TestToken _testToken) payable {
        testToken = _testToken;

        //assigning owner on deployment
        owner = msg.sender;
    }


    // different APY Pool
    function Staking(uint256 _amount) public {
        require(_amount > 0, "amount cannot be 0");
        testToken.transferFrom(msg.sender, address(this), _amount);
        TotalStaked = TotalStaked + _amount;
        StakingBalance[msg.sender] =
            StakingBalance[msg.sender] +
            _amount;

        if (!HasStaked[msg.sender]) {
            Stakers.push(msg.sender);
        }
        HasStaked[msg.sender] = true;
        IsStakingAtm[msg.sender] = true;
    }

    function Unstake() public {
        uint256 balance = StakingBalance[msg.sender];
        uint256 claimbalance = claimBalance[msg.sender];
        require(balance > 0, "amount has to be more than 0");
        testToken.transfer(msg.sender, balance);
        TotalStaked = TotalStaked - balance;
        testToken.transferFrom(address(this),msg.sender, claimbalance);
        StakingBalance[msg.sender] = 0;
        claimBalance[msg.sender] = 0;
        IsStakingAtm[msg.sender] = false;
    }

    function DistributeRewards() public {
        require(msg.sender == owner, "Only contract creator can redistribute");
        for (uint256 i = 0; i < Stakers.length; i++) {
            address recipient = Stakers[i];
            uint256 balance = StakingBalance[recipient] * APY;
            balance = balance / 100000;
            claimBalance[recipient] = claimBalance[recipient] + balance;
        }
    }

    //change APY value for staking
    function changeAPY(uint256 _value) public {
        // 13700
        //only owner can issue airdrop
        require(msg.sender == owner, "Only contract creator can change APY");
        require(
            _value > 0,
            "APY value has to be more than 0, try 100 for (0.100% daily) instead"
        );
        APY = _value*1000;
    }

    //cliam test 1000 Tst (for testing purpose only !!)
    function claimTst() public {
        address recipient = msg.sender;
        uint256 tst = 1000000000000000000000;
        uint256 balance = tst;
        testToken.transfer(recipient, balance);
    }

    function getAPY() public view returns(uint256){
        return (APY / 1000);
    }

    function YourStaking() public view returns(uint256){
        return StakingBalance[msg.sender];
    }

    function YourStakinginINR() public view returns(uint256){
        return StakingBalance[msg.sender]*12;
    }

    function  YourClaim() public view returns(uint256){
        return claimBalance[msg.sender];
    }

    function YourClaiminINR() public view returns(uint256){
        return claimBalance[msg.sender]*12;
    }

    function TotalStaker() public view returns(uint256){
        return Stakers.length;
    }

    function TotalStake() public view returns(uint256){
        return TotalStaked;
    }

    function ClaimReward() public {
        uint256 claimbalance = claimBalance[msg.sender];
        require(claimbalance > 0, "amount has to be more than 0");
        testToken.transferFrom(address(this),msg.sender, claimbalance);
        claimBalance[msg.sender] = 0;
    }
}