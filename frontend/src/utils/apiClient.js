import axios from 'axios';

export const apiClient = function() {
        const params = {
            baseURL: 'http://localhost:8000',
        };
        return axios.create(params);
}