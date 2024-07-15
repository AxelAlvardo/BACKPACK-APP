import axios from "axios";

const baseurl = import.meta.env.VITE_API_URL;

export const registerRequest = async (user) => {

    try {
        const response = await axios.post(`${baseurl}/auth/register`, user, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;

    } catch (error) {
        throw new Error('Error al Registrar revisa los campos');
    }
}
