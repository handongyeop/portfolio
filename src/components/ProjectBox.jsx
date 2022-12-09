import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { modalAction, readMeAction } from '../reducers/Modalreducer';
import { slideAction } from './../reducers/Slidereducer';

const ProjectWrapper = styled.div`
  height: 100%;
`;

const ProjectTitle = styled.h3`
  height: 10%;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectPeriod = styled.p`
  height: 5%;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.1rem;
`;

const ProjectContent = styled.div`
  height: 85%;
  display: flex;
`;

const ProjectImage = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  margin: 1rem;
  background-image: url(${(props) => `./images/${props.image}.png`});
  background-repeat: no-repeat;
  transition: 0.6s;
`;

const ImageController = styled.p`
  text-align: center;
`;

const ProjectDesc = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const DescInfo = styled.article`
  word-wrap: break-word;
  line-height: 1.2;
`;

const DescReadme = styled.button`
  width: 130px;
  padding: 10px;
  margin: 1rem auto;
  border: 2px solid #333;
  border-radius: 4px;
  background-color: #373737;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.4s;

  &:hover {
    background-color: white;
    color: #373737;
  }
`;

const DescSetting = styled.div`
  display: none;
  margin-bottom: 10px;
`;

const SettingLabel = styled.div`
  width: 30%;
  font-weight: 600;

  &::before {
    content: '▶';
    padding-right: 0.5rem;
    vertical-align: middle;
  }
`;

const SettingContent = styled.div`
  width: 70%;
  line-height: 1.2;
  word-wrap: break-word;

  &.link {
    color: var(--color-link);
    cursor: pointer;

    :hover {
      color: var(--color-link-focus);
    }
  }
`;

const ProjectBox = ({
  title,
  period,
  image,
  imageH,
  readMe,
  projectDesc,
  primaryFn,
  github,
  url,
  frontend,
  backend,
  database,
  deploy,
}) => {
  const slideY = useSelector((state) => state.slideY.value);
  const dispatch = useDispatch();

  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectPeriod>{period}</ProjectPeriod>
      <ProjectContent>
        <div>
          <ProjectImage
            style={{
              backgroundPositionY: `${slideY}px`,
              transition: '0.5s ease',
            }}
            image={image}
          ></ProjectImage>
          <ImageController>
            <button
              onClick={() => {
                slideY === -imageH + 400
                  ? dispatch(slideAction.prevEnd(imageH))
                  : slideY < 0 && dispatch(slideAction.prev());
              }}
            >
              ◀
            </button>{' '}
            <button
              onClick={() => {
                slideY < -imageH + 800
                  ? slideY !== -imageH + 400 &&
                    dispatch(slideAction.nextEnd(imageH))
                  : dispatch(slideAction.next());
              }}
            >
              ▶
            </button>
          </ImageController>
        </div>
        <ProjectDesc>
          <DescInfo
            dangerouslySetInnerHTML={{ __html: projectDesc }}
          ></DescInfo>
          <DescReadme
            onClick={() => {
              dispatch(modalAction.toggleModal());
              dispatch(readMeAction.setReadMe({ readMe }));
            }}
            tabIndex={-1}
          >
            README.md
          </DescReadme>
          <DescSetting
            style={primaryFn ? { display: 'flex' } : { display: 'none' }}
          >
            <SettingLabel>주요 기능</SettingLabel>
            <SettingContent>{primaryFn}</SettingContent>
          </DescSetting>
          <DescSetting
            style={github ? { display: 'flex' } : { display: 'none' }}
          >
            <SettingLabel>GitHub</SettingLabel>
            <SettingContent
              className="link"
              onClick={() => {
                window.open(github);
              }}
            >
              {github}
            </SettingContent>
          </DescSetting>
          <DescSetting style={url ? { display: 'flex' } : { display: 'none' }}>
            <SettingLabel>Url</SettingLabel>
            <SettingContent
              className="link"
              onClick={() => {
                window.open(url);
              }}
            >
              {url}
            </SettingContent>
          </DescSetting>
          <DescSetting
            style={frontend ? { display: 'flex' } : { display: 'none' }}
          >
            <SettingLabel>FrontEnd</SettingLabel>
            <SettingContent>{frontend}</SettingContent>
          </DescSetting>
          <DescSetting
            style={backend ? { display: 'flex' } : { display: 'none' }}
          >
            <SettingLabel>BackEnd</SettingLabel>
            <SettingContent>{backend}</SettingContent>
          </DescSetting>
          <DescSetting
            style={database ? { display: 'flex' } : { display: 'none' }}
          >
            <SettingLabel>Database</SettingLabel>
            <SettingContent>{database}</SettingContent>
          </DescSetting>
          <DescSetting
            style={deploy ? { display: 'flex' } : { display: 'none' }}
          >
            <SettingLabel>Deploy</SettingLabel>
            <SettingContent>{deploy}</SettingContent>
          </DescSetting>
        </ProjectDesc>
      </ProjectContent>
    </ProjectWrapper>
  );
};

export default ProjectBox;
