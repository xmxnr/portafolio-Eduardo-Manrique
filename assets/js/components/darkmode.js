const icon = document.querySelector('#light_mode');
const main = document.querySelector('main')

icon.addEventListener("click", changeMode);


function changeMode() {
    main.classList.toggle('light')
}

export default changeMode