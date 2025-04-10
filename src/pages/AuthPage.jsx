// src/pages/AuthPage.jsx
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <AuthForm />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #ffe4e1, #ffc0cb)',
    padding: '1rem',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(255, 105, 180, 0.2)',
    padding: '2rem',
    width: '100%',
    maxWidth: '400px',
  },
};

export default AuthPage;
