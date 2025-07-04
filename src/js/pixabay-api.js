
import axios from "axios";
import { showLoader } from "./render-functions";

const API = '50766581-35cab7d84125eeb0dc75e938a';
const API_URL = 'https://pixabay.com/api/';


export function getImagesByQuery(query) {
    //показ лоадеру при початку отримання інформації
    showLoader();

    // отримання даних
    return axios(API_URL, {
        params: {
            key: API,
            q: query,
            image_type: 'photo',
            orientation: "horizontal",
            safesearch: 'true',
        }
    })

}
