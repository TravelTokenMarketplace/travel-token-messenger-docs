---
sidebar_position: 10
title: Creating a Wallet
description: How to create a wallet for use with the Travel Token Account and Messenger Bot
---

# Creating a Wallet

Wallets need to be created for your TTM Account and for each bot you run. Some wallet suggestions:

### Metamask
The obvious choice is to use a Metamask wallet. However there is an annoying bug in matrix_messenger
adding tokens on Base Sepolia (testnet), Base mainnet is working fine. After adding a token on MM for
Base Sepolia, it does not show the token in the "token enable list". Go here: 
https://base-sepolia.blockscout.com/address/0x.... (your wallet address)
Click the MM icon next to the contract address, it will popup a "add token" menu in MM. Accept it and
it will show up.

### Rabby Wallet
Rabby Wallet auto-detects chains (no manual RPC config needed for most networks), has notably better
token balance detection than MetaMask, and shows pre-transaction simulation so you can see exactly what
a contract call will do before signing. It's built by DeBank, originally aimed at multi-chain DeFi users,
so token/balance handling was a priority from day one. Good fit given you're juggling EURe and AccountManager
contract interactions.

### Coinbase Wallet
Worth considering specifically because Base is a Coinbase L2, so first-party support tends to be solid
(faster to pick up new tokens, official Base Sepolia faucet integration in some flows). If you ever want a
fallback "reference implementation" for how balances should look, this is it.

### Frame
Desktop-native (not a browser extension), good if you want wallet operations decoupled from the browser
entirely, with solid multi-chain RPC handling. More of a power-user choice.

### Rainbow Wallet
Decent token detection, simpler UI, less battle-tested for contract-heavy testnet work than Rabby.
