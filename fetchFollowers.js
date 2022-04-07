// Variables
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

// Get followers from github
const fetchFollowers = async() => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

// Export
export default fetchFollowers;