function updateCopyrightYear() {
	const currentYear = new Date().getFullYear(); //2024
	const copyrightElement = document.querySelector('.footer__copy');
	copyrightElement.textContent = `© ${currentYear}, Todos los derechos reservados`;
}

export default updateCopyrightYear;
