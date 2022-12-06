import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { modalAction } from './../reducers/Modalreducer';

const StyledMarkDown = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 1rem;
  line-height: 2.5rem;
  background-color: white;
  z-index: 10;
  visibility: visible;
  opacity: 1;
  transition: 0.2s linear;

  &.hidden {
    transform: translateY(-20px);
    visibility: hidden;
    opacity: 0;
  }

  & > .react-Markdown {
    position: relative;
    top: 4rem;
    margin: 2rem 8rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 4rem;
  position: fixed;
  font-size: 2rem;
  color: white;
  background-color: black;
`;

const ModalCloser = styled.div`
  cursor: pointer;
`;

const ModalMD = (readMe) => {
  const modal = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  document.body.className = modal ? 'modal-open' : '';
  const markdown = `
  # 목록(List)
  ### 목록

  1. 순서가 필요한 목록
  1. 순서가 필요한 목록
  1. 순서가 필요한 목록
     1. 순서가 필요한 목록
     1. 순서가 필요한 목록
  1. 순서가 필요한 목록
  
  - 순서가 필요없는 목록
  - 순서가 필요없는 목록
  - 순서가 필요없는 목록
    - 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록
  - 순서가 필요하지 않은 목록
  `;
  return (
    <StyledMarkDown className={modal ? '' : 'hidden'}>
      <ModalHeader>
        README.md
        <ModalCloser onClick={() => dispatch(modalAction.toggleModal())}>
          X
        </ModalCloser>
      </ModalHeader>
      <ReactMarkdown
        className="react-Markdown"
        remarkPlugins={[remarkGfm]}
        children={markdown}
      ></ReactMarkdown>
    </StyledMarkDown>
  );
};

export default ModalMD;
