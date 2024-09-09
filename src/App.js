import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Sustain from './pages/sustain';
import Profilepage from './pages/profile';
import LoaderWrapper from './pages/loaderwrapper';
import Cards from './pages/dietcard'

function App() {
  return (
    <Router>
      <LoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sus" element={<Sustain />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </LoaderWrapper>
    </Router>
  );
}

export default App;
