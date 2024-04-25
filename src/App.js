import './App.scss';
import Dont from './Pages/Dont';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Navbar from './Pages/Navbar';
import About from './Pages/about';
import Amazing from './Pages/amazing';
import Feature from './Pages/feature';
import Project from './Pages/project';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Feature/>
    <Project/>
    <Amazing/>
    <Dont/>
    <Footer/>
    </>
  );
}

export default App;
