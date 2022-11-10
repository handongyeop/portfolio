import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const moveGreeting = (e) => {
    setRotate({ x: (e.screenX - 700) / -10, y: (e.screenY - 500) / 10 });
  };

  const initGreeting = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div>
      <div className="home-bg">
        <div
          className="home-bg-black"
          onMouseMove={moveGreeting}
          onMouseOut={initGreeting}
        >
          <div
            className="greeting"
            style={{
              transform: `rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
              transition: '0.2s',
            }}
          >
            <div className="home-title">한동엽 웹 개발자 포트폴리오</div>
            <div className="home-content">
              안녕하세요. <br />
              저는 호기심이 많은 개발자입니다. <br />
              문제를 마주치면 궁금증이 해소될 때까지 파고드는 것이 제
              장점입니다.
              <br />
              항상 겸손한 마음으로 끊임없이 공부하고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
