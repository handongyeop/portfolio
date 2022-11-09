import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const moveGreeting = (e) => {
    setRotate({ x: e.screenX - 700, y: e.screenY - 500 });
  };

  return (
    <div>
      <div className="home-bg">
        <div className="home-bg-black" onMouseMove={moveGreeting}>
          <div
            className="greeting"
            style={{
              transform: `rotateX(${rotate.y / -10}deg) rotateY(${
                rotate.x / 10
              }deg)`,
            }}
          >
            <div className="home-title">한동엽 웹 개발자 포트폴리오</div>
            <div className="home-text">
              안녕하세요. <br />
              항상 겸손한 마음으로 끊임없이 배우려고 노력하고 있습니다. <br />
              부족한 면이 많지만 잘 부탁드립니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
