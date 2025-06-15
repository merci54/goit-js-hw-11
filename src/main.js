import { refs } from "./js/refs";
import { getImagesByQuery } from './js/pixabay-api'
import { clearGallery } from "./js/render-functions";


refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    // очистка галереї
    clearGallery();

    // отримання даних та рендер
    getImagesByQuery(refs.input.value);

}

