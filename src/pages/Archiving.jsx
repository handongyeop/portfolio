import React, { useEffect, useRef } from 'react';
import './Archiving.css';
import Icon from '../components/Icon';

const Archiving = () => {
  const archivingRefs = useRef([]);

  useEffect(() => {
    // Intersection OBserver API 사용해서 애니메이션 적용
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove('show');
          } else {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 },
    );

    archivingRefs.current.forEach((ref) => {
      observer.observe(ref);
    });
  }, [archivingRefs]);

  return (
    <section id="archiving">
      <div className="shadow">
        <div className="inner">
          <h2 className="title">ARCHIVING</h2>
          <div className="content">
            <div
              className="github"
              ref={(el) => (archivingRefs.current[0] = el)}
              onClick={() => {
                window.open('https://github.com/handongyeop');
              }}
            >
              <Icon url="github-icon" boxsize="6" center="true">
                github
              </Icon>
              <h3>GitHub</h3>
              <p className="url">github.com/handongyeop</p>
              <p className="desc">소스 코드 저장소</p>
              <ul>
                <li>프로젝트의 버전관리 용도의 소스 코드</li>
                <li>코딩테스트 연습을 위한 소스 코드</li>
                <li>강의를 들으면서 연습한 소스 코드</li>
              </ul>
            </div>
            <div
              className="tistory"
              ref={(el) => (archivingRefs.current[1] = el)}
              onClick={() => {
                window.open('https://humble-developer.tistory.com');
              }}
            >
              <Icon
                className="icon"
                url="tistory-icon"
                boxsize="6"
                center="true"
              >
                tistory
              </Icon>
              <h3>TISTORY</h3>
              <p className="url">humble-developer.tistory.com</p>
              <p className="desc">공부 및 지식 공유 목적 블로그</p>
              <ul>
                <li>공부하면서 경험한 오류 해결방법 기록</li>
                <li>웹 개발자가 되기 위해 공부한 CS지식 정리</li>
                <li>완전한 기술 습득을 위한 복습 및 지식 공유 </li>
                <li>자기계발을 위한 활동 기록</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archiving;
