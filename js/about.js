const loading_page = document.getElementById('load')
window.onload = function () {
  setTimeout(function () {
    loading_page.style.opacity = '0'
    setTimeout(function () {
      loading_page.style.display = 'none'
    }, 1000)
  }, 200)
}

const worksSec = document.querySelector('#works')
const introduceSec = document.querySelector('#introduce')
const base = -1000
const base2 = -1000

window.addEventListener('scroll', (e) => {
  scrollMotion(worksSec, worksSec, base)
  scrollMotion(introduceSec, introduceSec, base2)
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
