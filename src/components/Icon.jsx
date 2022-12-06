import React from 'react';
import styled, { css } from 'styled-components';

const StyledIcon = styled.div`
  width: ${(props) => (props.boxsize ? `${props.boxsize}rem` : '3rem')};
  height: ${(props) => (props.boxsize ? `${props.boxsize}rem` : '3rem')};
  background-size: ${(props) => (props.bgsize ? `${props.bgsize}%` : '100%')};
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => `./images/${props.url}.png`});
  margin: ${(props) => props.center && '0 auto'};
  cursor: pointer;

  ${(props) =>
    props.isCircle &&
    css`
      border: 5px solid white;
      border-radius: 50%;
    `}
`;

const Icon = ({ url, boxsize, center, isCircle, bgsize, link }) => {
  return (
    <StyledIcon
      boxsize={boxsize}
      bgsize={bgsize}
      url={url}
      center={center}
      isCircle={isCircle}
      onClick={
        link
          ? () => {
              window.open(link);
            }
          : () => {}
      }
    ></StyledIcon>
  );
};
export default Icon;
