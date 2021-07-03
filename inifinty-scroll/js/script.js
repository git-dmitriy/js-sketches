import { accessKey } from '../apiKey.js';

document.addEventListener('DOMContentLoaded', () => {
  let photoList = [];
  const imageContainer = document.querySelector('#image-container');
  const loader = document.querySelector('#loader');

  let ready = false;
  let imagesLoaded = 0;
  let totalImages = 0;
  let amount = 5;

  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${amount}`;

  function setAttribute(element, attrObj) {
    for (const key in attrObj) {
      element.setAttribute(key, attrObj[key]);
    }
  }

  const fetchPhotos = async () => {
    try {
      const response = await fetch(apiUrl);
      photoList = await response.json();

      displayPhotos();
    } catch (err) {
      console.log("Can't fetch...", err);
      console.log('Maybe your api rate limit exceeded');
    }
  };

  const displayPhotos = () => {
    totalImages = photoList.length;
    imagesLoaded = 0;
    try {
      photoList.forEach((photo) => {
        const item = document.createElement('a');

        setAttribute(item, { href: photo.links.html, target: '_blank' });
        item.setAttribute('target', '_blank');
        const img = document.createElement('img');
        setAttribute(img, {
          src: photo.urls.regular,
          alt: photo.alt_description,
          title: photo.alt_description,
        });
        img.addEventListener('load', imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
      });
    } catch (err) {
      console.log('No photos uploaded', err);
    }
  };

  const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      ready = true;
      loader.hidden = true;
    }
    amount = 10;
  };

  const onHaveReachedBottom = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      ready
    ) {
      fetchPhotos();
    }
  };

  fetchPhotos();
  displayPhotos();
  window.addEventListener('scroll', onHaveReachedBottom);
});
