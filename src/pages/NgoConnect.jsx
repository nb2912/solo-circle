import React from 'react';

const NgoConnect = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>📍 Connect with Nearby NGOs</h2>
      <p style={styles.subtext}>
        Locate NGOs near you that offer support for childcare, legal help, and financial assistance. This map helps you identify verified organizations ready to assist.
      </p>

      <div style={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1xzAwKxowPasbN96WKfbUn1aazLjHN0A&ehbc=2E312F&noprof=1"
          allowFullScreen
          loading="lazy"
          title="NGO Map"
          style={styles.iframe}
        ></iframe>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff6fa',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    marginTop: '3rem',
    marginBottom: '3rem',
    maxWidth: '100%',
  },
  heading: {
    fontSize: '2rem',
    color: '#d63384',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem',
    maxWidth: '700px',
  },
  mapWrapper: {
    position: 'relative',
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  iframe: {
    border: 0,
    width: '100%',
    height: '100%',
  },
};

export default NgoConnect;
