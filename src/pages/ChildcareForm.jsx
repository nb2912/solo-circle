import React, { useState } from 'react';

const ChildcareForm = () => {
  const [formData, setFormData] = useState({
    motherName: '',
    childName: '',
    childAge: '',
    schoolName: '',
    income: '',
    address: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert("Request Submitted Successfully!");
    // Integrate API call here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Childcare Assistance Request Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} style={styles.input} required />
        <input type="text" name="childName" placeholder="Child's Name" value={formData.childName} onChange={handleChange} style={styles.input} required />
        <input type="number" name="childAge" placeholder="Child's Age" value={formData.childAge} onChange={handleChange} style={styles.input} required />
        <input type="text" name="schoolName" placeholder="School Name (if studying)" value={formData.schoolName} onChange={handleChange} style={styles.input} />
        <input type="text" name="income" placeholder="Current Income (if any)" value={formData.income} onChange={handleChange} style={styles.input} />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={styles.textarea} required />
        <textarea name="requirements" placeholder="Childcare Requirements" value={formData.requirements} onChange={handleChange} style={styles.textarea} required />
        <button type="submit" style={styles.button}>Submit Request</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff6fa',
    borderRadius: '12px',
    maxWidth: '700px',
    margin: 'auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  header: {
    fontSize: '1.8rem',
    color: '#d63384',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    minHeight: '100px'
  },
  button: {
    padding: '0.75rem',
    borderRadius: '8px',
    backgroundColor: '#d63384',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold'
  }
};

export default ChildcareForm;
