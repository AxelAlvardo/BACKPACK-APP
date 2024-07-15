import axios from "axios";


const baseurl = import.meta.env.VITE_API_URL;


export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${baseurl}/user`)
        return response.data;

    } catch (error) {
        console.log(error);
    }
}


export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${baseurl}/user/${id}`);

        if (response.status === 200) {
            return true;
        } else {
            return undefined
        }

    } catch (error) {
        console.log(error);
    }
}

export const postMateria = async (materia) => {
    try {
        const response = await axios.post(`${baseurl}/materia`, materia, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;

    } catch (error) {
        console.error(error);
        throw new Error('Error al postear la materia');
    }
}

export const deleteMateria = async (id) => {
    try {
        const response = await axios.delete(`${baseurl}/materia/${id}`);

        if (response.status === 200) {
            return true;
        } else {
            return undefined
        }

    } catch (error) {
        console.log(error);
    }
}

export const getAllMateriasAdmin = async () => {
    try {

        const response = await axios.get(`${baseurl}/materia`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            return response.data
        }

    } catch (error) {
        console.log(error);
        return [];
    }
} 