import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import './reset.css';
import Header from './components/Header';

function App() {
  return (
    <div className="whole-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
