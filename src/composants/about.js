import React from "react"
import Header from "./Elements/header";
import Footer from "./Elements/footer";


function About() {
    return(
    <div className="container-xxl bg-white p-0">

        <Header/>
        {/* <!-- About Start --> */}
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-4">À propos de nous</h1>
                        <p className="mb-4">EcoLab High-tech est une entreprise de développement technologique Camerounaise leader des solutions immersives et spécialiste des technologies de la Réalité virtuelle (VR), de la Réalité Augmentée (AR) et de l’Intelligence Artificielle (IA). </p>
                        {/* <!-- <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a> --> */}
                    </div>
                    <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                        <img className="img-fluid" src="assets/img/eego.jpeg"/>
                    </div>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                        <img className="img-fluid" src="assets/img/ego111.jpeg"/>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="mb-4">Nous digitalisons les modules des travaux pratiques des établissements scolaires en mettant sur pied des laboratoires virtuels immersifs, interactifs et réalistes.  Notre mission est d’améliorer les systèmes éducatifs Africains. </p>
                        {/* <!-- <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a> --> */}
                    </div>
                </div>
                <div className="row g-5 align-items-center">
                    
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-4">Notre Équipe</h1>
                        <p className="mb-4">Constituée d’une équipe pluridisciplinaire d’ingénieurs, de scientifiques, d’enseignants et de développeurs, nous concevons pour les entreprises immobilières (hôtels, agences immobilières, sites touristiques etc.) et les boutiques des solutions immersives de visite virtuelle.  Permettant aux prospects de visiter virtuellement leurs locaux et éventuellement d’effectuer un achat de service ou de produit à distance.  </p>
                        {/* <!-- <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a> --> */}
                    </div>
                    <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                        <img className="img-fluid" src="assets/img/egoo11.jpeg"/>
                    </div>
                </div>
                <div className="container">
                    <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h2 className="mb-5">Notre Vision et Mission</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">Notre vision est de devenir le leader de l'innovation technologique en Afrique, en transformant les systèmes éducatifs et en créant des opportunités d'emploi décent pour les jeunes. Notre mission consiste à améliorer l'éducation en Afrique grâce à des solutions immersives et interactives, tout en soutenant les entreprises à travers des technologies de pointe qui facilitent l'accès et l'expérience client.</p>
                        </div>
                    </div>
                </div>
                    
           


                {/* <!-- Nos services Start --> */}
                <div className="container j-5" style={{marginTop: '-10%'}}>
                    <div className="container-fluid pt-5 mb-3">
                        <div className="container">
                            <div className="section-title">
                                <h4 className="m-0 text-uppercase font-weight-bold"><a href="/service" className="serv">Nos services</a></h4>
                            </div>
                            <div className="owl-carousel news-carousel carousel-item-4 position-relative">
                                {/* <!-- Service 1 --> */}
                                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                    <img className="img-fluid h-100" src="assets/img/ego13.jpeg" style={{objectFit: 'cover'}}/>
                                    <div className="overlay d-flex flex-column justify-content-center  p-3">
                                        <h5 className="text-white font-weight-bold">Visite Virtuelle 237</h5>
                                        <p className="text-white">Explorez des boutiques en ligne via des visites virtuelles et commandez vos produits ou services facilement.</p>
                                        <a className="btn btn-primary mt-2 btns" href="/visite_virtuelle">En savoir plus</a>
                                    </div>
                                </div>
                                {/* <!-- Service 2 --> */}
                                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                    <img className="img-fluid h-100" src="assets/img/ego14.jpeg" style={{objectFit: 'cover'}}/>
                                    <div className="overlay d-flex flex-column justify-content-center  p-3">
                                        <h5 className="text-white font-weight-bold">EcoVirtual Lab</h5>
                                        <p className="text-white">Nos laboratoires virtuels permettent aux élèves de réaliser des travaux pratiques en sciences dans un environnement sûr et immersif.</p>
                                        <a className="btn btn-primary mt-2 btns" href="#">En savoir plus</a>
                                    </div>
                                </div>
                                {/* <!-- Service 3 --> */}
                                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                    <img className="img-fluid h-100" src="assets/img/ego12.jpeg" style={{objectFit: 'cover'}}/>
                                    <div className="overlay d-flex flex-column justify-content-center  p-3">
                                        <h5 className="text-white font-weight-bold">Eco Game Zone</h5>
                                        <p className="text-white">Venez vous détendre dans nos salles de jeux vidéo modernes et confortables.</p>
                                        <a className="btn btn-primary mt-2 btns" href="#">En savoir plus</a>
                                    </div>
                                </div>
                                {/* <!-- Service 4 --> */}
                                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                    <img className="img-fluid h-100" src="assets/img/ego14.jpeg" style={{objectFit: 'cover'}}/>
                                    <div className="overlay d-flex flex-column justify-content-center  p-3">
                                        <h5 className="text-white font-weight-bold">Développement de jeux, d’applications et de logiciels</h5>
                                        <p className="text-white">Nous concevons des sites, applications et logiciels personnalisés pour répondre à vos besoins.</p>
                                        <a className="btn btn-primary mt-2 btns" href="#">En savoir plus</a>
                                    </div>
                                </div>
                                {/* <!-- Service 5 --> */}
                                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                    <img className="img-fluid h-100" src="assets/img/ego11.jpeg" style={{objectFit: 'cover'}}/>
                                    <div className="overlay d-flex flex-column justify-content-center  p-3">
                                        <h5 className="text-white font-weight-bold">Formations</h5>
                                        <p className="text-white">Apprenez à développer des applications, jeux vidéo et logiciels VR/AR avec nos formations pratiques.</p>
                                        <a className="btn btn-primary mt-2 btns" href="#">En savoir plus</a>
                                    </div>
                                </div>
                                {/* <!-- Add more services as needed --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- services End -->  */}

                {/* <!-- Nos produits Start --> */}
                <div className="container j-5" style={{marginTop: '-10%'}}>
                    <div className="container-fluid pt-5 mb-3">
                        <div className="container">
                            <div className="section-title">
                                <h4 className="m-0 text-uppercase font-weight-bold">Nos produits</h4>
                            </div>
                            <div className="owl-carousel news-carousel carousel-item-4 position-relative">
                                {/* <!-- produits 1 --> */}
                                <a href="lien_vers_produit_2">
                                    <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                        <img className="img-fluid h-100" src="assets/img/produits/ec.jpeg" style={{objectFit: 'cover'}}/>
                                        <div className="overlay d-flex flex-column justify-content-center  p-3">
                                            <h5 className="text-white font-weight-bold">casque</h5>
                                            <p className="text-white">Explorez des boutiques en ligne via des visites virtuelles et commandez vos produits ou produits facilement.</p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- produits 2 --> */}
                                <a href="lien_vers_produit_2">
                                    <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                        <img className="img-fluid h-100" src="assets/img/produits/ee.jpeg" style={{objectFit: 'cover'}}/>
                                        <div className="overlay d-flex flex-column justify-content-center  p-3">
                                            <h5 className="text-white font-weight-bold">casque</h5>
                                            <p className="text-white">Nos laboratoires virtuels permettent aux élèves de réaliser des travaux pratiques en sciences dans un environnement sûr et immersif.</p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- produits 3 --> */}
                                <a href="lien_vers_produit_2">
                                    <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                        <img className="img-fluid h-100" src="assets/img/produits/err.jpeg" style={{objectFit: 'cover'}}/>
                                        <div className="overlay d-flex flex-column justify-content-center  p-3">
                                            <h5 className="text-white font-weight-bold">casque</h5>
                                            <p className="text-white">Venez vous détendre dans nos salles de jeux vidéo modernes et confortables.</p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- produits 4 --> */}
                                <a href="lien_vers_produit_2">
                                    <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                        <img className="img-fluid h-100" src="assets/img/produits/ez.jpeg" style={{objectFit: 'cover'}}/>
                                        <div className="overlay d-flex flex-column justify-content-center  p-3">
                                            <h5 className="text-white font-weight-bold">casque</h5>
                                            <p className="text-white">Nous concevons des sites, applications et logiciels personnalisés pour répondre à vos besoins.</p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- produits 5 --> */}
                                <a href="lien_vers_produit_2">
                                    <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                                        <img className="img-fluid h-100" src="assets/img/produits/ez.jpeg" style={{objectFit: 'cover'}}/>
                                        <div className="overlay d-flex flex-column justify-content-center  p-3">
                                            <h5 className="text-white font-weight-bold">casque</h5>
                                            <p className="text-white">Nous concevons des sites, applications et logiciels personnalisés pour répondre à vos besoins.</p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- Add more produits as needed --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- produits End -->  */}
            </div>
        </div>
        <Footer/>
    </div>

    )
}

export default About;