// React
import React from "react";
import { Routes, Route } from 'react-router-dom';


// Components
import TopNav from './components/top-nav/TopNav'
import MainNav from "./components/main-nav/MainNav";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/footer/Footer";

const RoutesComponent = () => {
  return (
    <>
    <TopNav/>
      <MainNav/>
        <Routes>
          <Route path="/homepage" element={<Homepage/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default RoutesComponent;