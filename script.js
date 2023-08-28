const toggleCheckbox = document.querySelector(".theme-toggler");
const themeToggle = document.querySelector("h1.theme-toggle");
const navlinkToggle = document.querySelector(".navlinks-toggle");
navlinkToggle.addEventListener("click", handleNavToggleClick);
const navlinks = document.querySelectorAll(".navlinks li");
let theme = localStorage.getItem("bharati-portfolio-theme");

if (theme === null || theme === null) {
	localStorage.setItem("bharati-portfolio-theme", "light-theme");
	theme = localStorage.getItem("bharati-portfolio-theme");
} else if (theme === "light-theme") {
	toggleCheckbox.checked = false;
	themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
	toggleCheckbox.checked = true;
	themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

document.body.className = `${theme}`;

toggleCheckbox.addEventListener("click", (e) => {
	if (e.target.checked) {
		localStorage.setItem("bharati-portfolio-theme", "dark-theme");
		themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
	} else {
		localStorage.setItem("bharati-portfolio-theme", "light-theme");
		themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
	}

	theme = localStorage.getItem("bharati-portfolio-theme");
	document.body.className = `${theme}`;
});

navlinks.forEach((navlink) => {
	navlink.addEventListener("click", closeNavBar);
});

function closeNavBar() {
	document.body.classList.remove("nav-open");
}

function handleNavToggleClick(e) {
	document.body.classList.toggle("nav-open");
}
