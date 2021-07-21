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

/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 