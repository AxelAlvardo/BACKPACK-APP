import axios from "axios";

const baseurl = import.meta.env.VITE_API_URL;

export const favoriteService = async(id, token)=> {
    try {
        const response = await axios.patch(`${baseurl}/post/save/${id}`,{}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        console.log(response);
        return response

    } catch (error) {
        console.error('Error al agregar a favorito:', error.response || error.message || error);
        throw new Error('Error al agregar a favorito');
    }
}


export const getFavorites = async(token)=> {
    try {
        const response = await axios.get(`${baseurl}/post/saved`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        if (response.status === 200) {
            console.log(response.data);
            return response.data.posts
        }

    } catch (error) {
        console.log(error);
        return [];
    }
}


export const whoami = async(token)=> {
    const result = await axios.get(`${baseurl}/auth/whoami`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });
    return result.data.savedPosts
}