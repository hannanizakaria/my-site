/*=============== Active link =============== */
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink))






/* Active Link */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork))





/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.projects__item'
    },
    animation: {
        duration: 300
    }
});


/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper('.testimonial__container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },  
    mousewheel: false,
    keyboard: true,
  });
  

  