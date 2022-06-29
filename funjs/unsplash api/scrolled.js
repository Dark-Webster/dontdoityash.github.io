const imageContainer = document.getElementById('image-container');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if all image are loaded
function imageLoaded() {
	imagesLoaded++;
	if (imagesLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
	}
}

// helper function to set attributes on DOM Element
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// Create Element for links & photos, add to DOM
function displayPhotos() {
	imagesLoaded = 0;
	totalImages = photosArray.length;
	// Run function for each object in photosArray
	photosArray.forEach((photo) => {
		//Create <a> to link to full photo
		const item = document.createElement('a');
		setAttributes(item, {
			href: photo.links.html,
			target: '_blank',
		});
		// Create <img> for photo
		const img = document.createElement('img');
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});
		//Event Listener, check when each is finished loading
		img.addEventListener('load', imageLoaded);
		// Put <img> inside <a> then put both inside imageContainer element
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

// Get Photos from Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		displayPhotos();
	} catch (error) {
		// Catch error here
	}
}

// Check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhotos();
	}
});

// On Load
getPhotos();

// dark mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lighTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
	circle.classList.toggle('move');
	Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-1'));
	Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
	Array.from(lighTexts).map(lighText => lighText.classList.toggle('light'));
	Array.from(borders).map(border => border.classList.toggle('border-color'));
});