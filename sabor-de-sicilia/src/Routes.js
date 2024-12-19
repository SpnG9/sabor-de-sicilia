// React
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import TopNav from "./components/top-nav/TopNav";
import MainNav from "./components/main-nav/MainNav";
import Homepage from "./pages/homepage/Homepage";
import PreFooter from "./components/pre-footer/PreFoot";
import Footer from "./components/footer/Footer";
import Wip from "./pages/wip/Wip";

const RoutesComponent = () => {
  return (
    <>
      <TopNav />
      <MainNav />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/wip" element={<Wip />} />
      </Routes>
      <PreFooter />
      <Footer />
    </>
  );
};

export default RoutesComponent;
