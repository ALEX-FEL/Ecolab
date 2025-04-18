import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(

            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                
                    <img src="assets/img/Ego.png" alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="/" className="nav-item nav-link active">Accueil</a>
                        <a href="/about" className="nav-item nav-link ">À propos</a>
                        <div className="nav-item dropdown">
                            <a href="/service" className="nav-item nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                            <div className="dropdown-menu m-0">
                                <a href="/ecoVirtual_lab" className="dropdown-item">EcoVirtual Lab (Labos Virtuels)</a>
                                <a href="/visite_virtuelle" className="dropdown-item">Visite Virtuelle 237</a>
                                <a href="/eco_Game_zone" className="dropdown-item">Eco Game zone</a>
                                <a href="/dev_jeux_app" className="dropdown-item">Développement de jeux, d’applications, logiciels</a>
                                <a href="/formations" className="dropdown-item">Formations</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="/abonement" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Abonnements</a>
                            <div className="dropdown-menu m-0">
                                <a href="/id_abonement" className="dropdown-item">Souscription aux Labos Virtuels</a>
                                <a href="/id_abonement" className="dropdown-item">Réservation d’espace de jeux vidéo</a>
                                <a href="/id_abonement" className="dropdown-item">Souscrire à la boite aux lettres</a>
                            </div>
                        </div>
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" className="btn btn-light rounded-pill py-2 px-4 ms-lg-5">Free Quote</a>
                </div>
            </nav>

    )
}

export default Header;