import React, { useEffect, useState } from 'react';
import API from '../../services/api';

export default function PoliciesPage() {
  const [policies, setPolicies] = useState([]);
  useEffect(() => {
    API.get('/policies').then(r => setPolicies(r.data));
  }, []);
  return (
    <div>
      <h3>Available Policies</h3>
      <ul>
        {policies.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ${p.premium} — {p.details}
          </li>
        ))}
      </ul>
    </div>
  );
}