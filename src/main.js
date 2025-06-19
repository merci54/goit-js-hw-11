import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./js/refs";
import { getImagesByQuery } from './js/pixabay-api'
import { clearGallery } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { createGallery } from "./js/render-functions";



refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

    // очистка галереї
    clearGallery();

  // перевірка значення інпуту
  if (!refs.input.value.trim()) {
    iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',

            })
    return
  }


  getImagesByQuery(refs.input.value.trim())
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
    }})
    .catch(error => {

    // приховання лоадеру якщо виникла помилка
    hideLoader();
    iziToast.error({
      message: `${error.message}`,
      position: 'topRight',
  })

  })


}

