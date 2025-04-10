import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserSidebar from './UserSidebar';
import im1 from "../public/landing_page.png";
import im2 from "../public/download.jpg";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav style={styles.navbar}>
        {/* 🔁 Logo with Image */}
        <div style={styles.logoContainer}>
          <img
            src={im1}
            alt="SoloCircle Logo"
            style={styles.logoImage}
          />
        </div>

        {/* Navigation Links */}
        <ul style={styles.navLinks}>
          <li>
            <Link to="/community-chat" style={styles.joinButton}>
              Join Us
            </Link>
          </li>
        </ul>

        {/* 👤 Profile Section - Opens Sidebar */}
        <div style={styles.profileSection} onClick={() => setSidebarOpen(true)}>
          <img
            src={im2} // Optional: Add user avatar URL
            alt="User Profile"
            style={styles.avatar}
          />
          <span style={styles.username}>Hi, User</span>
        </div>
      </nav>

      {/* 🧾 Sidebar for Profile Controls */}
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffc0cb',
    color: '#fff',
    fontWeight: 'bold',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    objectFit: 'contain',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  joinButton: {
    backgroundColor: '#fff',
    color: '#c71585',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #fff',
    objectFit: 'cover',
  },
  username: {
    color: '#fff',
    fontSize: '1rem',
  },
};

export default Navbar;
