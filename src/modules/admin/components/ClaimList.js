import React, { useEffect, useState } from 'react';
import { fetchClaims } from '../../services/adminApi';

const ClaimList = () => {
    const [claims, setClaims] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getClaims = async () => {
            try {
                const data = await fetchClaims();
                setClaims(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getClaims();
    }, []);

    if (loading) {
        return <div>Loading claims...</div>;
    }

    if (error) {
        return <div>Error fetching claims: {error}</div>;
    }

    return (
        <div>
            <h2>Claims List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th>Date Filed</th>
                    </tr>
                </thead>
                <tbody>
                    {claims.map(claim => (
                        <tr key={claim.id}>
                            <td>{claim.id}</td>
                            <td>{claim.customerName}</td>
                            <td>{claim.status}</td>
                            <td>{new Date(claim.dateFiled).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClaimList;