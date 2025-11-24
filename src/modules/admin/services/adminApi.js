import axios from 'axios';

const API_URL = '/api/admin';

export const fetchClaims = async () => {
    try {
        const response = await axios.get(`${API_URL}/claims`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching claims: ' + error.message);
    }
};

export const approveClaim = async (claimId) => {
    try {
        const response = await axios.post(`${API_URL}/claims/${claimId}/approve`);
        return response.data;
    } catch (error) {
        throw new Error('Error approving claim: ' + error.message);
    }
};

export const rejectClaim = async (claimId) => {
    try {
        const response = await axios.post(`${API_URL}/claims/${claimId}/reject`);
        return response.data;
    } catch (error) {
        throw new Error('Error rejecting claim: ' + error.message);
    }
};