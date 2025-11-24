import React, { useEffect, useState } from 'react';
import API from '../../../services/api';

export default function AssessClaim() {
  const [claims, setClaims] = useState([]);
  useEffect(() => { load(); }, []);
  const load = () => API.get('/claims').then(r => setClaims(r.data));

  const approveWithAmount = async (claim, amount) => {
    await API.patch(`/claims/${claim.id}`, { status: 'approved_by_surveyor', approvedAmount: amount });
    load();
  };

  return (
    <div>
      <h3>Surveyor - Claims</h3>
      <ul>
        {claims.map(c => (
          <li key={c.id}>
            {c.customerName} — status: {c.status} — approved amount: {c.approvedAmount || 0}
            {c.status === 'assigned' && (
              <>
                <button onClick={() => approveWithAmount(c, 1000)}>Approve $1000</button>
                <button onClick={() => approveWithAmount(c, 500)}>Approve $500</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}