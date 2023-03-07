import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery() {
    const pictureCard = galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
          <a class="gallery__item" href="${original}">
            <img style="display: block" class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </li>
  `;
    }).join('');
    return pictureCard;
}

const newGallery = createMarkupGallery(galleryItems);
console.log(newGallery);
galleryEl.innerHTML = newGallery;
console.log(galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',//отримую заголовок із атрибута alt
    captionDelay: 250,//роблю затримку в 250ms

});