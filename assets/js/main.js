let menuBtns = document.querySelectorAll('.header__menu-btn');
let menu = document.querySelector('.menu');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('menu-open')) {
      menu.style.transform = 'translateX(0)'  
    } else {
      menu.style.transform = 'translateX(100%)'  
    }
  })
})


/*=============== SLICK SLIDER ===============*/
// $(document).ready(function(){
//     $('.projects__list').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false,
//         infinite: true,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//               }
//             },
//             {
//               breakpoint: 768,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//               }
//             }
//         ]
//     });
// });

/*=============== SROLL REVEAL ANIMATIONS ===============*/ 
const revealTop = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    reset: true
})

revealTop.reveal('.hero__desc', {delay: 700, origin: 'right'});
revealTop.reveal('.hero__image-wrap', {delay: 200, origin: 'left'});
revealTop.reveal('.hero__shape', {delay: 800, origin: 'left'});
revealTop.reveal('.news', {delay: 200, origin: 'left'});
// revealTop.reveal('.projects__list', {delay: 200, origin: 'bottom'});
revealTop.reveal('.footer__top', {delay: 100, origin: 'top'});
revealTop.reveal('.contacts', {delay: 200, origin: 'bottom'});


/*=============== GALLERY SLIDER ===============*/ 
let galleryBody = document.querySelector('.gallery-body');
let buttons = document.querySelectorAll('.button__btn');
let galleryImage = document.querySelector('.gallery__list');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    buttons.forEach(button => {
      button.classList.remove('gallery-active');
    })
    
    url = `/assets/img/projects/project${e.target.order}.jpg`;
    galleryImage.style.transform = `translateY(-${e.target.id}%)`;
    galleryBody.style.backgroundImage = `url('/assets/img/projects/project${e.target.name}.jpg')`;
    btn.classList.add('gallery-active');
  })
});

// projects hovering
let projects = document.querySelectorAll('.project');
let staticProject = document.querySelector('.static-project');
let projectList = document.querySelector('.projects__list');

projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    staticProject.style.width = '200px';
    project.style.width = '400px';
  })

  project.addEventListener('mouseleave', () => {
    project.style.width = '200px'
  })
})

projectList.addEventListener('mouseleave', () => {
  staticProject.style.width = '400px';
  console.log('alik')
})