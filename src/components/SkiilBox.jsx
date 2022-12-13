import React from 'react';
import styled from 'styled-components';

const SkillBoxIcon = styled.div`
  width: 130px;
  height: 130px;
  border: 3px solid #555;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgb(0 0 0 / 50%);
  transition: transform 0.1s, background-color 0.6s;

  &:hover {
    cursor: pointer;
    background-color: #ff9c00;
    transform: scale(1.2);
  }

  @media (max-width: 1000px) {
    width: 100px;
    height: 100px;
    transform: scale(0.8);
    margin: -0.5rem;

    &:hover {
      transform: scale(1);
    }
  }
`;

const SkillImage = styled.div`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.size ? `${props.size}%` : '100%')};
  background-image: url(${(props) => `./images/${props.url}.png`});
`;

const SkiilBox = ({ url, size }) => {
  return (
    <SkillBoxIcon>
      <SkillImage url={url} size={size}></SkillImage>
    </SkillBoxIcon>
  );
};
export default SkiilBox;
