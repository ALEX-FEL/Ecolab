import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./composants/Home";
import Abonement from "./composants/abonement";
import Contact from "./composants/contact";
import Service from "./composants/service";
import About from "./composants/about";
import Detail_services from "./composants/services/detali";
import Detail_abonmt from "./composants/abonnements/detail";

// Import des composantscontact


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Définir les routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} /> 
          <Route path="/id_service" element={<Detail_services />} /> 
          <Route path="/abonement" element={<Abonement />} />
          <Route path="/id_abonement" element={<Detail_abonmt />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
