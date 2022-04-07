// Create pages
const paginate = (followers) => {
	const itemsPerPage = 8;
	/* Math.ceil pour être sûr d'afficher les derniers sur la dernière page */
	const numberOfPages = Math.ceil(followers.length / itemsPerPage);
	// Array of 12 arrays (numberOfPages = 12)
	const newFollowers = Array.from({ length:numberOfPages }, (_, index) => {
		// Callback function applied for any item (12)
		const start = index * itemsPerPage;
		/* We return an array for each pages (12) */
		return followers.slice(start, start + itemsPerPage);
	});
	return newFollowers;
};

// Export
export default paginate;