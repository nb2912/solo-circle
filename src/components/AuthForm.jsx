import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔄 Toggle login/signup mode
  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      alert('Please fill in both fields.');
      return;
    }

    if (isLogin) {
      // 🔐 Login flow
      const storedUser = JSON.parse(localStorage.getItem('userData'));
      if (
        storedUser &&
        storedUser.email === trimmedEmail &&
        storedUser.password === trimmedPassword
      ) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/loading'); // or directly to /dashboard if preferred
      } else {
        alert('Invalid credentials. Please make sure you signed up first.');
      }
    } else {
      // 📝 Signup flow
      const newUser = {
        email: trimmedEmail,
        password: trimmedPassword,
      };
      localStorage.setItem('userData', JSON.stringify(newUser));
      alert('Signup successful! You can now log in.');
      setIsLogin(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        required
      />

      <button type="submit" style={styles.button}>
        {isLogin ? 'Login' : 'Sign Up'}
      </button>

      <p style={styles.toggle}>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span onClick={toggleMode} style={styles.link}>
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </form>
  );
};

const styles = {
  title: {
    textAlign: 'center',
    color: '#c71585',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#ff69b4',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  toggle: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  link: {
    color: '#c71585',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default AuthForm;
