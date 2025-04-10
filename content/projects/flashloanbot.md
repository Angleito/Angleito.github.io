---
name: Flashloanbot - Automated DeFi Trading on Sui
description: >-
  Automated trading bot for Sui leveraging DEX aggregation and potentially flash
  loans for DeFi opportunities.
tech_stack:
  - TypeScript
  - Sui
  - Node.js
  - '@mysten/sui.js'
  - '@7kprotocol/sdk-ts'
  - DEX Aggregation
  - DeFi
  - Automation
github: https://github.com/Angleito/SuiFlashBotTemplate
private_full_version: true
contact: arainey555@gmail.com
features:
  - Sui Blockchain Interaction (@mysten/sui.js)
  - DEX Aggregation (7k Protocol)
  - Optimal Swap Execution Engine
  - Secure Key Management (env vars, multiple formats)
  - Resilient Sui Client Connection
  - Fallback Pricing Mechanism
  - Arbitrage/Flashloan Orchestration Layer (Conceptual)
  - Configuration via .env
---

## Project Overview: Flashloanbot - Automated DeFi Trading Strategies on Sui

Flashloanbot is an automated trading bot designed to operate on the Sui blockchain. Its primary goal is to identify and execute potentially profitable trading opportunities, such as arbitrage, within the decentralized finance (DeFi) ecosystem on Sui. It leverages sophisticated techniques, potentially including flash loans, and integrates with DEX aggregators to optimize trade execution.

### Core Objective:

The main objective of Flashloanbot is to autonomously monitor the Sui DeFi landscape, detect price discrepancies or other profitable scenarios across different decentralized exchanges (DEXs), and execute complex multi-step transactions (potentially involving flash loans) to capture this value, all within the atomicity of a single blockchain transaction.

### Key Features & Functionality:

- **Blockchain Interaction (Sui):** Built specifically for Sui, using `@mysten/sui.js` for state queries, transaction building, key management, and submission.
- **DEX Aggregation (7k Protocol):** Integrates with `@7kprotocol/sdk-ts` to query best swap rates across multiple DEXs (`getQuote`) and build optimal transaction paths (`buildTx`).
- **Swap Execution Engine (SevenKSwapExecutor):** Manages the swap lifecycle: secure private key loading, quote generation, transaction building, signing, and submission.
- **Token Address Management:** Handles validation and formatting (`getTokenAddress`, `validateTokenFormat`, `fixTokenFormat`) for Sui token identifiers.
- **Resilience & Fallbacks:** Uses `createResilientSuiClient` for stable RPC connections and implements `getFallbackQuote` for estimated pricing during 7k API outages.
- **Potential Flash Loan / Arbitrage Orchestration (Conceptual):** Designed with a potential higher-level `ArbitrageOrchestrator` component to monitor prices, identify arbitrage, calculate flash loan needs, and coordinate multi-step atomic transactions using `SevenKSwapExecutor` or other modules.
- **Security:** Prioritizes secure private key handling via environment variables and supports multiple secure formats.
- **Configuration:** Uses `dotenv` for managing critical parameters (keys, RPC endpoints, API URLs).

### Technical Stack:

- **Language:** TypeScript
- **Blockchain:** Sui
- **Core Libraries:**
  - `@mysten/sui.js` (Sui Interaction)
  - `@7kprotocol/sdk-ts` (DEX Aggregation)
  - `dotenv` (Configuration)
  - `node-fetch` (API Calls)
  - `@scure/bip39`, `ed25519-hd-key` (Key Handling)
- **Environment:** Node.js

### Relevance for Employers:

Demonstrates hands-on Sui blockchain and DeFi expertise (DEXs, aggregation, arbitrage, flash loans), proficiency in SDK/API integration, design of complex automated strategies, implementation of resilience/error handling, security best practices (key management), and usage of a modern tech stack.

### Note

The linked GitHub repository contains a simplified demo version. The full implementation with advanced features is private. Please contact me at arainey555@gmail.com for more details or access. 

