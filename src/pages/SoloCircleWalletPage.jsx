import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SoloCircleWalletPage = () => {
  const [balance, setBalance] = useState(250); // Example balance
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Credit', amount: 100, description: 'Referral Bonus', date: '2025-04-01' },
    { id: 2, type: 'Debit', amount: 50, description: 'Nanny Booking', date: '2025-04-03' },
    { id: 3, type: 'Credit', amount: 200, description: 'Govt Scheme Credit', date: '2025-04-05' }
  ]);

  return (
    <div style={styles.container}>
      <Navbar />

      <main style={styles.main}>
        <h1 style={styles.heading}>💰 SoloCircle Wallet</h1>
        <p style={styles.subheading}>
          Empowering your independence—track your funds, review activity, and unlock opportunities.
        </p>

        {/* Wallet Balance */}
        <div style={styles.balanceBox}>
          <h2 style={styles.balanceText}>Current Balance</h2>
          <p style={styles.amount}>₹ {balance.toFixed(2)}</p>
        </div>

        {/* Transactions */}
        <div style={styles.transactionSection}>
          <h3 style={styles.txnHeading}>Recent Transactions</h3>
          {transactions.length === 0 ? (
            <p style={styles.noTxn}>No transactions yet.</p>
          ) : (
            <ul style={styles.txnList}>
              {transactions.map((txn) => (
                <li key={txn.id} style={styles.txnItem}>
                  <div style={styles.txnDetails}>
                    <strong>{txn.type}</strong> - ₹{txn.amount}
                    <p style={styles.txnMeta}>{txn.description} | {txn.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff0f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#d63384',
  },
  subheading: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  balanceBox: {
    backgroundColor: '#ffe4ec',
    borderRadius: '10px',
    padding: '1.5rem',
    margin: '1rem auto 2rem',
    maxWidth: '400px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  balanceText: {
    fontSize: '1.2rem',
    color: '#c71585',
  },
  amount: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '0.5rem',
    color: '#800040',
  },
  transactionSection: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left',
  },
  txnHeading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#d63384',
  },
  noTxn: {
    fontStyle: 'italic',
    color: '#888',
  },
  txnList: {
    listStyle: 'none',
    padding: 0,
  },
  txnItem: {
    backgroundColor: '#fff',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  txnDetails: {
    fontSize: '1rem',
    color: '#333',
  },
  txnMeta: {
    fontSize: '0.9rem',
    color: '#777',
    marginTop: '0.3rem',
  },
};

export default SoloCircleWalletPage;
