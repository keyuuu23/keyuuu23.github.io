import './App.css';
import { Routes, Route } from 'react-router-dom';
import Topnav from './components/topnav';
import Footer from './components/footer';
import Home from './pages/home';
import Projects from './pages/projects';
import Glomp from './pages/glomp';

function App() {
  return (
    <>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/glomp" element={<Glomp/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
