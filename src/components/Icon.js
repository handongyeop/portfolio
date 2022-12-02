import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  width: ${(props) => (props.size ? `${props.size}rem` : "3rem")};
  height: ${(props) => (props.size ? `${props.size}rem` : "3rem")};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => `./images/${props.url}.png`});
  margin: ${(props) => props.center && "0 auto"};
  border: ${(props) => props.circle && "2px solid white"};
  border-radius: ${(props) => props.circle && "50%"};
`;

const Icon = ({ url, size, center, circle }) => {
  return (
    <StyledIcon
      size={size}
      url={url}
      center={center}
      circle={circle}
    ></StyledIcon>
  );
};
export default Icon;
