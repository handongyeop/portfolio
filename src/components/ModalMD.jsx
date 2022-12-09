import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { modalAction } from './../reducers/Modalreducer';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  visibility: visible;
  opacity: 1;
  transition: 0.2s linear;

  &.hidden {
    transform: translateY(-20px);
    visibility: hidden;
    opacity: 0;
  }
`;

const StyledMarkDown = styled.div`
  position: relative;
  top: 4rem;
  width: 100vw;
  height: calc(100vh - 4rem);
  line-height: 2.5rem;
  background-color: white;
  overflow: auto;

  & > .react-Markdown {
    margin: 4rem 8rem;
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
  top: 0;
  left: 0;
  z-index: 11;
  font-size: 2rem;
  color: white;
  background-color: black;
`;

const ModalCloser = styled.div`
  cursor: pointer;
`;

const ModalMD = () => {
  const modal = useSelector((state) => state.modal.value);
  const readMe = useSelector((state) => state.readMe.value);
  const dispatch = useDispatch();
  document.body.className = modal ? 'modal-open' : '';
  const markdown = `${readMe}`;
  return (
    <ModalWrapper className={modal ? '' : 'hidden'}>
      <ModalHeader>
        README.md
        <ModalCloser onClick={() => dispatch(modalAction.toggleModal())}>
          X
        </ModalCloser>
      </ModalHeader>
      <StyledMarkDown>
        <ReactMarkdown
          className="react-Markdown"
          remarkPlugins={[remarkGfm, remarkGemoji]}
          children={markdown}
          components={{}}
        ></ReactMarkdown>
      </StyledMarkDown>
    </ModalWrapper>
  );
};

export default ModalMD;
