import React from 'react';
import Icon from '../components/Icon';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="inner">
        <div className="title">
          <h2>ABOUT</h2>
        </div>
        <div className="content">
          <div className="info">
            <Icon url={'name'} />
            이름 <br />
            한동엽
          </div>
          <div className="info">
            <Icon url={'calendar'} />
            <div>
              생년월일 <br />
              1995.04.14
            </div>
          </div>
          <div className="info">
            <Icon url="home" />
            <div>
              주소 <br />
              경기도 부천시
            </div>
          </div>
          <div className="info">
            <Icon url="phone" />
            <div>
              연락처 <br />
              <a href="tel:010-99234-8776">010-9923-8776</a>
            </div>
          </div>
          <div className="info">
            <Icon url="email" />
            <div>
              이메일 <br />
              <a href="mailto:pig8776@naver.com">pig8776@naver.com</a>
            </div>
          </div>
          <div className="info">
            <Icon url="graduation" />
            <div>
              학력 <br />
              상명대학교(서울) 일어교육과
              <br />
              2014.03 - 2018.02
            </div>
          </div>
          <div className="info">
            <Icon url="education" />
            <div>
              교육 <br />
              그린컴퓨터아카데미(강남) - 자바 웹 개발자 양성과정
              <br /> 2021.07 - 2021.12
            </div>
          </div>
          <div className="info">
            <Icon url="lecture" />
            <div>
              강의 <br />- 비전공자를 위한 풀스택 맛집지도 만들기
              프로젝트(Inflearn)
              <br />- ReactJS로 영화 웹 서비스 만들기(Nomadcoders)
              <br />- 바닐라 JS로 크롬 앱 만들기(Nomadcoders)
              <br />- React & Springboot(Youtube, 메타코딩)
              <br />- 프론트엔드 로드맵 마스터(Fastcampus)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
