// swiper 
const swiper = new Swiper('.swiper', {
  // 옵션 설정
	slidesPerView : 1, 
	spaceBetween : 90, 
	// slidesPerGroup : 4, 

	
	loopFillGroupWithBlank : true,

	loop : true,
  autoplay: {
    delay: 1000
  },
  speed:3000,
	pagination : { 
		el : '.swiper-pagination',
		clickable : true,
	},
	navigation : { 
		nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
	},

});