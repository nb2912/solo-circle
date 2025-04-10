import React from 'react';

const therapists = [
  { name: 'Dr. Aisha Khan', rating: 4.8 },
  { name: 'Dr. Neha Verma', rating: 4.6 },
  { name: 'Dr. Ramesh Iyer', rating: 4.9 },
  { name: 'Dr. Meera Joshi', rating: 4.7 },
];

const TherapyPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Therapists & Counselors</h1>
      <div style={styles.cardContainer}>
        {therapists.map((therapist, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.name}>{therapist.name}</h3>
            <p style={styles.rating}>⭐ {therapist.rating}</p>
          </div>
        ))}
      </div>
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
    fontSize: '2rem',
    color: '#d63384',
    marginBottom: '1.5rem',
  },
  cardContainer: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  card: {
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    width: '200px',
    textAlign: 'center',
  },
  name: {
    fontSize: '1.2rem',
    color: '#c71585',
  },
  rating: {
    fontSize: '1rem',
    color: '#444',
  },
};

export default TherapyPage;
