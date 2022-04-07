// Variables
const container = document.querySelector('.container');

// Display followers after fetching from github
const display = (followers) => {
	const newFollowers = followers.map((follower) => {
		// Variables
		const { avatar_url, login, html_url } = follower;
		// Return
		return(
			`<article class="card">
				<img src="${ avatar_url }" alt="${ login }"/>
				<h4>${ login }</h4>
				<a href="${ html_url }" target="_blank" class="btn">View profile</a>
			</article>`
		);
	}).join('');
	container.innerHTML = newFollowers;
};

// Export
export default display;