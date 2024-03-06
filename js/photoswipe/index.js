const closeIcon =
  '<svg width="25" height="25" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M700 700L400 400M400 400L100 100M400 400L700.003 100M400 400L100 700.003" stroke="black" stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round"/></svg>'

const leftIcon =
  '<svg width="25" height="25" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M573.333 790L620 743.333L276.667 400L620 56.6667L573.333 10L183.333 400L573.333 790Z" fill="black"/></svg>'

const rightIcon =
  '<svg width="25" height="25" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M226.667 790L180 743.333L523.333 400L180 56.6667L226.667 10L616.667 400L226.667 790Z" fill="black"/></svg>'

const actionPhotoSwipe = (gallerySelector) => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: gallerySelector,
    mainClass: 'pswp--custom',
    bgOpacity: 1,
    children: 'a.pic-photo',
    padding: { top: 50, bottom: 50, left: 10, right: 10 },
    pswpModule: PhotoSwipe,
    closeOnVerticalDrag: true,
    closeSVG: closeIcon,
    arrowPrevSVG: leftIcon,
    arrowNextSVG: rightIcon,
  })
  lightbox.init()
}

actionPhotoSwipe('#pic-slider')
