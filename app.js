// Imports
import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

// Variables
const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');
let index = 0;
let pages = [];
 
// Fetch followers on init
const init = async() => {
	/* Don't forget that fetchFollowers return a promise */
	const followers = await fetchFollowers();
	title.textContent = 'Pagination';
	// Create pages
	pages = paginate(followers);
	// Displaying followers and buttons
	setupUI();
};

// Display followers
const setupUI = () => {
	// Display followers
	/* paginate() returns an array of arrays, we must 
	indicate which array to display */
	displayFollowers(pages[index]);
	// Display buttons
	displayButtons(btnContainer, pages, index);
};

// Next and prev btn, all btns are added after DOM init,
// so me must target parent element that is present 
// in DOM init (event bubbling)Event.bubbles
btnContainer.addEventListener('click', (e) => {
	// setupUI is invoked only if we click on page-btn or prev and next btn
	if (e.target.classList.contains('btn-container')){ return; }
	// Pages btn
	if (e.target.classList.contains('page-btn')){
		index = Number(e.target.dataset.index);
	}
	// Next-btn
	if (e.target.classList.contains('next-btn')){
		index++;
		if (index > pages.length - 1){ index = 0; }
	}
	// Prev-btn
	if (e.target.classList.contains('prev-btn')){
		index--;
		if (index < 0){ index = pages.length - 1; }
	}
	// Setup UI
	setupUI();
});

// Init
window.addEventListener('DOMContentLoaded', init);