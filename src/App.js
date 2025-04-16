import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from "./components/ScrollToTop";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;