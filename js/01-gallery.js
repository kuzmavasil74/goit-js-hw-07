import { galleryItems } from "./gallery-items.js";
// Change code below this line

// reference to the element that holds the gallery

const gallery = document.querySelector(".gallery");

// adding all images from gallery-items.js to element with class .gallery in HTML

gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(
      (galleryItem) =>
        `<div class="gallery__item">
        <a clss="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        data-source="${galleryItem.original}"
        alt= "${galleryItem.description}"></a></div>`
    )
    .join("")
);

// basicLightbox (https://basiclightbox.electerious.com) event after clicking an image from gallery

gallery.addEventListener("click", selectedImage);

function selectedImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgLink = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${imgLink}">`);
  instance.show();

  // close modal with ESC
    
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
    gallery.removeEventListener("click", selectedImage);
  });
}