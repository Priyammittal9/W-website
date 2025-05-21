$('#logo-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    lazyLoad: true,
    autoplay: {
      delay: 2500,
    },
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        992:{
            items:4
        }
    }
})


$('#cases_carousel').owlCarousel({
  loop:true,
  nav:true,
  margin:30,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  autoHeight:true,
  navText: [$('.swiperButtonPrevCase'),$('.swiperButtonNextCase')],
  responsive:{
      0:{
        items:1
      },
      450:{
          items:2
      },
      
      1200:{
          items:3
      }
  }
  });

const swiperButtonNext = document.querySelector('#testimonials .swiperButtonNext')
const swiperButtonPrev = document.querySelector('#testimonials .swiperButtonPrev')


var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: swiperButtonNext,
        prevEl: swiperButtonPrev
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });






  const slider = document.querySelector('#slider')

  function addactive(){
    slider.classList.toggle("active")

  }

    
