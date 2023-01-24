const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
galleryList.classList.add('gallery-list');

const createGalleryMarkup = ({ url, alt }) => {
 
  return `
  <li class="gallery-item">
    <img src="${url}" alt="${alt}" class="image-task-3"  width = 500 height = 380/>
  </li>
  `;
};

const galleryMarkup = images.map(createGalleryMarkup).join('');

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex;");
