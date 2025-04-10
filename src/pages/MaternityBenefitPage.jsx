import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MaternityBenefitPage = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1>Maternity Benefit Program</h1>
        <p>
          The Maternity Benefit Program provides financial assistance to pregnant and lactating mothers for the birth of the first child.
        </p>
        <ul>
          <li>Eligibility: Pregnant women over 19 years old</li>
          <li>Benefit: ₹6,000 in installments</li>
          <li>Apply: Via Anganwadi Center or online state portal</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff0f5',
    minHeight: '80vh',
    color: '#333',
  },
};

export default MaternityBenefitPage;
