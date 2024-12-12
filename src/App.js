import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sustain from "./pages/sustain";
import Profilepage from "./pages/profile";
import LoaderWrapper from "./pages/loaderwrapper";
import Cards from "./pages/dietcard";
import { Arthub } from "./pages/arthub/Arthub";
import Tracker from "./pages/trackersheet/Tracker";
import User from "./pages/login";
import Create from "./pages/register";
import Logout from "./pages/logout";
import AdminRegister from "./components/admin/admin-register";
import Adminlogin from "./components/admin/admin-login";
import AdminDashboard from "./components/admin/admin-dashboard";
import Yoga from "./components/yogahealth/yoga";
import RecipeSection from "./components/recipesection/RecipeSection";
import Yogacv from "./pages/Yoga/Yoga";
import About from "./components/aboutus/aboutus"
import TennisWorld from "./components/activitypages/newpage";
import MeditationWorld from "./components/activitypages/newpage copy";
import MenstrualCycleTracker from "./components/shefit/shefit";
import BlogPost from "./components/homeblogs/blogs";
import BlogPost2 from "./components/homeblogs/blogs2";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CalorieTracker from "./components/calorie";

function App() {
  return (
    <Router>
      <LoaderWrapper>
        <LanguageSwitcher/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/calorie' element={<CalorieTracker/>} />
          <Route path="/sus" element={<Sustain />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/arthub" element={<Arthub />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/register" element={<Create />} />
          <Route path="/login" element={<User />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adminregister" element={<AdminRegister />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/recipe" element={<RecipeSection />} />
          <Route path="/she" element={<MenstrualCycleTracker />} />
          <Route path="/start" element={<Yogacv />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog1" element={<BlogPost />} />
          <Route path="/blog2" element={<BlogPost2 />} />
          <Route path="/tennis" element={<TennisWorld />} />
          <Route path="/meditation" element={<MeditationWorld />} />
          {/* <Route index={true} element={<Arthub/>} /> */}
        </Routes>
      </LoaderWrapper>
    </Router>
  );
}

export default App;
