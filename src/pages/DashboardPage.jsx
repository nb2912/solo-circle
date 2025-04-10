import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    title: 'Childcare Support',
    path: '/childcare-support',
    description: 'Find trusted childcare services and support resources near you.',
  },
  {
    title: 'Therapy & Counseling',
    path: '/therapy', // ⬅️ Added path for routing
    description: 'Access mental health resources and connect with therapists.',
  },
  {
    title: 'Job & Skill Support',
    description: 'Explore job boards, upskilling programs, and career mentorship.',
  },
  {
    title: 'Government Schemes',
    description: 'Discover national and state-level initiatives for single mothers.',
  },
  {
    title: 'Book a Nanny',
    path: '/nanny-service',
    description: 'Hire a trusted nanny to care for your child while you’re at work.',
  },
];

const DashboardPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  const navigate = useNavigate();

  const handleFeatureClick = (feature) => {
    if (feature.path) {
      navigate(feature.path); // ➡️ Navigate to routed feature
    } else {
      setSelectedFeature(feature);
    }
  };

  const isNgoRelevant = ['Childcare Support', 'Legal Aid', 'Emergency Help'].includes(
    selectedFeature.title
  );

  const renderFeatureDescription = () => {
    switch (selectedFeature.title) {
      case 'Legal Aid':
        return (
          <p style={styles.rightDescription}>
            Get connected with legal experts who can assist you with custody, domestic
            issues, and other legal matters confidentially.
          </p>
        );
      case 'Job & Skill Support':
        return (
          <p style={styles.rightDescription}>
            Browse curated job opportunities, attend free upskilling webinars, and enroll
            in resume-building workshops to increase your employability.
          </p>
        );
      case 'Emergency Help':
        return (
          <p style={styles.rightDescription}>
            If you are in urgent need, access verified emergency services including
            shelters, food banks, and crisis hotlines.
          </p>
        );
      case 'Government Schemes':
        return (
          <p style={styles.rightDescription}>
            Learn about ongoing government schemes and financial assistance programs
            tailored for single mothers. Eligibility guidance provided.
          </p>
        );
      default:
        return null;
    }
  };

  const renderNgoSupportBlock = () => (
    <div style={styles.ngoBlock}>
      <h3 style={styles.ngoHeading}>Need Assistance from a Local NGO?</h3>
      <p style={styles.ngoDescription}>
        Tap into a trusted network of support groups and non-profits in your area.
      </p>
      <button onClick={() => navigate('/ngo-connect')} style={styles.ngoButton}>
        Connect with Nearest NGO
      </button>
    </div>
  );

  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to Your Dashboard 🎯</h1>
        <p style={styles.subheading}>Choose the kind of help you need from the left panel.</p>

        <div style={styles.content}>
          {/* Left Panel */}
          <div style={styles.leftPanel}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  ...styles.card,
                  borderLeft:
                    feature.title === selectedFeature.title
                      ? '4px solid #d63384'
                      : '4px solid transparent',
                  backgroundColor:
                    feature.title === selectedFeature.title ? '#fcddea' : '#ffe4ec',
                }}
                onClick={() => handleFeatureClick(feature)}
              >
                <h3 style={styles.cardTitle}>{feature.title}</h3>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div style={styles.rightPanel}>
            <h2 style={styles.rightTitle}>{selectedFeature.title}</h2>
            {renderFeatureDescription()}
            {isNgoRelevant && renderNgoSupportBlock()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#fff0f5',
  },
  main: {
    flex: 1,
    padding: '2rem 4rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#d63384',
    marginBottom: '0.5rem',
  },
  subheading: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  content: {
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  leftPanel: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: '200px',
  },
  card: {
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
  cardTitle: {
    color: '#c71585',
    fontSize: '1.2rem',
    margin: 0,
  },
  rightPanel: {
    flex: '2',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
    minWidth: '300px',
  },
  rightTitle: {
    fontSize: '1.8rem',
    color: '#d63384',
  },
  rightDescription: {
    fontSize: '1rem',
    color: '#444',
    marginTop: '1rem',
    lineHeight: '1.6',
  },
  ngoBlock: {
    marginTop: '2rem',
    borderTop: '1px solid #eee',
    paddingTop: '1.5rem',
  },
  ngoHeading: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#b2005f',
    marginBottom: '0.5rem',
  },
  ngoDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1rem',
  },
  ngoButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#ff4da6',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default DashboardPage;
