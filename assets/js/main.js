// DARKMODE
const icon = document.querySelector('#light_mode');
const main = document.querySelector('main');

icon.addEventListener('click', changeMode);

function changeMode() {
	main.classList.toggle('light');

	if (main.classList.contains('light')) {
		icon.innerHTML = '<i class="bx bx-sun"></i>';
	} else {
		icon.innerHTML = '<i class="bx bx-moon"></i>';
	}
}

//SEND EMAIL

const btn = document.getElementById('submit');

document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();

	btn.value = 'Sending...';

	const serviceID = 'service_qzl2mlf';
	const templateID = 'template_85r309n';

	emailjs.sendForm(serviceID, templateID, this).then(
		() => {
			btn.value = 'Send Email';
			alert('Formulado Enviado');
		},
		(err) => {
			btn.value = 'Send Email';
			alert(JSON.stringify(err));
		},
	);
});

//CHANGE LENGUAGE
const homeText = document.querySelector('.hiEduardo');
const changeLenguage = document.getElementById('btn__lenguage');
const bodyHeader = document.querySelector('.about__text--header');
const bodyText = document.querySelector('.about__text--paragraph');
const navAboutMe = document.querySelector('.nav__item--aboutMe');
const navSkills = document.querySelector('.nav__item--skills');
const navWork = document.querySelector('.nav__item--work');
const navContact = document.querySelector('.nav__item--contact');
const butttonCv = document.querySelector('.download__cv--button');
const skillsHeader = document.querySelector('.skills__header--text');
const htmlSkills = document.querySelector('.htmlskills');
const cssSkills = document.querySelector('.cssSkills');
const jsSkills = document.querySelector('.jsSkills');
const reactSkills = document.querySelector('.reactSkills');
const headerWork = document.querySelector('.work__header--text');
const btnDemo = document.querySelector('.projects__button--demo');
const btnDemo1 = document.querySelector('.projects__button--demo1');
const btnDemo2 = document.querySelector('.projects__button--demo2');
const btnCode = document.querySelector('.projects__button--code');
const btnCode1 = document.querySelector('.projects__button--code1');
const btnCode2 = document.querySelector('.projects__button--code2');
const tittleForm = document.querySelector('.contact__form-title');
const nameForm = document.querySelector('.contact__form-label');
const emailForm = document.querySelector('.emailForm');
const subjectForm = document.querySelector('.subjectform');
const messageForm = document.querySelector('.messageForm');
const btnSenForm = document.querySelector('.contact__form-button');

changeLenguage.addEventListener('click', changeEnglish);

function changeEnglish() {
	changeLenguage.classList.toggle('english');

	if (changeLenguage.classList.contains('english')) {
		changeLenguage.innerHTML =
			'<img src="/talleres/mi portafolio/assets/img/reino-unido.png" alt="idioma ingles">';
		homeText.innerText = "Hi, I'm Eduardo";
		bodyHeader.innerText = 'About Me';
		bodyText.innerText =
			'I fell in love with the idea of transforming ideas into digital realities. I strive to stay updated with the latest trends and best practices in web development, ensuring that my projects are innovative and built to the highest quality standards. I firmly believe in the importance of collaboration and communication. I work closely with my clients and team members to understand their needs and make sure that each project reflects their vision. I am a lover of cinema and music, which helps me stay creative and motivated.';
		navAboutMe.innerHTML =
			'<a href="#about" class="nav__item--aboutMe">About Me</a>';
		navSkills.innerHTML =
			' <a href="#skills" class="nav__item--skills">Skills</a>';
		navWork.innerHTML = ' <a href="#skills" class="nav__item--skills">Work</a>';
		navContact.innerHTML =
			' <a href="#skills" class="nav__item--skills">Contact</a>';
		butttonCv.innerHTML =
			'<button class="download__cv--button">Download CV</button>';
		skillsHeader.innerText = 'Skills';
		htmlSkills.innerHTML =
			'HTML Structure<br>HTML5<br>HTML Attributes<br>Forms<br>Links and Images<br>Tables and Lists<br>Multimedia<br>Accessibility<br>SEO<br>Microdata and Schemas<br>HTML Validation';
		cssSkills.innerHTML =
			'Selectors<br>Specificity<br>Properties and Values<br>Box Model<br>Flexbox<br>Grid<br>Positioning<br>Typography<br>Colors and Backgrounds<br>Transitions and Animations<br>Media Queries<br>Responsiveness<br>Pseudo-classes and Pseudo-elements';
		jsSkills.innerHTML =
			'Syntax<br>Variables<br>Data Types<br>Operators<br>Conditionals<br>Loops<br>Functions<br>Objects<br>Arrays<br>DOM Manipulation<br>Events';
		reactSkills.innerHTML = 'Coming Soon...';
		headerWork.innerText = 'My Work';
		btnDemo.innerHTML = 'VIEW DEMO';
		btnDemo1.innerHTML = 'VIEW DEMO';
		btnDemo2.innerHTML = 'VIEW DEMO';
		btnCode.innerHTML = 'VIEW CODE';
		btnCode1.innerHTML = 'VIEW CODE';
		btnCode2.innerHTML = 'VIEW CODE';
		tittleForm.innerText = 'Send Message';
		nameForm.innerText = 'Name';
		emailForm.innerText = 'Email';
		subjectForm.innerText = 'Subject';
		messageForm.innerText = 'Message';
		btnSenForm.innerText = 'Send';
	} else {
		window.location.reload();
	}
}
