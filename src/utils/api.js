import axios from "axios";

const  BASE_URL = 'https://moviesdatabase.p.rapidapi.com'

const RAPID_API_KEY = import.meta.env.VITE_APP_RAPID_API_KEY;

const headers = {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
}

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