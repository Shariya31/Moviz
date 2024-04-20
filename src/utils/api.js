import axios from "axios";

const  BASE_URL = 'https://api.themoviedb.org/3'

const RAPID_API_KEY = import.meta.env.VITE_APP_RAPID_API_KEY;

const headers = {
    Authorization: "Bearer " + RAPID_API_KEY,
};

export const fetchDataFromApi = async (url, params)=>{
    
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log('Error form fetchDataFromApi', error)
    }
}