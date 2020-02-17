import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as styles from './index.module.css';

const Carousel = (props) => {
  const { weatherRecord } = props;
  const records = [...weatherRecord].map((record, i) => (
    <div className={styles.CarouselNote} key={i}>
      {`temp=${record.temp} pressure=${record.pressure} humidity=${record.humidity}`}
    </div>
  ));
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: styles.carouselDisplay,
  };
  return (
    <div>
      <Slider {...settings}>
        {records}
      </Slider>
    </div>
  );
};

export default Carousel;
