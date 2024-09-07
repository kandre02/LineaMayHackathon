import React, { useState } from 'react';
import './Home.css';
import croakLogo from './public/croak_logo.png';
import efrogsLogo from './public/efrogs_logo.png';

// Import the necessary functions from safesend.js
import { sendTransaction, claimTransaction, claimBackTransaction } from './safesend';

function Home({ transferType, learnMode, account }) {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [senderAddr, setSenderAddr] = useState('');
  const [activeTutorial, setActiveTutorial] = useState('');

  // Handle the send transaction
  const handleSend = async () => {
    try {
      const result = await sendTransaction(transferType, receiver, amount, account);
      alert(result);
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle the claim transaction
  const handleClaim = async () => {
    try {
      const result = await claimTransaction(transferType, senderAddr, account);
      alert(result);
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle the claim back transaction
  const handleClaimBack = async () => {
    try {
      const result = await claimBackTransaction(transferType, account);
      alert(result);
    } catch (error) {
      alert(error.message);
    }
  };

  const renderLogo = () => {
    if (transferType === 'CROAK') {
      return <img src={croakLogo} alt="CROAK Logo" className="transfer-logo" />;
    } else if (transferType === 'eFrogs NFT') {
      return <img src={efrogsLogo} alt="eFrogs Logo" className="transfer-logo" />;
    }
    return null;
  };

  const renderTutorial = () => {
    switch (activeTutorial) {
      case 'send':
        return (
          <div className="tutorial">
            <h3>How to Send {transferType}</h3>
            <p>Sending {transferType} involves transferring value across the blockchain. This is an essential skill for anyone using cryptocurrencies.</p>
          </div>
        );
      case 'claim':
        return (
          <div className="tutorial">
            <h3>How to Claim {transferType}</h3>
            <p>Claiming {transferType} means accepting the tokens/NFT that someone else has sent to you.</p>
          </div>
        );
      case 'claimBack':
        return (
          <div className="tutorial">
            <h3>Failed to Send {transferType}? Don’t Worry, Your Crypto is Safe!</h3>
            <p>If your transaction didn’t go through as planned, don’t panic. This dApp allows you to claim back your {transferType} safely.</p>
          </div>
        );
      default:
        return <p>Select an action to learn more.</p>;
    }
  };

  return (
    <main className="main-container">
      <div className="functions-container">
        <section className="card">
          <div className="logo-text-wrapper">
            {renderLogo()}
            <h2>Send {transferType}</h2>
          </div>
          <input
            type="text"
            placeholder="Receiver address"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
          <input
            type="text"
            placeholder={`Amount in ${transferType === 'Ethereum' ? 'ETH' : transferType === 'CROAK' ? '$CROAK' : 'Token ID'}`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="action-button" onClick={handleSend}>Send {transferType}</button>
          {learnMode && <button className="learn-button" onClick={() => setActiveTutorial('send')}>Learn How to Send</button>}
        </section>
        <section className="card">
          <div className="logo-text-wrapper">
            {renderLogo()}
            <h2>Claim {transferType}</h2>
          </div>
          <input
            type="text"
            placeholder="Sender address"
            value={senderAddr}
            onChange={(e) => setSenderAddr(e.target.value)}
          />
          <button className="action-button" onClick={handleClaim}>Claim {transferType}</button>
          {learnMode && <button className="learn-button" onClick={() => setActiveTutorial('claim')}>Learn How to Claim</button>}
        </section>
        <section className="card">
          <div className="logo-text-wrapper">
            {renderLogo()}
            <h2>Claim Back {transferType}</h2>
          </div>
          <button className="action-button" onClick={handleClaimBack}>Claim Back {transferType}</button>
          {learnMode && <button className="learn-button" onClick={() => setActiveTutorial('claimBack')}>Learn Why It Failed</button>}
        </section>
      </div>

      {learnMode && (
        <section className="tutorial-section">
          {renderTutorial()}
        </section>
      )}
    </main>
  );
}

export default Home;
