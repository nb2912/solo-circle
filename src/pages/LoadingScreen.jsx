// src/pages/LoadingScreen.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import vid from '../public/first_animation.mp4';

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.wrapper}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
        src={vid}

      />

      <div style={styles.overlay}>
        <h2 style={styles.text}>Getting things ready...</h2>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  },
  overlay: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // soft overlay
    backdropFilter: 'blur(4px)',
    flexDirection: 'column',
  },
  text: {
    fontSize: '1.8rem',
    color: '#c71585',
    fontWeight: '600',
  },
};

export default LoadingScreen;
