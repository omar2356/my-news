const mql = window.matchMedia("(max-width: 922px)");

const handleOrientationChange = (e) => {
  if (mql.matches) {
    changeSlideview(1)
  }else {
    changeSlideview(3)
  }
}

const changeSlideview = (slide) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay : true ,
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

handleOrientationChange();

mql.onchange = (e) => {
  handleOrientationChange(e)
}



  document.getElementById("year").innerHTML = new Date().getFullYear()