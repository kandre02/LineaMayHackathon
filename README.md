
# SafeSend DApp
![logo](https://github.com/user-attachments/assets/c62ce9b5-e6f1-4eb1-9282-79570d2bb306)


SafeSend is a smart contract solution designed to address a critical issue in the blockchain space: the loss of funds due to human errors like mistyped wallet addresses. This project, started as an idea in Linea Dev Cook-off Hackathon, adds an extra layer of security to the blockchain by allowing the sender to claim back their crypto if the receiver doesn’t receive it. The user interface is designed to educate people on how to send crypto correctly, helping to prevent these costly mistakes. With an estimated $3.8 billion in crypto lost last year due to such errors, this is an important problem to solve. Expanding the Linea Network with SafeSend not only educates users but also offers a practical solution to a major issue in the crypto world.

## Key Educational Features

### Learn Mode:

This unique feature transforms the DApp into an interactive learning environment. When Learn Mode is enabled, users receive detailed tutorials explaining each function—whether it’s sending Ether, claiming Ether, or claiming back Ether. These tutorials cover essential topics like understanding blockchain networks, verifying transaction details, and managing transaction fees.

- **How to Send Tokens:** Understand blockchain networks, verify receiver addresses, and learn about transaction fees.
- **How to Claim Tokens:** Learn about claiming tokens, the importance of sender addresses in this DApp, and how this differs from typical crypto transactions.
- **How to Claim Back Tokens:** Learn why transactions might fail, how to reclaim your tokens, and how to avoid common mistakes in the future.

### Step-by-Step Guidance:

Each action within the DApp is broken down into easy-to-follow steps, ensuring that even those with no prior experience can use the platform with confidence. Whether you’re sending tokens, claiming them, or retrieving them if something goes wrong, SafeSend guides you every step of the way.

## Features

- **Secure transfer of Ether** with both send and claim back functionalities.
- **Secure transfer of eFrogs NFTs** with send and claim back functionalities.
- **Secure transfer of $CROAK tokens** with send and claim back functionalities.

SafeSend provides an intuitive interface for secure token and asset transfers, ensuring that users can easily correct mistakes like sending assets to the wrong address by leveraging the claim-back feature.

## Smart Contract Security

At the core of SafeSend is a robust and secure smart contract that handles all transactions. Here’s why our smart contract stands out:

### ReentrancyGuard Protection:

To ensure the highest level of security, the SafeSend smart contract is fortified with OpenZeppelin's ReentrancyGuard. This feature prevents reentrant attacks, a common vulnerability in smart contracts, ensuring that all transactions are secure and tamper-proof.

### Transparency and Tracking:

The smart contract stores all relevant transaction details—such as sender and receiver addresses, the amount of tokens transferred, and transaction statuses—making it easy to track and verify transactions. This transparency not only builds trust but also empowers users to manage their crypto assets confidently.

### Failsafe Features:

If a transaction fails, users can easily reclaim their tokens using the Claim Back feature. This is particularly useful for beginners who may be worried about making mistakes when sending tokens.

## Partners I Used

- **Remix**: for contract deployment
- **OpenZeppelin**: contract wizard for secure smart contract development
- **React**: A JavaScript library for building user interfaces
- **Next.js**: React framework for server-side rendering
- **Thirdweb SDK**: Simplifies wallet connection and contract interaction
- **ethers.js**: A library for interacting with the Ethereum blockchain
- **WalletConnect**: For easy multi-chain wallet integration
- **web3.js**: For blockchain interaction and contract integration

## Special Thanks

- **Linea**: For making this hackathon opportunity.
- **HackQuest.io**: For promoting this hackathon and supporting projects of blockchain technology.

## Live Demo

Experience SafeSend yourself: [SafeSend](https://safesendlinea.netlify.app/)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A web3-enabled browser (like Chrome with MetaMask).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/kandre02/LineaMayHackathon
    cd SafeSend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Build for production:

    ```bash
    npm run build
    ```

## Progress for July

- Updated the User Interface for a softer and more modern experience.
- Secured the smart contract.
- Deployed the smart contract on the Linea Mainnet.
- Added an "About Page".

## Author

**Konstantinos Andreou**

- LinkedIn: [Konstantinos Andreou](https://www.linkedin.com/in/andreou00/)
- Telegram: [@andreou00](https://t.me/andreou00)

## License

This project is licensed under the MIT License.
