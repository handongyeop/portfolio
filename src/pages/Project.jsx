import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Project.css';
import { Navigation, Pagination } from 'swiper';
import ProjectBox from '../components/ProjectBox';
import { project1 } from '../data';

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
            <SwiperSlide>
              <ProjectBox
                title={project1.title}
                period={project1.period}
                image={project1.image}
                projectDesc={project1.projectDesc}
                primaryFn={project1.primaryFn}
                github={project1.github}
                url={project1.url}
                frontend={project1.frontend}
                deploy={project1.deploy}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectBox />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
