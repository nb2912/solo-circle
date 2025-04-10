// src/components/NgoConnect.jsx
import React, { useState } from 'react';

const NgoConnect = () => {
  const [ngos, setNgos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setLoading(true);
    setError('');
    setNgos([]);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log('Your location:', latitude, longitude);

      const apiKey = 'YOUR_GOOGLE_API_KEY'; // 🔐 Replace with your real key
      const radius = 5000; // meters
      const type = 'ngo'; // Custom keyword for filtering

      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=NGO&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
          const topNgos = data.results.slice(0, 3).map((ngo) => ({
            name: ngo.name,
            address: ngo.vicinity,
            placeId: ngo.place_id,
          }));
          setNgos(topNgos);
        } else {
          setError('No NGOs found nearby.');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch NGO data.');
      } finally {
        setLoading(false);
      }
    }, () => {
      setError('Permission denied or location unavailable.');
      setLoading(false);
    });
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Need Assistance from a Local NGO?</h2>
      <p style={styles.subtext}>
        Tap into a trusted network of support groups and non-profits in your area.
      </p>
      <button style={styles.button} onClick={handleConnect} disabled={loading}>
        {loading ? 'Searching...' : 'Connect with Nearest NGO'}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {ngos.length > 0 && (
        <div style={styles.ngoList}>
          <h3>Nearby NGOs</h3>
          {ngos.map((ngo, index) => (
            <div key={index} style={styles.ngoCard}>
              <strong>{ngo.name}</strong>
              <p>{ngo.address}</p>
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${ngo.placeId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.mapLink}
              >
                View on Map
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#ffe4ec',
    padding: '2rem',
    margin: '2rem auto',
    textAlign: 'center',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '800px',
    boxShadow: '0 4px 10px rgba(255, 182, 193, 0.3)',
  },
  heading: {
    color: '#c71585',
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    color: '#555',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#ff69b4',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  },
  ngoList: {
    marginTop: '2rem',
    textAlign: 'left',
  },
  ngoCard: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxShadow: '0 2px 6px rgba(255, 182, 193, 0.2)',
  },
  mapLink: {
    color: '#d63384',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default NgoConnect;
