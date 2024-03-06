const loading_page = document.getElementById('load')

window.onload = function () {
  setTimeout(function () {
    loading_page.style.opacity = '0'
    setTimeout(function () {
      loading_page.style.display = 'none'
    }, 1000)
  }, 200)
}

// 프로젝트 슬라이드 섹션
const swiper = new Swiper('.mySwiper', {
  spaceBetween: 20,
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1500,
  loopFillGroupWithBlank: false, //그룹수가 맞지 않을 경우 빈칸으로
  grabCursor: true, //스와이프시 마우스 커서모양 변경
  // autoplay: {
  //   //자동롤링
  //   delay: 0,
  //   disableOnInteraction: false,
  //   //롤링중에 스와이프되면 롤링 중지 (true)
  //   //롤링 중에 스와이프되더라도 롤링 계속 (false)
  // },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1281: {
      slidesPerView: 3.5,
    },
  },
})

// vertical 섹션
const slideSec = document.querySelector('#works')
const base2 = -900

window.addEventListener('scroll', (e) => {
  scrollMotion(slideSec, slideSec, base2)
})

function scrollMotion(section, target, base) {
  let scroll = window.scrollY || window.pageYOffset
  const top = section.offsetTop + base
  const bottom = section.offsetTop + section.offsetHeight

  if (scroll >= top && scroll <= bottom) {
    target.classList.add('on')
  } else {
    target.classList.remove('on')
  }
}

//헤더 버튼 메뉴
const body = document.querySelector('body')
const headerMenuBtn = document.querySelector('.menuBtn')
const headerMenu = document.querySelector('.header-btn-menu')
const menuClose = document.querySelector('.menuClose')
console.log(headerMenu)

headerMenuBtn.addEventListener('click', (e) => {
  e.preventDefault()

  headerMenu.style.display = 'flex'
  body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', (e) => {
  e.preventDefault()

  headerMenu.style.display = 'none'
  body.style.overflow = 'auto'
})

//상단으로 가기
const header_menu = document.querySelector('#header')
const header_menuHeight = header_menu.getBoundingClientRect().height
const upIcon = document.querySelector('#up_icon')

document.addEventListener('scroll', () => {
  if (window.scrollY > header_menuHeight) {
    upIcon.classList.add('active')
  } else {
    upIcon.classList.remove('active')
  }
})

upIcon.addEventListener('click', (e) => {
  e.preventDefault()

  window.scrollTo({ top: 0, behavior: 'smooth' })
})
