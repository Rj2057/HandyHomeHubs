import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import AboutUs from './page/aboutUs';
import Privacy from './page/privacy';
import Terms from './page/term&condition';
import Electrician from './Service/electriciansrvice';
import Plumber from './Service/pumber';
import Carpenter from './Service/carpenter';
import Fullhomecleaning from './Service/Fullhomecleaning';
import HairCutting from './Service/HairCutting';
import Appliance from './Service/applianceservice';
import Kitchen from './Service/Kitchen';
import Pestcontrol from './Service/pestcontrol';
import Movers from './Service/movers&packers';
import LoginSignup from './components/LoginSignup';
import Date from './page/Datepicker'
import Adress from'./page/Adress'
import Homesecurity from './Service/homeSecurity'


function App() {
  const [showLogin, setShowLogin] = useState(false); // Controls modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status

  const handleLogin = () => {
    setIsLoggedIn(true); // Sets user as logged in
    setShowLogin(false); // Closes login/signup modal after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Logs the user out
  };

  return (
    <div>
      <BrowserRouter>
        {showLogin && (
          <LoginSignup onLogin={handleLogin} onClose={() => setShowLogin(false)} />
        )}
        <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/electrician" element={<Electrician />} />
          <Route path="/plumber" element={<Plumber />} />
          <Route path="/carpenter" element={<Carpenter />} />
          <Route path="/fullhomecleaning" element={<Fullhomecleaning />} />
          <Route path="/haircut" element={<HairCutting />} />
          <Route path="/appliance" element={<Appliance />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/pestcontrol" element={<Pestcontrol />} />
          <Route path="/movers" element={<Movers />} />
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/date" element={<Date/>}/>
          <Route path="/adress" element={<Adress/>}/>
          <Route path="/homesecurity" element={<Homesecurity/>}/>
        </Routes>
        <br />
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
