document.addEventListener('DOMContentLoaded', () => {
    const dropdownOverlay = document.querySelector('.dropdown-overlay');
    const modalOverlay = document.querySelector('.modal-overlay');
    const btnHamburger = document.querySelector('.hamburger');
    const btnCloseDropdown = document.querySelector('.dropdown-btn-close');
    const btnOrdre = document.querySelector('.promo-button');
    const btnCloseModal = document.querySelector('.modal-btn-close');

    const navList = document.querySelectorAll('.dropdown-nav-list');
    const header = document.querySelector('.header');



    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('show');
        } else {
            header.classList.remove('show');
        }

        lastScrollTop = scrollTop;
    })


    const openDropdown = () => {
        dropdownOverlay.classList.add('is-open');
    };

    const openModal = () => {
        modalOverlay.classList.add('is-open');
    };

    const closeDropdown = () => {
        dropdownOverlay.classList.remove('is-open');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('is-open');
    };

    btnHamburger.addEventListener('click', openDropdown);

    btnCloseDropdown.addEventListener('click', closeDropdown);

    btnOrdre.addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });



    navList.forEach(link => {
        link.addEventListener('click', closeDropdown);
    });

});
