import React from "react";
import Footer from "./Elements/footer";
import Header from "./Elements/header";



function Abonement(){
    return(
        <div className="container-xxl bg-white p-0">


        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0">
            <Header/>
        </div>
        {/* <!-- Navbar & Hero End --> */}

           {/* <!-- Navbar & Hero Start -->div className="container-xxl py-6">
            <div className="container-xxl bg-white p-0">
                {/* <!-- Header --> */}
        <div className="container-xxl py-6">
            <div className="container-xxl bg-white p-0">
                {/* <!-- Header --> */}
                <header className="bg-primary text-white text-center py-5">
                    <h1 className="display-4">Nos Abonnements</h1>
                    <p className="lead">Choisissez le plan qui correspond à vos besoins</p>
                </header>
        
                {/* <!-- Abonnements Section --> */}
                <div className="container py-5">
                    <div className="row">
                        {/* <!-- Abonnement 1 --> */}
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="card shadow-sm mb-4">
                                <img src="assets/img/eco1.png" className="card-img-top" alt="Image Abonnement Basique"/>
                                <div className="card-body text-center">
                                    <h3 className="card-title text-primary">Abonnement Basique</h3>
                                    <p className="card-text">Accès aux fonctionnalités de base, idéal pour les débutants.</p>
                                    <h4 className="text-success">5 000 FCFA / mois</h4>
                                    <button className="btn btn-outline-primary">En savoir plus</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Abonnement 2 --> */}
                        <div className="col-md-4" data-aos="fade-up" dataAos="fade-right" >
                            <div className="card shadow-sm mb-4">
                                <img src="assets/img/eco1.png" className="card-img-top" alt="Image Abonnement Standard"/>
                                <div className="card-body text-center">
                                    <h3 className="card-title text-primary">Abonnement Standard</h3>
                                    <p className="card-text">Fonctionnalités supplémentaires pour une meilleure expérience.</p>
                                    <h4 className="text-success">10 000 FCFA / mois</h4>
                                    <button className="btn btn-outline-primary">En savoir plus</button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Abonnement 3 --> */}
                        <div className="col-md-4">
                            <div className="card shadow-sm mb-4">
                                <img src="assets/img/eco1.png" className="card-img-top" alt="Image Abonnement Premium"/>
                                <div className="card-body text-center">
                                    <h3 className="card-title text-primary">Abonnement Premium</h3>
                                    <p className="card-text">Accès illimité à toutes les fonctionnalités et support prioritaire.</p>
                                    <h4 className="text-success">20 000 FCFA / mois</h4>
                                    <button className="btn btn-outline-primary">En savoir plus</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    



        <Footer/>
    </div>
    )
}

export default Abonement;