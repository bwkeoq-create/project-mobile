window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');

  // 방문 기록('splashVisited')이 없는 '첫 방문자'일 때만 실행합니다.
  if (!sessionStorage.getItem('splashVisited')) {
    
    // 1. 숨겨져 있던 스플래시 스크린을 화면에 표시합니다.
    splash.classList.add('active');

    // 2. 1초(1000ms) 후에 페이드 아웃 애니메이션을 실행합니다.
    setTimeout(() => {
      splash.classList.add('fade-out');
      // 3. 다음 방문 시에는 뜨지 않도록 세션에 기록을 저장합니다.
      sessionStorage.setItem('splashVisited', 'true');
    }, 1000);
  }
  // 이미 방문한 사용자는 아무런 클래스도 추가되지 않으므로 
  // CSS의 기본값인 display: none 상태가 유지되어 깜빡이지 않습니다.
});
//index페이지에서 사용되는 js

// 비주얼 스와이퍼 영역
var swiper1 = new Swiper('.swiper1', {
      autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween: 0,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      // navigation: {    //이전/다음 버튼
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      pagination: {   //페이지 네이션
        el: '.pagination_visual',
        //dynamicBullets: true, //개수가 많을 때 사용
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
      autoplay: {  //자동
        delay: 4000,
        disableOnInteraction: false
      },
      //scrollbar: {  //하단 스크롤바
        //el: '.swiper-scrollbar',
       // hide: true
      //}
    });

//회사소개 스와이퍼
  var mySwiper = new Swiper('.mySwiper', {
       
        spaceBetween: 4,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var mySwiper2 = new Swiper('.mySwiper2', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: mySwiper,
        },
      });

//랜드마크 스와이퍼
var landmarkSwiper = new Swiper('.landmark-swiper', {
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 5,
        pagination: {
            el: '.landmark-swiper .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        });


//소셜 스와이퍼
   var socialSwiper = new Swiper('.socialSwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '1.5',
        
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        pagination: {
          el: '.social-pagination',
        },
      });

    // var swiper2 = new Swiper('.swiper2', {
    //   autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
    //   slidesPerView: 4,  //단수
    //   spaceBetween: 0,  //단사이 여백
    //   loop: true,  //무한 loop
    //   //freeMode: true,  //터치 만큼 자유롭게 이동
    //   //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //   //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //   //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    //   navigation: {    //이전/다음 버튼
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   pagination: {   //페이지 네이션
    //     el: '.pagination_about',
    //     //dynamicBullets: true, //개수가 많을 때 사용
    //     clickable: true,
    //     //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    //   },
    //   autoplay: {  //자동
    //     delay: 4000,
    //     disableOnInteraction: false
    //   },
    //   //scrollbar: {  //하단 스크롤바
    //     //el: '.swiper-scrollbar',
    //    // hide: true
    //   //}
    // });
