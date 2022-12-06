import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ModalMD from './components/ModalMD';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Archiving from './pages/Archiving';
import Home from './pages/Home';
import Project from './pages/Project';
import Skill from './pages/Skill';

function App() {
  const modal = useSelector((state) => state.modal.value);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skill />
      <Archiving />
      <Project />
      <Footer />
      <ScrollToTop />
      <ModalMD />
    </div>
  );
}

export default App;
