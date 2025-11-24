import React, { useState } from 'react';
import API from '../../../services/api';

export default function Register() {
  const [username, setUsername] = useState('');
  const submit = async e => {
    e.preventDefault();
    await API.post('/users', { username, role: 'customer' });
    alert('Registered (mock). You can now apply for policies.');
    setUsername('');
  };
  return (
    <div>
      <h3>Customer Register</h3>
      <form onSubmit={submit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}