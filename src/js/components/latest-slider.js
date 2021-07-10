$(document).ready(function() {
  $('.latest-slider__photo').slick({
    infinite: false,
    fade: true,
    speed: 1200,
    cssEase: 'ease-out',
    nextArrow: `<button class="latest-slider__photo-arrow latest-slider__photo-arrow--next">
                  <svg class="latest-slider__photo-icon">
                    <use xlink:href="img/sprite.svg#arrow">
                  </svg>
               </button>`,
    prevArrow: `<button class="latest-slider__photo-arrow latest-slider__photo-arrow--prev">
                  <svg class="latest-slider__photo-icon">
                    <use xlink:href="img/sprite.svg#arrow">
                  </svg>
                </button>`,
    asNavFor: '.latest-slider__nav'
  
  });
  
  $('.latest-slider__nav').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 1200,
    cssEase: 'ease-out',
    asNavFor: '.latest-slider__photo',
    focusOnSelect: true,
    autoplay: false,
  });

    let photo = $('.latest-slider__photo-item');
    let photoMini = $('.latest-slider__nav-item');

    let current = () => {
        return photo.index($('.latest-slider__photo-item.slick-active'));
    };

    // show index of current element
    let startCounter = (val) => {
        $('#latestCounter').text(`${val} —  /${photo.length}`);
    };

    let photoMiniActive = () => {
        photo.each((i, el) => {
            photoMini[i].classList.remove('active');
            if( $(el).hasClass('slick-active') ) {
                photoMini[i].classList.add('active');
            }
        });
    };

    // append counter
    $('.latest-slider__photo').append(`<div id="latestCounter" class="latest-slider__counter"></div>`);

    // call function startCounter
    startCounter(1);

    photoMiniActive();

    $('.latest-slider__photo').on('afterChange', () => {
      console.log(current());
      startCounter(current() + 1);
      photoMiniActive();
  });

  if($( window ).width() <= 576 ){
    let width = $( window ).width();
    $('.latest-slider__photo').css('width', `${width}`);
}


 $( window ).on('resize', () => {
     if($( window ).width() <= 576 ){
         let width = $( window ).width();
         $('.latest-slider__photo').css('width', `${width}`);
     }
 });
});
