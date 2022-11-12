import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { floatAction } from '../../redux/FloatReducer';
import { StyledTitle } from '../About/About';
import './Archiving.css';

const Archiving = () => {
  const float = useSelector((state) => state.float.value);
  const dispatch = useDispatch();
  return (
    <div className="archiving-bg">
      <div className="archiving-title">ARCHIVING</div>
      <div className="archiving-content">
        <a
          href="https://github.com/handongyeop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`archiving-box ${float === 9 && 'float'}`}
            onMouseOver={() => dispatch(floatAction.float(9))}
            onMouseOut={() => dispatch(floatAction.float(0))}
          >
            <StyledTitle>
              <img src="./images/github.png" alt="github" />
              <div>GitHub</div>
            </StyledTitle>
            <div className={`archiving-url ${float === 9 && 'focus'}`}>
              github.com/handongyeop
            </div>
            <p>소스 코드 저장소</p>
            <ul>
              <li>프로젝트의 버전관리 용도의 소스 코드</li>
              <li>코딩테스트 연습을 위한 소스 코드</li>
              <li>강의를 들으면서 연습한 소스 코드</li>
            </ul>
          </div>
        </a>
        <a
          href="https://humble-developer.tistory.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`archiving-box ${float === 10 && 'float'}`}
            onMouseOver={() => dispatch(floatAction.float(10))}
            onMouseOut={() => dispatch(floatAction.float(0))}
          >
            <StyledTitle>
              <img src="./images/tistory.png" alt="tistory" />
              <div>TISTORY</div>
            </StyledTitle>
            <div className={`archiving-url ${float === 10 && 'focus'}`}>
              humble-developer.tistory.com
            </div>
            <p>공부 및 지식 공유 목적 블로그</p>
            <ul>
              <li>공부하면서 경험한 오류 해결방법 기록</li>
              <li>웹 개발자가 되기 위해 공부한 CS지식 정리</li>
              <li>완전한 기술 습득을 위한 복습 및 지식 공유 </li>
              <li>자기계발을 위한 활동 기록</li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Archiving;
