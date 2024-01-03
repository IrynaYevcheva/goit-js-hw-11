import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#form');
const formInput = document.querySelector('#formInput');
const gallery = document.querySelector('#gallery');
const loadingMessage = document.querySelector('.loader');

let lightbox = new SimpleLightbox('#gallery a', {
  showCounter: false,
});

iziToast.settings({
  close: true,
  closeOnClick: false,
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  messageColor: 'white',
  timeout: 4000,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
  backgroundColor: 'red',
});

form.addEventListener('submit', fetchImg);

function fetchImg(event) {
  loadingMessage.classList.remove('hidden');
  event.preventDefault();
  const searchParams = new URLSearchParams({
    key: '41535570-7b1028e1c6f1b041bb0744cc1',
    q: formInput.value,
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
      setTimeout(() => {
        loadingMessage.classList.add('hidden');
        if (images.hits.length === 0) {
          return iziToast.show();
        }
        renderImages(images.hits);
      }, 1000);
    })
    .catch(error => console.log(error))
    .finally(() => {
      form.reset();
    });
}

function renderImages(images) {
  gallery.innerHTML = images.reduce(
    (
      html,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) =>
      html +
      `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="image-info">
          <div>Likes:<span>${likes}</span></div>
          <div>Views:<span>${views}</span></div>
          <div>Comments:<span>${comments}</span></div>
          <div>Downloads:<span>${downloads}</span></div>
        </div>
      </li>
      `,
    ''
  );
  lightbox.refresh();
}
