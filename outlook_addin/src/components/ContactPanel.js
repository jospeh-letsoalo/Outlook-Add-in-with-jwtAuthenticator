import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactPanel = (props) => {
  const [contact, setContact] = useState(null);
  const [email,setEmail] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(()=>{
    console.log(localStorage.getItem('token'))
    setEmail(localStorage.getItem('email'));
  },[])

  const fetchContact = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      
      /*const res = await axios.get(`http://localhost:5000/api/contact?email=${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });*/ //this is for development
      const res = await axios.get(`/api/contact?email=${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContact(res.data);
    } catch (err) {
      setError('Failed to fetch contact information.');
      setContact(null);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Contact Info</h2>
      <p>Sender: {email}</p>
      <button onClick={fetchContact} disabled={loading}>
        {loading ? 'Loading...' : 'Get Contact Info'}
      </button>
      <button onClick={()=>{localStorage.setItem('token', '');props.setIsLoggedIn(false)}} disabled={loading}>
        {'Logout'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {contact && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <p><strong>Full Name:</strong> {contact.name}</p>
          <p><strong>Title:</strong> {contact.title}</p>
          <p><strong>Department:</strong> {contact.department}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
        </div>
      )}
    </div>
  );
};

export default ContactPanel;