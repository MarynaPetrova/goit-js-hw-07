import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});