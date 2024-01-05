import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#form');
const gallery = document.querySelector('#gallery');
const loadingMessage = document.querySelector('.loader');

form.addEventListener('submit', fetchImg);

let lightbox = new SimpleLightbox('#gallery a', {
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 200,
});

function onError() {
  gallery.innerHTML = '';
  iziToast.show({
    close: false,
    closeOnClick: true,
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'white',
    timeout: 2000,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight',
    backgroundColor: '#EF4040',
    progressBar: false,
  });
}

function fetchImg(event) {
  event.preventDefault();
  loadingMessage.classList.remove('hidden');
  gallery.innerHTML = '';
  const search = event.currentTarget.elements.inputToSearch.value.trim();
  getImg(search);
  event.currentTarget.reset();
}

function getImg(search) {
  const searchParams = new URLSearchParams({
    key: '41535570-7b1028e1c6f1b041bb0744cc1',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        onError();
      }
      renderImages(images);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: 'ERROR',
        messageColor: 'white',
        timeout: 2000,
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        position: 'topRight',
        progressBar: false,
      });
    })
    .finally(() => {
      loadingMessage.classList.add('hidden');
    });
}

function renderImages(images) {
  return (gallery.innerHTML = images.hits
    .map(
      img =>
        `<li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="image-info">
          <div>Likes:<span>${img.likes}</span></div>
          <div>Views:<span>${img.views}</span></div>
          <div>Comments:<span>${img.comments}</span></div>
          <div>Downloads:<span>${img.downloads}</span></div>
        </div>
      </li>`
    )
    .join(''));
}
