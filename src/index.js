import './sass/main.scss';

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-open'),
    closeMenuBtn: document.querySelector('.mobile-close'),
    menu: document.querySelector('.mobile-menu'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();

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