import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}


export const imgUrl = "https://image.tmdb.org/t/p/original"
export const profileUrl="https://image.tmdb.org/t/p/w185"

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params,
        }
         )
         return data;
    } catch (err) {
      
        return err;
    }
}

