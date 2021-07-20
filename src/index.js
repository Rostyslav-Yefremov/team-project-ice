import './sass/main.scss';

(() => {
    const aboutBtnRef = document.querySelector("[data-about-button]");
    const overlayRef = document.querySelector("[data-overlay]");

    aboutBtnRef.addEventListener("click", () => {

      overlayRef.classList.toggle("is-open");

    });

    overlayRef.addEventListener("click", () => {

        overlayRef.classList.remove("is-open");

    });
})();