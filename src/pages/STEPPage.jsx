import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const STEPPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>Support to Training and Employment Program for Women (STEP)</h1>
        <p style={styles.subtitle}>
          Empowering women through structured skill training and employment opportunities.
        </p>

        {/* 🔍 Overview */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🔍 What is STEP?</h2>
          <p style={styles.text}>
            The STEP scheme is designed to provide skills that give women sustainable livelihood options. It helps single mothers and disadvantaged women improve employability and income generation across various sectors like agriculture, handicrafts, handlooms, and more.
          </p>
        </section>

        {/* 📌 Objectives */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🎯 Core Objectives</h2>
          <ul style={styles.list}>
            <li>Deliver formal/informal training in traditional and emerging skills</li>
            <li>Enhance employability and entrepreneurial capability</li>
            <li>Promote gender equity and women’s participation in economic development</li>
            <li>Support vulnerable women including single mothers, widows, and rural women</li>
          </ul>
        </section>

        {/* 👥 Who Can Apply */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>👥 Who Can Apply</h2>
          <p style={styles.text}>
            Any woman aged 16 years and above, especially those from marginalized or economically weaker backgrounds. Priority is given to single mothers, rural women, and women in informal sectors.
          </p>
        </section>

        {/* 🌐 Link */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🌐 Official Website</h2>
          <a
            href="https://wcd.nic.in/schemes/support-training-and-employment-programme-women-step"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Visit the STEP Scheme Portal →
          </a>
        </section>
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
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.2rem',
    color: '#d63384',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    fontSize: '1.1rem',
    marginBottom: '2rem',
  },
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#c71585',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.6',
  },
  list: {
    paddingLeft: '1.5rem',
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.6',
  },
  link: {
    display: 'inline-block',
    marginTop: '0.5rem',
    color: '#d63384',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default STEPPage;
