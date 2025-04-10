// src/pages/CommunityChatPage.jsx
import React, { useState } from 'react';

const CommunityChatPage = () => {
  const [message, setMessage] = useState('');
  const [localMessages, setLocalMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message,
      };
      setLocalMessages([...localMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>SoloCircle Community Chat 💬</h2>

      <div style={styles.chatBox}>
        {localMessages.map((msg) => (
          <div key={msg.id} style={styles.chatBubble}>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} style={styles.form}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffeef4',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    color: '#c2185b',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  chatBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    overflowY: 'auto',
    maxHeight: '400px',
    marginBottom: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  },
  chatBubble: {
    backgroundColor: '#f8bbd0',
    padding: '0.75rem 1rem',
    borderRadius: '20px',
    marginBottom: '0.5rem',
    maxWidth: '70%',
    alignSelf: 'flex-start',
    fontSize: '0.95rem',
  },
  form: {
    display: 'flex',
    gap: '0.75rem',
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    borderRadius: '20px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  sendButton: {
    backgroundColor: '#c2185b',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '0.75rem 1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default CommunityChatPage;
