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

//그리드 --------------------------------------------------------------------------
function masonryLayout() {
  const masonryContainerStyle = getComputedStyle(
    document.querySelector('.masonry-container')
  )
  const columnGap = parseInt(
    masonryContainerStyle.getPropertyValue('column-gap')
  )
  const autoRows = parseInt(
    masonryContainerStyle.getPropertyValue('grid-auto-rows')
  )

  document.querySelectorAll('.masonry-item').forEach((elt) => {
    const pseudoImgHeight = elt.querySelector('.pseudo-img').scrollHeight
    const projectTitleElement = elt.querySelector('.project_title')
    const projectTitleHeight = projectTitleElement
      ? projectTitleElement.scrollHeight
      : 0

    const totalHeight = pseudoImgHeight + projectTitleHeight + 0 * columnGap

    elt.style.gridRowEnd = `span ${Math.ceil(totalHeight / autoRows)}`
  })
}

function masonryLayoutScrollAct() {
  const masonryItems = document.querySelectorAll('.masonry-item')

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
    })
  })

  masonryItems.forEach((item) => {
    observer.observe(item)
  })
}

masonryLayout()
masonryLayoutScrollAct()
window.addEventListener('resize', masonryLayout)

//헤더 버튼 메뉴--------------------------------------------------------------------
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

//탭메뉴
document.addEventListener('DOMContentLoaded', function () {
  const filterLinks = document.querySelectorAll('.menu ul li a')
  const filterItems = document.querySelectorAll('.menu ul li')

  filterLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const category = this.textContent.trim()
      const items = document.querySelectorAll(
        '.masonry-container .masonry-item'
      )

      filterItems.forEach((item) => {
        item.classList.remove('on')
      })

      filterItems[index].classList.add('on')

      items.forEach((item) => {
        if (category === 'all') {
          item.style.display = 'block'
        } else {
          if (item.classList.contains(category)) {
            item.style.display = 'block'
          } else {
            item.style.display = 'none'
          }
        }
      })
    })
  })
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
