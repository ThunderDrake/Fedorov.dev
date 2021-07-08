if($(window).width() < 1024 ){
  var nextBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <g clip-path="url(#clip0)">
                  <path d="M18.8993 12.0016L7.10591 0.208257C6.82823 -0.069419 6.38291 -0.069419 6.10523 0.208257C5.82755 0.485933 5.82755 0.931262 6.10523 1.20894L17.3956 12.4993L6.10523 23.7898C5.82755 24.0674 5.82755 24.5128 6.10523 24.7904C6.24145 24.9267 6.42482 25 6.60295 25C6.78108 25 6.96445 24.9319 7.10067 24.7904L18.894 12.9971C19.1717 12.7246 19.1717 12.2741 18.8993 12.0016Z" fill="#F6F6F6"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>`;
  var prevBtn = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M6.10072 12.9984L17.8941 24.7917C18.1718 25.0694 18.6171 25.0694 18.8948 24.7917C19.1724 24.5141 19.1724 24.0687 18.8948 23.7911L7.60436 12.5007L18.8948 1.21025C19.1724 0.932571 19.1724 0.487242 18.8948 0.209566C18.7585 0.073349 18.5752 4.61458e-08 18.397 6.17186e-08C18.2189 7.72913e-08 18.0355 0.0681096 17.8993 0.209566L6.10596 12.0029C5.82828 12.2754 5.82828 12.7259 6.10072 12.9984Z" fill="#F6F6F6"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect x="25" y="25" width="25" height="25" transform="rotate(180 25 25)" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>`;
} else {
  var nextBtn = `<svg width="90" height="78" viewBox="0 0 90 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="90" height="78" fill="#AC3333"/>
                  <g clip-path="url(#clip0)">
                  <path d="M51.8993 39.0016L40.1059 27.2083C39.8282 26.9306 39.3829 26.9306 39.1052 27.2083C38.8276 27.4859 38.8276 27.9313 39.1052 28.2089L50.3956 39.4993L39.1052 50.7898C38.8276 51.0674 38.8276 51.5128 39.1052 51.7904C39.2414 51.9267 39.4248 52 39.603 52C39.7811 52 39.9645 51.9319 40.1007 51.7904L51.894 39.9971C52.1717 39.7246 52.1717 39.2741 51.8993 39.0016Z" fill="#F6F6F6"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect x="33" y="27" width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>`;

  var prevBtn = `<svg width="91" height="78" viewBox="0 0 91 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="91" height="78" fill="#929292"/>
                  <g clip-path="url(#clip0)">
                  <path d="M39.1007 38.9984L50.8941 50.7917C51.1718 51.0694 51.6171 51.0694 51.8948 50.7917C52.1724 50.5141 52.1724 50.0687 51.8948 49.7911L40.6044 38.5007L51.8948 27.2102C52.1724 26.9326 52.1724 26.4872 51.8948 26.2096C51.7585 26.0733 51.5752 26 51.397 26C51.2189 26 51.0355 26.0681 50.8993 26.2096L39.106 38.0029C38.8283 38.2754 38.8283 38.7259 39.1007 38.9984Z" fill="#F6F6F6"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect x="58" y="51" width="25" height="25" transform="rotate(180 58 51)" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>`;
}

$('.portfolio-grid').lightGallery({
  thumbnail: false,
  appendCounterTo: ".lg-inner",
  nextHtml: `${nextBtn}`,
  prevHtml: `${prevBtn}`,
  hideBarsDelay: 10000000000,

});





$('.portfolio-grid').on('onBeforeOpen.lg', function(){
 $('.site-wrapper').css('filter', 'blur(5px)');
});

$('.portfolio-grid').on('onAfterOpen.lg', function(){
  $('.lg-inner').append(`
      <div class="lg-close-btn">
        <svg class="lg-close-icon">
          <use xlink:href="img/sprite.svg#close">
        </svg>
      </div>
  `);


  $('.lg-close-btn').click(e => {
      $('.portfolio-grid').data('lightGallery').destroy();
  })
});




$('.portfolio-grid').on('onBeforeClose.lg', function(){
  $('.site-wrapper').css('filter', '');
});
