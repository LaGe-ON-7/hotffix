document.addEventListener('click', e => {
    const isDropdownBtn = e.target.matches("[data-dropdown-button]")
    if (!isDropdownBtn && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownBtn) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
});

$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa fa-angle-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa fa-angle-right"></i></i></button>`,
    });
});

$(document).ready(function() {
    $('.slider-2').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow-2'><i class="fa fa-angle-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow-2'><i class="fa fa-angle-right"></i></i></button>`,
    });
});