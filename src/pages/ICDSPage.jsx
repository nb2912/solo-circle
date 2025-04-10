import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ICDSPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>Integrated Child Development Services (ICDS)</h1>
        <p style={styles.subtitle}>
          A flagship program by the Government of India focused on holistic development of young children and mothers.
        </p>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🔍 Overview</h2>
          <p style={styles.text}>
            The ICDS scheme provides a package of six essential services to children under 6 years of age and their mothers, including supplementary nutrition, preschool education, immunization, health check-ups, referral services, and health and nutrition education.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🎯 Key Benefits</h2>
          <ul style={styles.list}>
            <li>Nutrition supplementation for pregnant and lactating mothers</li>
            <li>Free preschool education for children aged 3–6</li>
            <li>Health check-ups and vaccinations through local Anganwadi centers</li>
            <li>Referrals to health care facilities for serious illnesses</li>
            <li>Awareness on maternal and child health</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📌 Eligibility</h2>
          <p style={styles.text}>
            All children under 6 years, pregnant women, and lactating mothers are eligible to access ICDS services.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🌐 Official Link</h2>
          <a
            href="https://icds-wcd.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Visit Official ICDS Portal →
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

export default ICDSPage;
