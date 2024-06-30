'use client'
import { ConnectButton, useSendTransaction, ThirdwebProvider } from "thirdweb/react";
import { client } from "./client";
import { createThirdwebClient, getContract, resolveMethod, defineChain, prepareContractCall } from "thirdweb";
import Image from "next/image";

export default function Home() {
  const chain = defineChain(59141);

  // Connect to your contract
  const contract = getContract({ 
    client, 
    chain, 
    address: "0xCDD3D74FB6c8D7F495793EB44ACcB12Db89BaA0d"
  });

  return (
    <ThirdwebProvider>
      <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="py-20">
          <Header />
          <div className="flex justify-center">
            <ConnectButton client={client} />
          </div>
          <AppMain contract={contract} />
        </div>
      </main>
    </ThirdwebProvider>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image src="/logo.png" className="App-logo" alt="logo" width={150} height={150} />
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        <span className="inline-block -skew-x-6 text-blue-500"> SafeSend </span>
      </h1>
    </header>
  );
}

function AppMain({ contract }) {
  const { mutate: sendTransaction } = useSendTransaction();

  const onClickClaimBackCROAK = () => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "claimBackCROAK", 
      params: [] 
    });
    sendTransaction(transaction);
  };

  const onClickClaimBackEfrogs = () => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "claimBackEfrogs", 
      params: [] 
    });
    sendTransaction(transaction);
  };

  const onClickClaimBackEther = () => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "claimBackEther", 
      params: [] 
    });
    sendTransaction(transaction);
  };

  const onClickClaimCROAK = (senderAddr) => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "claimCROAK", 
      params: [senderAddr] 
    });
    sendTransaction(transaction);
  };

  const onClickClaimEfrogs = (senderAddr) => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "claimEfrogs", 
      params: [senderAddr] 
    });
    sendTransaction(transaction);
  };

  const onClickClaimEther = (senderAddr) => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "claimEther", 
      params: [senderAddr] 
    });
    sendTransaction(transaction);
  };

  const onClickSendCROAK = (receiver, amount) => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "sendCROAK", 
      params: [receiver, amount] 
    });
    sendTransaction(transaction);
  };

  const onClickSendEfrogs = (receiver, tokenId) => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "sendEfrogs", 
      params: [receiver, tokenId] 
    });
    sendTransaction(transaction);
  };

  const onClickSendEther = (payableAmount, receiver) => {
    const transaction = prepareContractCall({ 
      contract, 
      method: "sendEther", 
      params: [payableAmount, receiver] 
    });
    sendTransaction(transaction);
  };

  return (
    <div className="App">
      <main className="App-main">
        <div className="container">
          <div className="section ether-section">
            <h2>Ether Transfers</h2>
            <div className="ether-functions">
              <div className="card">
                <h3>Claim Ether Back</h3>
                <button onClick={onClickClaimBackEther}>Write</button>
              </div>
              <div className="card">
                <h3>Claim Ether</h3>
                <input type="text" id="claimEtherSenderAddr" placeholder="senderAddr (address)" />
                <button onClick={() => onClickClaimEther(document.getElementById('claimEtherSenderAddr').value)}>Write</button>
              </div>
              <div className="card">
                <h3>Send Ether</h3>
                <input type="text" id="sendEtherAmount" placeholder="sendEther (payableAmount (ether))" />
                <input type="text" id="sendEtherReceiver" placeholder="receiver (address)" />
                <button onClick={() => onClickSendEther(document.getElementById('sendEtherAmount').value, document.getElementById('sendEtherReceiver').value)}>Write</button>
              </div>
            </div>
          </div>
          <div className="sub-container">
            <div className="section">
              <h2>
                <Image src="/croak_logo.png" alt="CROAK Logo" className="section-logo" width={50} height={50} />
                CROAK Transfers
              </h2>
              <div className="card">
                <h3>Claim CROAK Back</h3>
                <button onClick={onClickClaimBackCROAK}>Write</button>
              </div>
              <div className="card">
                <h3>Claim CROAK</h3>
                <input type="text" id="claimCROAKSenderAddr" placeholder="senderAddr (address)" />
                <button onClick={() => onClickClaimCROAK(document.getElementById('claimCROAKSenderAddr').value)}>Write</button>
              </div>
              <div className="card">
                <h3>Send CROAK</h3>
                <input type="text" id="sendCROAKReceiver" placeholder="receiver (address)" />
                <input type="text" id="sendCROAKAmount" placeholder="amount (uint256)" />
                <button onClick={() => onClickSendCROAK(document.getElementById('sendCROAKReceiver').value, document.getElementById('sendCROAKAmount').value)}>Write</button>
              </div>
            </div>
            <div className="section">
              <h2>
                <Image src="/efrogs_logo.png" alt="Efrogs Logo" className="section-logo" width={50} height={50} />
                Efrogs Transfers
              </h2>
              <div className="card">
                <h3>Claim Efrogs Back</h3>
                <button onClick={onClickClaimBackEfrogs}>Write</button>
              </div>
              <div className="card">
                <h3>Claim Efrogs</h3>
                <input type="text" id="claimEfrogsSenderAddr" placeholder="senderAddr (address)" />
                <button onClick={() => onClickClaimEfrogs(document.getElementById('claimEfrogsSenderAddr').value)}>Write</button>
              </div>
              <div className="card">
                <h3>Send Efrogs</h3>
                <input type="text" id="sendEfrogsReceiver" placeholder="receiver (address)" />
                <input type="text" id="sendEfrogsTokenId" placeholder="tokenId (uint256)" />
                <button onClick={() => onClickSendEfrogs(document.getElementById('sendEfrogsReceiver').value, document.getElementById('sendEfrogsTokenId').value)}>Write</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}