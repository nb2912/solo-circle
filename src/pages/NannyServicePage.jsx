import React from 'react';

const NannyServicePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👶 Book a Trusted Nanny</h1>
      <p style={styles.description}>
        Need someone to take care of your little one while you’re at work? We’ve got you covered.
        Book a certified nanny for a day, right to your doorstep.
      </p>

      <form style={styles.form}>
        <label style={styles.label}>Your Name:</label>
        <input type="text" placeholder="Enter your name" style={styles.input} />

        <label style={styles.label}>Child's Age:</label>
        <input type="number" placeholder="Enter child's age" style={styles.input} />

        <label style={styles.label}>Date of Service:</label>
        <input type="date" style={styles.input} />

        <label style={styles.label}>Address:</label>
        <textarea placeholder="Enter your address" style={styles.textarea} />

        <button type="submit" style={styles.button}>Request Nanny</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff0f5',
    minHeight: '100vh',
  },
  heading: {
    color: '#d63384',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    marginBottom: '2rem',
    fontSize: '1rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    minHeight: '80px',
  },
  button: {
    backgroundColor: '#d63384',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default NannyServicePage;
