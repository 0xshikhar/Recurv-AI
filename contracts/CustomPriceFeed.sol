// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../lib/chainlink-brownie-contracts/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract CustomPriceFeed is AggregatorV3Interface, Ownable {
    // Price data
    int256 private _price;
    uint8 private _decimals;
    string private _description;
    
    // Version control
    uint256 private _version;
    
    // Round data
    uint80 private _roundId;
    uint256 private _startedAt;
    
    constructor(
        int256 initialPrice,
        uint8 decimals,
        string memory description,
        address initialOwner
    ) Ownable(initialOwner) {
        _price = initialPrice;
        _decimals = decimals;
        _description = description;
        _version = 1;
        _roundId = 1;
        _startedAt = block.timestamp;
    }
    
    // Update the price (only owner)
    function updatePrice(int256 newPrice) external onlyOwner {
        _price = newPrice;
        _roundId += 1;
        _startedAt = block.timestamp;
    }
    
    // Functions required by AggregatorV3Interface
    function decimals() external view override returns (uint8) {
        return _decimals;
    }
    
    function description() external view override returns (string memory) {
        return _description;
    }
    
    function version() external view override returns (uint256) {
        return _version;
    }
    
    function getRoundData(uint80 roundId) external view override returns (
        uint80 roundId_,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    ) {
        require(roundId <= _roundId, "Round not complete");
        return (
            roundId,
            _price,
            _startedAt,
            _startedAt,
            roundId
        );
    }
    
    function latestRoundData() external view override returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    ) {
        return (
            _roundId,
            _price,
            _startedAt,
            _startedAt,
            _roundId
        );
    }
} 