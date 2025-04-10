import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CrecheSchemePage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>National Creche Scheme</h1>
        <p style={styles.subtitle}>
          Supporting working mothers by providing safe, affordable, and nurturing childcare services.
        </p>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🔍 Overview</h2>
          <p style={styles.text}>
            The National Creche Scheme offers day-care facilities to children (6 months to 6 years) of working women. These centers provide nutrition, preschool education, and a secure environment so mothers can pursue employment or skill training.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🎯 Key Features</h2>
          <ul style={styles.list}>
            <li>Daycare services for 7.5 hours a day, six days a week</li>
            <li>Nutrition support including meals and milk</li>
            <li>Early childhood education and stimulation</li>
            <li>Safe and hygienic environment for children</li>
            <li>Focus on children’s holistic development</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📌 Who Can Apply</h2>
          <p style={styles.text}>
            The scheme is open to children of working mothers (BPL or with family income less than ₹12,000/month), including single mothers, widows, and those engaged in informal labor.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🌐 Official Link</h2>
          <a
            href="https://wcd.nic.in/schemes/national-creche-scheme"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Learn More About the Scheme →
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
    fontSize: '2rem',
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

export default CrecheSchemePage;
