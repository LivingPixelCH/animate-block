import AOS from "aos";

window.aos = null;

document.addEventListener("DOMContentLoaded", () => {
	if (!window.aos) {
		window.aos = AOS.init();
	}
});
