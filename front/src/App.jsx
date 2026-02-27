import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Gallery from './pages/home/home.jsx';
import Location from './pages/location/Location.jsx';
import About from './pages/about/About.jsx';
import Error from "./pages/404/404.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;