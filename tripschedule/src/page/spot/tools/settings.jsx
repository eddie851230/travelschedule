const imagesDots = [
  "/img/jp1.jpg",
  "/img/晴空塔.jpg",
  "/img/disney.jpg",
  "/img/mount fuji.jpg",
  "/img/jp2.jpeg",
  "/img/search-page-bg.jpg",
  "/img/淺草寺.jpg",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  dotsClass: "slick-dots slick-thumb",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

  
};

export default settings;
