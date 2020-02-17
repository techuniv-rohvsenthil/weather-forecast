import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as styles from './index.module.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: styles.carouselDisplay,
  };
  return (
    <div className={styles.Carousel}>
      <Slider {...settings}>
        <div className={styles.CarouselNote}>
          <h3>Weather Details 1</h3>
        </div>
        <div className={styles.CarouselNote}>
          <h3>Weather Details 2</h3>
        </div>
        <div className={styles.CarouselNote}>
          <h3>Weather Details 3</h3>
        </div>
        <div className={styles.CarouselNote}>
          <h3>Weather Details 4</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
