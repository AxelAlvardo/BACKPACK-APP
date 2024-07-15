import axios from "axios";

const baseurl = import.meta.env.VITE_API_URL;

export const degreeService = async()=> {

    const degrees = await axios.get(`${baseurl}/degree`);
    const data = degrees.data.degrees;
    return data;
}