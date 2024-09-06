import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contractABI';

// Function to get Ether transfer details
export const getEtherTransfer = async (provider, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  return await contract.getEtherTransfer(senderAddr);
};

// Function to send Ether
export const sendEther = async (signer, receiver, amount) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.sendEther(receiver, { value: ethers.utils.parseEther(amount) });
  await tx.wait();
};

// Function to claim Ether
export const claimEther = async (signer, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimEther(senderAddr);
  await tx.wait();
};

// Function to claim back Ether
export const claimBackEther = async (signer) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimBackEther();
  await tx.wait();
};

// Function to send CROAK tokens
export const sendCROAK = async (signer, receiver, amount) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.sendCROAK(receiver, amount);
  await tx.wait();
};

// Function to claim CROAK tokens
export const claimCROAK = async (signer, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimCROAK(senderAddr);
  await tx.wait();
};

// Function to claim back CROAK tokens
export const claimBackCROAK = async (signer) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimBackCROAK();
  await tx.wait();
};

// Function to send Efrogs NFT
export const sendEfrogs = async (signer, receiver, tokenId) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.sendEfrogs(receiver, tokenId);
  await tx.wait();
};

// Function to claim Efrogs NFT
export const claimEfrogs = async (signer, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimEfrogs(senderAddr);
  await tx.wait();
};

// Function to claim back Efrogs NFT
export const claimBackEfrogs = async (signer) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimBackEfrogs();
  await tx.wait();
};
