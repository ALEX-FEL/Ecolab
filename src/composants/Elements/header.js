import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand p-0" exact>
                <img src="assets/img/Ego.png" alt="Logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <NavLink to="/" className="nav-item nav-link" activeClassName="active" exact>Accueil</NavLink>
                    <NavLink to="/about" className="nav-item nav-link" activeClassName="active">À propos</NavLink>
                    <div className="nav-item dropdown">
                        <NavLink to="/service" className="nav-item nav-link dropdown-toggle" activeClassName="active" data-bs-toggle="dropdown">Service</NavLink>
                        <div className="dropdown-menu m-0">
                            <NavLink to="/ecoVirtual_lab" className="dropdown-item" activeClassName="active">EcoVirtual Lab (Labos Virtuels)</NavLink>
                            <NavLink to="/visite_virtuelle" className="dropdown-item" activeClassName="active">Visite Virtuelle 237</NavLink>
                            <NavLink to="/eco_Game_zone" className="dropdown-item" activeClassName="active">Eco Game zone</NavLink>
                            <NavLink to="/dev_jeux_app" className="dropdown-item" activeClassName="active">Développement de jeux, d’applications, logiciels</NavLink>
                            <NavLink to="/formations" className="dropdown-item" activeClassName="active">Formations</NavLink>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <NavLink to="/abonement" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Abonnements</NavLink>
                        <div className="dropdown-menu m-0">
                            <NavLink to="/id_abonement" className="dropdown-item" activeClassName="active">Souscription aux Labos Virtuels</NavLink>
                            <NavLink to="/id_abonement" className="dropdown-item" activeClassName="active">Réservation d’espace de jeux vidéo</NavLink>
                            <NavLink to="/id_abonement" className="dropdown-item" activeClassName="active">Souscrire à la boite aux lettres</NavLink>
                        </div>
                    </div>
                    <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                </div>
                <a href="" className="btn btn-light rounded-pill py-2 px-4 ms-lg-5">Free Quote</a>
            </div>
        </nav>
    );
}

export default Header;