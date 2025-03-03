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

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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