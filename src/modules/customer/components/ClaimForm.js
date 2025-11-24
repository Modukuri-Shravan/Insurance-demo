import React, { useState } from 'react';

const ClaimForm = () => {
    const [claimData, setClaimData] = useState({
        name: '',
        email: '',
        claimType: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClaimData({
            ...claimData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to submit claimData to the API
        console.log('Claim submitted:', claimData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit a Claim</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={claimData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={claimData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Claim Type:</label>
                <select
                    name="claimType"
                    value={claimData.claimType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select...</option>
                    <option value="health">Health</option>
                    <option value="auto">Auto</option>
                    <option value="home">Home</option>
                </select>
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={claimData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit Claim</button>
        </form>
    );
};

export default ClaimForm;