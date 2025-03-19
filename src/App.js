import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./composants/Home";
import Abonement from "./composants/abonement";
import Contact from "./composants/contact";
import Service from "./composants/service";
import About from "./composants/about";
import Detail_services from "./composants/services/detali";
import Detail_abonmt from "./composants/abonnements/detail";
import Visite_virtuelle from "./composants/services/visite_virtuelle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ecoVirtual" element={<Detail_services />} />
        <Route path="/abonement" element={<Abonement />} />
        <Route path="/abonement/:id" element={<Detail_abonmt />} />
        <Route path="/visite_virtuelle" element={<Visite_virtuelle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
