import axios from 'axios';

const API_URL = '/api/surveyor';

export const getSurveyReports = async () => {
    try {
        const response = await axios.get(`${API_URL}/reports`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching survey reports');
    }
};

export const submitSurveyReport = async (reportData) => {
    try {
        const response = await axios.post(`${API_URL}/reports`, reportData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting survey report');
    }
};

export const updateSurveyReport = async (reportId, reportData) => {
    try {
        const response = await axios.put(`${API_URL}/reports/${reportId}`, reportData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating survey report');
    }
};