import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import './reset.css';
import Header from './components/Header';
import About from './pages/About/About';
import Skill from './pages/Skill/Skill';
import Archiving from './pages/Archiving/Archiving';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Project from './pages/Project/Project';

const FloatingBtn = styled.div`
  position: fixed;
  line-height: 63px;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: rgb(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll); //unmount시 해제되도록
    };
  }, []);
  return (
    <div className="whole-wrapper">
      <Header scrollPosition={scrollPosition} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/archiving" element={<Archiving />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <FloatingBtn
        onClick={scrollToTop}
        style={{ display: scrollPosition < 50 && 'none' }}
      >
        <img
          src="./images/chevron.png"
          alt="최상단으로"
          style={{ width: '1.5rem' }}
        />
      </FloatingBtn>
    </div>
  );
}

export default App;
