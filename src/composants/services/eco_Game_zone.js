import React from "react";
import Footer from "../Elements/footer";
import Header from "../Elements/header";



function Detail_services(){
    return(
        <div className="container-xxl bg-white p-0">

            <div className="container-xxl position-relative p-0">
                <Header/>
            </div>

            <div className="container-xxl py-6">
                <div className="container">
                    <div className="container mt-5">
                        <div className="row align-items-center">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="assets/img/ego13.jpeg"/>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <h1 className="mb-4">VR</h1>
                                    <p className="mb-4">une entreprise de développement technologique Camerounaise leader des solutions immersives et spécialiste des technologies de la Réalité virtuelle (VR), de la Réalité Augmentée (AR) et de l’Intelligence Artificielle (IA). </p>
                                    {/* <!-- <a lassNacme="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a> --> */}
                                </div>   
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled mt-4">
                                    <li><i className="fas fa-check-circle text-primary me-2"></i> Avantage 1 : Description</li>
                                    <li><i className="fas fa-check-circle text-primary me-2"></i> Avantage 2 : Description</li>
                                    <li><i className="fas fa-check-circle text-primary me-2"></i> Avantage 3 : Description</li>
                                </ul>
                                <a href="#" className="btn btn-primary mt-3">Demander ce service</a>
                            </div>
                        </div>
                    </div>
                
                    {/* <!-- Section Vidéo --> */}
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="text-uppercase font-weight-bold mb-4">Vidéo de Présentation</h2>
                                <div className="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/votre-video-id" title="Vidéo du Service" allowfullscreen></iframe>
                                </div>
                                <p className="mt-3 text-muted">Découvrez comment ce service peut transformer votre expérience grâce à cette vidéo explicative.</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Detail_services;

            
        
        
        
