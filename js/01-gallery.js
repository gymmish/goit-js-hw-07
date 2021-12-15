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
      return `<div class="gallery__item">
        <a class="gallery__link"  href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  const modalImg = e.target.dataset.source;
  const modal = basicLightbox.create(
    `<div class="modal">
   <img
      class="gallery__image"
      src = "${modalImg}"
    />
    </div>`
  );
  modal.show();
}
