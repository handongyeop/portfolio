import React from 'react';
import SkiilBox from '../components/SkiilBox';
import './Skill.css';

const Skill = () => {
  return (
    <section id="skill">
      <div className="inner">
        <div className="title">
          <h2>SKILL</h2>
        </div>
        <div className="content">
          <div className="frontend">
            <h3>Frontend</h3>
            <SkiilBox url="hcj" size="95">
              HTML, CSS, JS
            </SkiilBox>
            <SkiilBox url="jquery" size="80">
              JQuery
            </SkiilBox>
            <SkiilBox url="react" size="90">
              React
            </SkiilBox>
            <SkiilBox url="redux" size="95">
              Redux, Redux-tool-kit
            </SkiilBox>
            <SkiilBox url="bootstrap" size="115">
              Bootstrap
            </SkiilBox>
            <SkiilBox url="material-ui" size="115">
              Material-ui
            </SkiilBox>
          </div>
          <div className="backend">
            <h3>Backend</h3>
            <SkiilBox url="nodejs" size="105">
              Node.js
            </SkiilBox>
            <SkiilBox url="java" size="85">
              Java
            </SkiilBox>
            <SkiilBox url="springboot" size="95">
              Springboot
            </SkiilBox>
            <SkiilBox url="jpa" size="90">
              Spring-Data-JPA
            </SkiilBox>
            <SkiilBox url="mysql" size="90">
              MySQL
            </SkiilBox>
          </div>
          <div className="deployment">
            <h3>Deployment</h3>
            <SkiilBox url="aws" size="110">
              Amazon-Web-Services
            </SkiilBox>
            <SkiilBox url="netlify" size="125">
              Netlify
            </SkiilBox>
            <SkiilBox url="vercel" size="100">
              Vercel
            </SkiilBox>
          </div>
          <div className="version">
            <h3>Version Control</h3>
            <SkiilBox url="git" size="90">
              Git
            </SkiilBox>
            <SkiilBox url="github" size="110">
              GitHub
            </SkiilBox>
          </div>
          <div className="communication">
            <h3>Communication</h3>
            <SkiilBox url="notion" size="95">
              Notion
            </SkiilBox>
            <SkiilBox url="postman" size="70"></SkiilBox>
          </div>
          <div className="certificate">
            <h3>Certificate</h3>
            <SkiilBox url="certificate" size="85">
              정보처리기사
            </SkiilBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
