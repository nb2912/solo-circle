// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>Contact Us: <a href="mailto:nihalbasaniwal2912@gmail.com" style={styles.link}>nihalbasaniwal@2912@gmail.com</a></p>
        <p>Phone: +91 8697295115</p>
      </div>
      <div style={styles.socials}>
        <a href="#" style={styles.icon}>Instagram</a>
        <a href="#" style={styles.icon}>Facebook</a>
        <a href="#" style={styles.icon}>Twitter</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '1.5rem 2rem',
    backgroundColor: '#ffe4ec',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#c71585',
    flexWrap: 'wrap',
  },
  link: {
    color: '#d63384',
    textDecoration: 'none',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    color: '#d63384',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default Footer;
