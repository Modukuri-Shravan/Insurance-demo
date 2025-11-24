import React, { useEffect, useState } from 'react';
import API from '../../../services/api';

export default function ApplyPolicy() {
  const [policies, setPolicies] = useState([]);
  const [policyId, setPolicyId] = useState('');
  const [customerName, setCustomerName] = useState('');

  useEffect(() => { API.get('/policies').then(r => setPolicies(r.data)); }, []);

  const submit = async e => {
    e.preventDefault();
    await API.post('/applications', { policyId: Number(policyId), customerName, status: 'pending' });
    alert('Application submitted');
    setCustomerName('');
  };

  return (
    <div>
      <h3>Apply for Policy</h3>
      <form onSubmit={submit}>
        <select value={policyId} onChange={e => setPolicyId(e.target.value)} required>
          <option value="">Select policy</option>
          {policies.map(p => <option value={p.id} key={p.id}>{p.name}</option>)}
        </select>
        <input value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="Your name" required />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}