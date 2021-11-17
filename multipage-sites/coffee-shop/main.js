let burgerButton = document.querySelector('.burger-button'),
	contextMenu	 = document.querySelector('.header-nav');

burgerButton.addEventListener('click', () => {
	contextMenu.classList.toggle('open');
});