// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./CustomPriceFeed.sol";

contract PriceFeedFactory is Ownable {
    mapping(address => address) public tokenPriceFeeds;
    
    event PriceFeedCreated(address indexed token, address priceFeed);
    
    constructor(address initialOwner) Ownable(initialOwner) {}
    
    function createPriceFeed(
        address token,
        int256 initialPrice,
        uint8 decimals,
        string memory description
    ) external onlyOwner returns (address) {
        require(tokenPriceFeeds[token] == address(0), "Price feed already exists");
        
        CustomPriceFeed priceFeed = new CustomPriceFeed(
            initialPrice,
            decimals,
            description,
            owner()
        );
        
        tokenPriceFeeds[token] = address(priceFeed);
        
        emit PriceFeedCreated(token, address(priceFeed));
        
        return address(priceFeed);
    }
    
    function updatePrice(address token, int256 newPrice) external onlyOwner {
        address priceFeedAddress = tokenPriceFeeds[token];
        require(priceFeedAddress != address(0), "Price feed does not exist");
        
        CustomPriceFeed priceFeed = CustomPriceFeed(priceFeedAddress);
        priceFeed.updatePrice(newPrice);
    }
} 