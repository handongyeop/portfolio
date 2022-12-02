import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Project.css';
import { Navigation, Pagination } from 'swiper';

const Project = () => {
  return (
    <section id="project">
      <div className="inner">
        <div className="title">PROJECT</div>
        <div className="content">
          <Swiper
            centeredSlides={true}
            loop={true}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              type: 'bullets',
              clickable: 'true',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
