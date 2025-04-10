import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/auth');
    onClose();
  };

  const handleOpenNgoMap = () => {
    window.open(
      'https://www.google.com/maps/d/embed?mid=1xzAwKxowPasbN96WKfbUn1aazLjHN0A&ehbc=2E312F&noprof=1',
      '_blank'
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.sidebar}>
      <button style={styles.closeBtn} onClick={onClose}>✖</button>
      <h2 style={styles.heading}>User Profile</h2>
      <ul style={styles.menu}>
        <li onClick={() => handleNavigation('/wallet')}>👛 SoloCircle Wallet</li>
        <li onClick={() => handleNavigation('/dashboard')}>🏠 Dashboard</li>
        <li onClick={() => handleNavigation('/settings')}>⚙️ Settings</li>
        <li onClick={() => handleNavigation('/activity')}>📄 My Activity</li>
        <li onClick={handleOpenNgoMap}>🗺️ Nearby NGOs</li> {/* 🚀 NEW NGO BUTTON */}
        <li onClick={handleLogout}>🚪 Logout</li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    width: '280px',
    backgroundColor: '#ffe4ec',
    padding: '2rem 1.5rem',
    boxShadow: '-3px 0 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#c71585',
    marginBottom: '1.5rem',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    fontSize: '1.1rem',
    color: '#333',
    cursor: 'pointer',
  },
};

export default UserSidebar;
