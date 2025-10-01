import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DeleteAccount from './pages/DeleteAccount';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
