
import axios from "axios";

import { createGallery, showLoader } from "./render-functions";

import { refs } from "./refs";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const API = '50766581-35cab7d84125eeb0dc75e938a';
const API_URL = 'https://pixabay.com/api/';


export function getImagesByQuery(query) {

    if (!query) {
        // сповіщення для користувачів
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',

        })
        return
    }

    // додавання лоадера
    showLoader();

    // отримання даних 
    axios(API_URL, {
        params: {
            key: API,
            q: query,
            image_type: 'photo',
            orientation: "horizontal"
        }
    })
        .then(({ data }) => {
            // рендер галереї
            refs.gallery.innerHTML = createGallery(data.hits);


            // якщо не знайшло жодного результату
            if (data.hits.length === 0) {
                // сповіщення для користувачів
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',

                })
            }
        })
        .catch(error => {
            console.log(error)

        })
}
