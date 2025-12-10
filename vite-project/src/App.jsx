import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./pages/Hero";
import EnquiryPopup from "./components/EnquiryPopup";
import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 
 import viteLogo from '/vite.svg' 
 import './App.css'
import Footer from "./components/Footer";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";
import GallerySection from "./pages/GallerySection";
import MapSection from "./pages/MapSection";
import CookiePolicy from "./pages/CookiePolicy";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/TermsConditions" element={<TermsAndConditions />} />
        <Route path="/GallerySection" element={<GallerySection/>}/>
          <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/MapSection" element={<MapSection/>}/>     

        
        
        {/* <Route path="/CookiePolicy" element={<Cookie />} /> */}
        </Routes>
        {/* <Footer/> */}
        <EnquiryPopup/>
      </BrowserRouter>
    </>
  );
}

export default App;
