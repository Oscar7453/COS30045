(function () {
	'use strict';

	// Set dynamic year in footer
	var yearSpans = document.querySelectorAll('[data-year]');
	yearSpans.forEach(function (el) {
		el.textContent = new Date().getFullYear();
	});

	// Client-side navigation using JS to provide a consistent mechanism
	var navLinks = document.querySelectorAll('[data-nav]');
	navLinks.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			var target = link.getAttribute('href');
			if (!target) return;
			window.location.href = target;
		});
	});

	// Highlight active page in nav
	var path = window.location.pathname.replace(/\\/g, '/');
	var current = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
	navLinks.forEach(function (link) {
		var href = link.getAttribute('href');
		if (href === current) {
			link.classList.add('active');
		}
	});

	// Clicking logo returns to home
	var logo = document.querySelector('[data-logo]');
	if (logo) {
		logo.addEventListener('click', function (e) {
			e.preventDefault();
			window.location.href = 'index.html';
		});
	}
})();
