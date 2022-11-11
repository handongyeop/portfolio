import React from 'react';
import './Skill.css';
import { useSelector, useDispatch } from 'react-redux';
import { floatAction } from '../../redux/FloatReducer';
import { StyledTitle } from '../About/About';

const Skill = () => {
  const float = useSelector((state) => state.float.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="skill-bg">
        <div className="skill-title">SKILL</div>
        <div className="skill-content">
          <div>
            <div
              className={`skill-frontend ${float === 3 && 'float'}`}
              onMouseOver={() => dispatch(floatAction.float(3))}
              onMouseOut={() => dispatch(floatAction.float(0))}
            >
              <StyledTitle style={{ fontSize: '2rem' }}>Frontend</StyledTitle>
              <img
                src="./images/frontend.png"
                alt="html, css, js, react, redux, bootstrap, material-ui"
              />
            </div>
            <div
              className={`skill-deployment ${float === 5 && 'float'}`}
              onMouseOver={() => dispatch(floatAction.float(5))}
              onMouseOut={() => dispatch(floatAction.float(0))}
            >
              <StyledTitle style={{ fontSize: '2rem' }}>Deployment</StyledTitle>
              <img
                src="./images/deployment.png"
                alt="amazon web services, netlify"
              />
            </div>
          </div>
          <div>
            <div
              className={`skill-backend ${float === 4 && 'float'}`}
              onMouseOver={() => dispatch(floatAction.float(4))}
              onMouseOut={() => dispatch(floatAction.float(0))}
            >
              <div>
                <StyledTitle style={{ fontSize: '2rem' }}>Backend</StyledTitle>
                <img src="./images/backend.png" alt="" />
              </div>
            </div>
            <div
              className={`skill-version ${float === 6 && 'float'}`}
              onMouseOver={() => dispatch(floatAction.float(6))}
              onMouseOut={() => dispatch(floatAction.float(0))}
            >
              <StyledTitle style={{ fontSize: '2rem' }}>
                Version Control
              </StyledTitle>
              <img src="./images/version.png" alt="git, github" />
            </div>
          </div>
          <div>
            <div
              className={`skill-communication ${float === 7 && 'float'}`}
              onMouseOver={() => dispatch(floatAction.float(7))}
              onMouseOut={() => dispatch(floatAction.float(0))}
            >
              <StyledTitle style={{ fontSize: '2rem' }}>
                Communication
              </StyledTitle>
              <img
                src="./images/communication.png"
                alt="notion, figma, postman"
              />
            </div>
            <div
              className={`skill-certificate ${float === 8 && 'float'}`}
              onMouseOver={() => dispatch(floatAction.float(8))}
              onMouseOut={() => dispatch(floatAction.float(0))}
            >
              <StyledTitle style={{ fontSize: '2rem' }}>
                Certificate
              </StyledTitle>
              <img src="./images/certificate.png" alt="정보처리기사" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
