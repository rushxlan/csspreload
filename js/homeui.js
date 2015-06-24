'use strict';
window.addEventListener('load', function() {
	let full_access = sessionStorage.getItem('full_access');
	let preload = document.querySelector('.preload');
	let main = document.querySelector('.main');
	// full_access is gived when user enter for first time
	if(full_access == "false") {
		// show preload animation
		preload.classList.add('visible');
		// animation delay 3s. After that, the main content appear
		window.setTimeout(function() {
			preload.classList.remove('visible');
			main.classList.add('visible');
		},3000);
		// change the flag. Now, the user has full access
		sessionStorage.setItem('full_access', true);
	}
	// if user has full_access, just show the page
	else {
		main.classList.add('visible');
	}
});
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#logout').addEventListener('click', function(e) {
		e.preventDefault();
		// remove user's session
		sessionStorage.removeItem('full_access');
		// redirect to login
		window.location.href = '/csspreload';
	});
});