'use strict';
document.addEventListener('DOMContentLoaded', function() {
	let loginFrm = document.querySelector('#loginFrm');
	loginFrm.addEventListener('submit', function(e) {
		e.preventDefault();

		const ANIMATION_TIMEOUT = 3000; // duration of logo animation
		let logo = document.querySelector('.logo');
		let user = document.querySelector('#user').value.toLowerCase();
		let pass = document.querySelector('#pass').value;

		// if logo already is animated, the info is already processing
		if(logo.classList.contains('auth')) {
			return false;
		}

		logo.classList.add('auth'); // start animation

		// check credentials
		if(user == 'john.doe@gmail.com' && pass == 'abc123') {
			// when animations ends, redirect
			window.setTimeout(function() {
				sessionStorage.setItem('full_access', false);
				window.location.href = 'views/home.html';
			}, ANIMATION_TIMEOUT);
		}
		else {
			window.setTimeout(function() {
				logo.classList.remove('auth'); // remove animation of logo
				showTooltip();	
			}, ANIMATION_TIMEOUT);
		}
	});

	// show and hide tooltip
	function showTooltip() {
		let tooltip = loginFrm.querySelector('.tooltip');
		tooltip.textContent = 'El email o contraseña ingresados no son correctos. Verifique e inténtelo nuevamente.';
		tooltip.classList.add('visible');
		// after 4 seconds, the tooltip disappear
		window.setTimeout(function() {
			tooltip.classList.remove('visible');
		}, 4000);
	}
}); // end script