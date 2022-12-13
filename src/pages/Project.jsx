import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Project.css';
import { Navigation, Pagination } from 'swiper';
import ProjectBox from '../components/ProjectBox';
import { project1, project2, project3 } from '../data';

const Project = () => {
  return (
    <section id="project">
      <div className="inner">
        <h2 className="title">PROJECT</h2>
        <div className="content">
          <Swiper
            centeredSlides={true}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            touchRatio={1}
            pagination={{
              type: 'bullets',
              clickable: 'true',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              1500: {
                slidesPerView: 3,
                touchRatio: 0,
              },
            }}
          >
            <SwiperSlide>
              <ProjectBox
                idx={0}
                title={project1.title}
                period={project1.period}
                image={project1.image}
                imageH={project1.imageH}
                readMe={project1.readMe}
                projectDesc={project1.projectDesc}
                primaryFn={project1.primaryFn}
                github={project1.github}
                url={project1.url}
                frontend={project1.frontend}
                deploy={project1.deploy}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectBox
                idx={1}
                title={project2.title}
                period={project2.period}
                image={project2.image}
                imageH={project2.imageH}
                readMe={project2.readMe}
                projectDesc={project2.projectDesc}
                primaryFn={project2.primaryFn}
                github={project2.github}
                url={project2.url}
                frontend={project2.frontend}
                deploy={project2.deploy}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectBox
                idx={2}
                title={project3.title}
                period={project3.period}
                image={project3.image}
                imageH={project3.imageH}
                readMe={project3.readMe}
                projectDesc={project3.projectDesc}
                primaryFn={project3.primaryFn}
                github={project3.github}
                url={project3.url}
                frontend={project3.frontend}
                deploy={project3.deploy}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
