import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import './reset.css';
import Header from './components/Header';
import About from './pages/Home/About/About';
import Skill from './pages/Skill/Skill';

function App() {
  return (
    <div className="whole-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </div>
  );
}

export default App;
