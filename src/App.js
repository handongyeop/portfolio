import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Archiving from './pages/Archiving';
import Home from './pages/Home';
import Project from './pages/Project';
import Skill from './pages/Skill';

function App() {
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
    </div>
  );
}

export default App;
