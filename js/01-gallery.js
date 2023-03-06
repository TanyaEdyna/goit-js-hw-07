import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery'); //основна змінна для галереї
//cтворюю розмітку галереї
function createMarkupGallery () {
    const pictureCard = galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
    }).join('')
    return pictureCard;   
}
const newGallery = createMarkupGallery(galleryItems);//в змінну записую  результат виклилку функції яка створювала галерею

//створену галерею додати до html
galleryEl.innerHTML = newGallery

// ----- МОДАЛЬНЕ ВІКНО --------

galleryEl.addEventListener('click', clickOnImage)//ставлю прослуховувача події на клік галереї. clickOnImage -  це колбек функція яка буде виконуватись по кліку



function clickOnImage(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;//перевірка чи подія click відбувається саме на image, якщо це не так, то return
    }
    console.log(event.target.nodeName);
    //якщо клік був на картинці - працює бібліотека basicLightbox - створює модалку при натиску на картинку
    createModalWindow(event);
    return;
}
let instance = null; //тут глобальний доступ до змінної

function createModalWindow(event) {
    instance = basicLightbox.create(`<img src='${event.target.dataset.source}' width='800' height='600'>`);
    instance.show();
}

//модальне вікно закривається при натисканні на клавішу Escape
document.addEventListener('keydown', handleEscape);

function handleEscape(event) {
    if (event.code === 'Escape' && instance !== null) {
        instance.close();
        document.removeEventListener('keydown', handleEscape);
    }
}

createMarkupGallery();

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox
    
