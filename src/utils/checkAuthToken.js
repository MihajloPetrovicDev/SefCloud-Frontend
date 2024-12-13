import axios from 'axios';

export async function checkAuthToken(authToken) {
    try {
        const response = await axios.post('https://localhost:7169/api/auth/check-token', {}, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        if(response.data.shouldDeleteToken == true) {
            localStorage.removeItem('auth-token');
        }
    }
    catch(error) {
        console.log(error);
    }
}