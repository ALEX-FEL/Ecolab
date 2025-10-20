import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./composants/Home";
import Abonement from "./composants/abonement";
import Contact from "./composants/contact";
import Service from "./composants/service";
import About from "./composants/about";
import Detail_abonmt from "./composants/abonnements/detail";
import JobsList from "./composants/jobs/JobsList";
import JobDetail from "./composants/jobs/JobDetail";
import Visite_virtuelle from "./composants/services/visite_virtuelle";
import EcoVirtual_Lab from "./composants/services/EcoVirtual_Lab";
import Formations from "./composants/services/formations";

// Import des composantscontact


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Définir les routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/service" element={<Service />} /> 
          <Route path="/ecoVirtual_lab" element={<EcoVirtual_Lab />} /> 
          <Route path="/abonement" element={<Abonement />} />
          <Route path="/id_abonement" element={<Detail_abonmt />} />
          <Route path="/visite_virtuelle" element={<Visite_virtuelle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
