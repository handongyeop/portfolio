import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="shadow">
        <div className="inner">
          <div className="greeting">
            <div className="title">
              <div className="icon--wifi"></div>
              <h1>
                한동엽 웹 개발자
                <br />
                포트폴리오
              </h1>
            </div>
            <div className="content">
              안녕하세요. <br />
              저는 호기심이 많은 개발자입니다. <br />
              문제를 마주치면 궁금증이 해소될 때까지 파고드는 것이 제
              장점입니다.
              <br />
              항상 겸손한 마음으로 끊임없이 공부하겠습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
