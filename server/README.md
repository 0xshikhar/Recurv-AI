# Iota Wallet Reputation Server

## Overview

This server is responsible for checking the reputation of an IOTA wallet address.

## Features

- Check the reputation of an IOTA wallet address by address using token, transaction hash, transaction type, and transaction value in wallet history
- Send all this data to our AI models server which is using TensorFlow and Google AI API to get the reputation score between 0 and 100
- Get the reputation score from the AI models server
- Return the reputation score to the client with additional information about the wallet in metadata format

## Technologies

- Node.js
- Express
- TensorFlow
- Google AI API
- Docker
