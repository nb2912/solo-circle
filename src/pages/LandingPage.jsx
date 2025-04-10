import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../public/landing_page.png'; // ensure image exists

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.leftPane}>
          <img src={heroImage} alt="Community support" style={styles.image} />
        </div>

        <div style={styles.rightPane}>
          <h1 style={styles.heading}>SoloCircle</h1>
          <p style={styles.description}>
            SoloCircle is a digital support ecosystem for single mothers—designed to connect them with childcare resources, legal aid, job opportunities, emergency help, and vital government schemes. We’re building a stronger future, together.
          </p>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => navigate('/auth')}>
              Log In
            </button>
            <button style={styles.button} onClick={() => navigate('/auth')}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    background: 'linear-gradient(to right, #ffe4e1, #ffccd5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '90%',
    width: '1100px',
    minHeight: '550px',
    overflow: 'hidden',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#fef2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '12px',
  },
  rightPane: {
    flex: 1,
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2.75rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#ff5c8a',
  },
  description: {
    fontSize: '1.1rem',
    color: '#444',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    backgroundColor: '#ff6b81',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default LandingPage;
