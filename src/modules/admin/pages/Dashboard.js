import React, { useEffect, useState } from 'react';
import API from '../../../services/api';

export default function AdminDashboard() {
  const [applications, setApplications] = useState([]);
  useEffect(() => { load(); }, []);
  const load = () => API.get('/applications').then(r => setApplications(r.data));

  const decide = async (app, status) => {
    await API.patch(`/applications/${app.id}`, { status });
    if (status === 'approved') {
      // create a claim placeholder when approved for demo (real app differs)
      await API.post('/claims', { applicationId: app.id, customerName: app.customerName, status: 'assigned', surveyorId: 1, requestedAmount: 0 });
    }
    load();
  };

  return (
    <div>
      <h3>Admin - Applications</h3>
      <ul>
        {applications.map(a => (
          <li key={a.id}>
            {a.customerName} — policy {a.policyId} — <strong>{a.status}</strong>
            {a.status === 'pending' && (
              <>
                <button onClick={() => decide(a, 'approved')}>Approve</button>
                <button onClick={() => decide(a, 'rejected')}>Reject</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}