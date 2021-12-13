import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = creatGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `<a class="gallery__item"
     href="${original}">
    <img class="gallery__image"
    src="${preview}"
    alt="${description}" />
    </a>`;
    })
    .join("");
}

const settingsForModal = {
  captionsData: "alt",
  captionDelay: 250,
};
const lightBox = new SimpleLightbox(".gallery a", settingsForModal);

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
}
