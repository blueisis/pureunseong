//로딩
const loading_page = document.getElementById('load')

window.onload = function () {
  setTimeout(function () {
    loading_page.style.opacity = '0'
    setTimeout(function () {
      loading_page.style.display = 'none'
    }, 1000)
  }, 200)
}

//헤더 버튼 메뉴 -------------------------------------------------
const body = document.querySelector('body')
const headerMenuBtn = document.querySelector('.menuBtn')
const headerMenu = document.querySelector('.header-btn-menu')
const menuClose = document.querySelector('.menuClose')

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

// 페이징 --------------------------------------------------------
const pagination = document.querySelectorAll('.pagination li')
const panel = document.querySelectorAll('.item-panel')

pagination.forEach((el, index) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()

    console.log(index)

    active(pagination, index)
    active(panel, index)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})

// 활성화 함수 --------------------------------------------------------
function active(obj, index) {
  for (let el of obj) {
    el.classList.remove('on')
  }
  obj[index].classList.add('on')
}

//상단으로 가기
const header_menu = document.querySelector('#header_sub')
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
