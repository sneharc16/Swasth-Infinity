import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Sustain from './pages/sustain';
import Profilepage from './pages/profile';
import LoaderWrapper from './pages/loaderwrapper';
import Cards from './pages/dietcard';
import { Arthub } from "./pages/arthub/Arthub";
import Tracker from "./pages/trackersheet/Tracker";
import User from "./pages/login";
import Create from "./pages/register";
import Logout from "./pages/logout";
import Dashboard from './pages/streak';

function App() {
  return (
    <Router>
      <LoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sus" element={<Sustain />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/arthub" element={<Arthub/>} />
          <Route path="/tracker" element={<Tracker/>} />
          <Route path="/register" element={<Create/>} />
          <Route path="/login" element={<User/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/streak" element={<Dashboard/>} />
          {/* <Route index={true} element={<Arthub/>} /> */}
        </Routes>
      </LoaderWrapper>
    </Router>
  );
}

export default App;
