const loaderContainer = document.querySelector('.loader');

function loader() {
	window.addEventListener('load', function () {
		loaderContainer.classList.add('loader--hidden');
	});
}

export default loader;
