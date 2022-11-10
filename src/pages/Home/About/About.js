import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { floatAction } from '../../../redux/FloatReducer';
import './About.css';

const AboutInfo = styled.div`
  width: 33.3333%;
  display: flex;
  padding-left: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
`;

const InfoImage = styled.img`
  width: 2rem;
  margin: 0.3rem 1rem 0 0;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding: 1.5rem 0;
  border-bottom: 0.1rem rgb(200, 200, 200) solid;
`;

const IntroduceContent = styled.div`
  font-size: 1.2rem;
  padding: 0 1rem;
`;

const StyledA = styled.a`
  color: black;
  :visited {
    color: black;
  }
`;

const About = () => {
  const float = useSelector((state) => state.float.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="about-bg">
        <div className="about-title">ABOUT</div>
        <div className="about-content">
          <AboutInfo>
            <div>
              <InfoImage src="./images/name.png" alt="이름" />
            </div>
            <div>
              이름 <br />
              한동엽
            </div>
          </AboutInfo>
          <AboutInfo>
            <div>
              <InfoImage src="./images/calendar.png" alt="이름" />
            </div>
            <div>
              생년월일 <br />
              1995.04.14
            </div>
          </AboutInfo>
          <AboutInfo>
            <div>
              <InfoImage src="./images/home.png" alt="이름" />
            </div>
            <div>
              주소 <br />
              경기도 부천시
            </div>
          </AboutInfo>
          <AboutInfo>
            <div>
              <InfoImage src="./images/phone.png" alt="이름" />
            </div>
            <div>
              연락처 <br />
              <StyledA href="tel:010-99234-8776">010-9923-8776</StyledA>
            </div>
          </AboutInfo>
          <AboutInfo>
            <div>
              <InfoImage src="./images/email.png" alt="이름" />
            </div>
            <div>
              이메일 <br />
              <StyledA href="mailto:pig8776@naver.com">
                pig8776@naver.com
              </StyledA>
            </div>
          </AboutInfo>
          <AboutInfo>
            <div>
              <InfoImage src="./images/pencil.png" alt="이름" />
            </div>
            <div>
              학력 <br />
              상명대학교(서울)
              <br />
              일어교육과
            </div>
          </AboutInfo>
        </div>
        <div className="introduce-wrap">
          <div
            className={`introduce-box ${float === 1 && 'float'}`}
            onMouseOver={() => dispatch(floatAction.float(1))}
            onMouseOut={() => dispatch(floatAction.float(0))}
          >
            <StyledTitle>호기심은 나의 원동력</StyledTitle>
            <IntroduceContent>내용</IntroduceContent>
          </div>
          <div
            className={`introduce-box ${float === 2 && 'float'}`}
            onMouseOver={() => dispatch(floatAction.float(2))}
            onMouseOut={() => dispatch(floatAction.float(0))}
          >
            <StyledTitle>소통의 리더십</StyledTitle>
            <IntroduceContent>내용</IntroduceContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
export { StyledTitle };
