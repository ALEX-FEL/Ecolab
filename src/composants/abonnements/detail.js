import React from "react";
import Header from "../Elements/header";
import Footer from "../Elements/footer";

function Detail_abonmt() {
    return(
        
    <div className="container-xxl bg-white p-0">
        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0">
          <Header/>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Abonnement Details Section --> */}
         <div className="container-xxl py-6">
            <div className="container py-5" >
                <div className="row g-4 align-items-center">
                    <div className="row  align-items-center">
                        <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                            <img className="img-fluid" src="assets/img/ego111.jpeg"/>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <h2 className="text-primary">Nom de l'Abonnement</h2>
                                <p className="text-muted">
                                    Cet abonnement offre des fonctionnalités exclusives pour améliorer votre expérience utilisateur.
                                    Profitez d’un service de qualité supérieure pour un coût compétitif.
                                </p>
                                <h4 className="text-success mb-4">Prix : 10 000 FCFA / mois</h4>
            
                                {/* <!-- Caractéristiques --> */}
                                <ul className="list-group mb-4">
                                    <li className="list-group-item"><strong>Fonctionnalité 1 :</strong> Accès illimité aux contenus premium</li>
                                    <li className="list-group-item"><strong>Fonctionnalité 2 :</strong> Assistance 24/7</li>
                                    <li className="list-group-item"><strong>Fonctionnalité 3 :</strong> Mise à jour gratuite</li>
                                    <li className="list-group-item"><strong>Fonctionnalité 4 :</strong> Accès multi-utilisateur</li>
                                </ul>
            
                                {/* <!-- Bouton --> */}
                                <a href="#" className="btn btn-primary btn-lg">S'abonner</a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

        {/* <!-- Demo Section --> */}
        <section className="bg-light py-5">
            <div className="container text-center">
                <h2 className="text-primary mb-4" data-aos="fade-up">Démonstration de l'Abonnement</h2>
                <p className="text-muted mb-4" data-aos="fade-up">Découvrez les avantages de cet abonnement en visionnant la vidéo ci-dessous.</p>

                {/* <!-- Video or Demo --> */}
                <div className="ratio ratio-16x9" data-aos="zoom-in">
                    <iframe 
                    className="video-medium" 
                    src="https://www.youtube.com/embed/oMw1v2QJI6E" 
                    title="Vidéo YouTube" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
        <Footer/>
    </div>


    )
}

export default Detail_abonmt;