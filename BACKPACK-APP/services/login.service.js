import axios from "axios";

const baseurl = import.meta.env.VITE_API_URL;

export const loginRequest = async (user) => {
    try {
        const response = await axios.post(`${baseurl}/auth/login`, user, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });


        if (response.status === 200) {
            const tokenAdd = response.data.token;
            return tokenAdd  
        } 
    } catch (error) {
        console.log(error);
    }
} 