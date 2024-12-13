import axios from 'axios';

export async function validateAuthToken(authToken) {
    try {
        const response = await axios.post('https://localhost:7169/api/auth/validate-token', {}, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        });

        if(!response.data.valid) {
            return false;
        }

        return true;
    }
    catch {
        return false;
    }
}