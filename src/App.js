import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contacto } from "./pages/Contacto";
import { Home } from "./pages/Home";
import Landing from "./pages/Landing";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </>
  );
};
