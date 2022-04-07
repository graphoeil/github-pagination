// Display navigation buttons
const displayButtons = (container, pages, activeIndex) => {
	/* We don't need page in this map, we create one button 
	for each pages, so we pass _ ,-) */
	let btns = pages.map((_, index) => {
		return `<button class="page-btn ${ activeIndex === index && 'active-btn' } " data-index="${ index }">${ index + 1 }</button>`;
	});
	// Next and prev
	btns.push('<button class="next-btn">Next</buton>');
	btns.unshift('<button class="prev-btn">Prev</buton>');
	// Modify container innerHTML
	container.innerHTML = btns.join('');
};

// Export
export default displayButtons;