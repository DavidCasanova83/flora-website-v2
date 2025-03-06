// //mobile navb
// const mobileNav = document.querySelector('.mnav');
// const closeBtn = document.querySelector('.mnav__close-btn');
// const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

// const navOpenedClass = "left-0";
// const navClosedClass = "-left-[300px]";
// const arrowLeftClass = "ri-arrow-left-s-line";
// const arrowRightClass = "ri-arrow-right-s-line";

// // Ajouter initialement la classe "navClosedClass"
// mobileNav.classList.add(navClosedClass);

// closeBtn.addEventListener('click', () => {
//   if (mobileNav.classList.contains(navClosedClass)) {
//     // Ouvrir le menu
//     mobileNav.classList.remove(navClosedClass);
//     mobileNav.classList.add(navOpenedClass);
//     closeBtnIcn.classList.remove(arrowRightClass);
//     closeBtnIcn.classList.add(arrowLeftClass);
//   } else {
//     // Fermer le menu
//     mobileNav.classList.remove(navOpenedClass);
//     mobileNav.classList.add(navClosedClass);
//     closeBtnIcn.classList.remove(arrowLeftClass);
//     closeBtnIcn.classList.add(arrowRightClass);
//   }
// });

//swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000, // Vitesse de transition en millisecondes (1 seconde ici)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'slide', // Effet de transition (optionnel, pour un effet plus fluide)
});


//faq
const faqItems = document.querySelectorAll('.faq__itm');

faqItems.forEach((item) => {
   const faqBtn = item.querySelector('.faq__btn');

   item.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      const iconClass = isOpen ? 'ri-substract-fill' : 'ri-add-fill';
      const iconElement = faqBtn.querySelector('i');
      iconElement.classList = `${iconClass} text-2xl`;
   });
});


//scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration : 3000,
  delay: 400,
  //reset: true // resets animation
});

//hero
sr.reveal('.hero__text', { origin: 'top',delay: 50,  duration : 3000});
sr.reveal('.hero__img');


// //slider photo home
// sr.reveal('.slider__photo');


//stats
sr.reveal('.stats__item', { delay: 600, distance: '100px', interval: 100, origin: 'top'});

// services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
  delay: 600,
  distance :'100px',
  interval:100,
  origin:'top'
});

// appointment
sr.reveal('.appointment__title', { origin: 'top',delay: 50,  duration : 3000});
sr.reveal('.appointment__form');

// testimonials
sr.reveal('.testimonials');
sr.reveal('.testimonials_container');

// team
sr.reveal('.team__title');
sr.reveal('.team__slider');

// faq
sr.reveal('.faq__title');
sr.reveal('.faq__item',{
  delay: 600,
  distance :'100px',
  interval:100,
  origin:'top'
});

// departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');


// blog
sr.reveal('.blog__title');
sr.reveal('.blog__post',{
  delay: 600,
  distance :'100px',
  interval:100,
  origin:'top'
});

// brands
sr.reveal('.brands__logo',{
  delay: 600,
  distance :'100px',
  interval:100,
  origin:'top'
});


// newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// // footer

// sr.reveal('.footer__item',{
//   delay: 600,
//   distance :'100px',
//   interval:100,
//   origin:'top'
// });
