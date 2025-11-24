import axios from 'axios';

const API_URL = 'https://api.example.com/customer'; // Replace with your actual API URL

export const getCustomerClaims = async (customerId) => {
    try {
        const response = await axios.get(`${API_URL}/claims/${customerId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching customer claims: ' + error.message);
    }
};

export const submitClaim = async (claimData) => {
    try {
        const response = await axios.post(`${API_URL}/claims`, claimData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting claim: ' + error.message);
    }
};

export const updateClaimStatus = async (claimId, status) => {
    try {
        const response = await axios.patch(`${API_URL}/claims/${claimId}`, { status });
        return response.data;
    } catch (error) {
        throw new Error('Error updating claim status: ' + error.message);
    }
};