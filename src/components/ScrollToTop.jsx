import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { scrollAction } from '../reducers/Scrollreducer';

const StyledTopButton = styled.div`
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  width: 45px;
  height: 45px;
  background-color: #333;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    color: #333;
    border-color: #333;
  }

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

const ScrollToTop = () => {
  const scrollY = useSelector((state) => state.scrollY.value);
  const dispatch = useDispatch();
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    dispatch(scrollAction.setScrollY(window.pageYOffset));
    if (scrollY > 50) {
      // 50 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 50 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(scrollAction.setScrollY(0)); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <StyledTopButton className={BtnStatus && 'active'} onClick={handleTop}>
      arrow_upward
    </StyledTopButton>
  );
};

export default ScrollToTop;
