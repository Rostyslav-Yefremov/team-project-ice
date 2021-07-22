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

(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open]'),
    closeModalBtn: document.querySelector('[modal-close]'),
    modal: document.querySelector('[modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
});

(() => {
    const locationBtnRef = document.querySelector("[data-location-button]");
    const locationListRef = document.querySelector("[data-location-list]");
    const franchiseBtnRef = document.querySelector("[data-franchise-button]");


    locationBtnRef.addEventListener("click", () => {

      locationListRef.classList.toggle("list-show");
      franchiseBtnRef.classList.toggle("bnt-opacity");


    });

})();