export const sliderSettings = {
  infinite: true,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};
