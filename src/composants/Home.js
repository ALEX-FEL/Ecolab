import react from "react";
import Footer from "./Elements/footer";
import Header from "./Elements/header";
import React, { useEffect, useState } from "react";
import Testimonial from "./Elements/testimonial";


function Home() {

    // Valeurs cibles des compteurs
    const stats = [
        { icon: "bi bi-people-fill", target: 500, label: "Utilisateurs" },
        { icon: "bi bi-person-check-fill", target: 300, label: "Abonnés" },
        { icon: "bi bi-briefcase-fill", target: 50, label: "Projets Réalisés" },
        { icon: "bi bi-instagram", target: 10, label: "Followers" },
    ];

    // États pour stocker les valeurs dynamiques
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const intervals = stats.map((stat, index) => {
        let count = 0;
        const increment = Math.ceil(stat.target / 50); // Vitesse du décompte
        return setInterval(() => {
            count += increment;
            setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = count >= stat.target ? stat.target : count;
            return newCounts;
            });

            if (count >= stat.target) {
            clearInterval(intervals[index]);
            }
        }, 50); // Vitesse d'animation
        });

        return () => intervals.forEach(clearInterval); // Nettoyage des timers
    }, []);



    return(
    <div className="container-xxl bg-white p-0">
        {/* <!-- Spinner tart -->
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '3rem; height: 3rem;'}} role="status">
                <span className="sr-only">Ecolab Loading...</span>
            </div>
        </div> */}
        {/*<!-- Spinner End -->*/}


        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0">
            <Header/>

            <div id="ecoCarousel" className="carousel slide container-xxl bg-primary hero-header" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* <!-- Slide 1 --> */}
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 text-center text-lg-start">
                                    <h1 className="mb-4 animated zoomIn">Nous digitalisons tous vos services</h1>
                                    <a href="#" className="btn btn-light rounded-pill py-3 px-5 mt-2">En savoir plus</a>
                                </div>
                                <div className="col-lg-6 text-center text-lg-start">
                                    <img className="img-fluid animated zoomIn" src="assets/img/1716445733964.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Slide 2 --> */}
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 text-center text-lg-start">
                                    <h2 className="mb-4 animated zoomIn">Avec EcoVirtual Lab, les performances académiques des élèves croissent certainement</h2>
                                    <a href="#" className="btn btn-light rounded-pill py-3 px-5 mt-2">Découvrir EcoVirtual Lab</a>
                                </div>
                                <div className="col-lg-6 text-center text-lg-start">
                                    <img className="img-fluid animated zoomIn" src="assets/img/concept-technologie-metaverse-gens-plats-lunettes-realite-virtuelle-robot-intelligence-artificielle-au-bureau_88138-1707.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Slide 3 --> */}
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 text-center text-lg-start">
                                    <h2 className="mb-4 animated zoomIn">Dès aujourd’hui, façonnons les génies de demain grâce à nos laboratoires virtuels</h2>
                                    <a href="#" className="btn btn-light rounded-pill py-3 px-5 mt-2">Explorer les laboratoires</a>
                                </div>
                                <div className="col-lg-6 text-center text-lg-start">
                                    <img className="img-fluid animated zoomIn" src="assets/img/eco1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Slide 4 --> */}
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 text-center text-lg-start">
                                    <h2 className="mb-4 animated zoomIn">Boostez la vente de vos produits et services grâce aux visites virtuelles de vos boutiques, hôtels et appartements</h2>
                                    <a href="#" className="btn btn-light rounded-pill py-3 px-5 mt-2">Commencer maintenant</a>
                                </div>
                                <div className="col-lg-6 text-center text-lg-start">
                                    <img className="img-fluid animated zoomIn" src="assets/img/visite-virtuelle-a-partir-dun-plan-1-1024x576.webp" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Carousel Controls --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#ecoCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Précédent</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#ecoCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Suivant</span>
                </button>
            </div>


            
        </div>
        {/* <!-- Navbar & Hero End --> */}



        {/* <!-- Nos services Start --> */}
        <div className="container j-5" style={{marginTop: '-10%'}}>
            <div className="container-fluid pt-5 mb-3">
                <div className="container">
                    <div className="section-title">
                        <h4 className="m-0 text-uppercase font-weight-bold">
                            <a href="/service" className="serv">Nos services</a>
                        </h4>   
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
                                <a className="btn btn-primary mt-2 btns" href="/id_service">En savoir plus</a>
                            </div>
                        </div>
                        {/* <!-- Service 3 --> */}
                        <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                            <img className="img-fluid h-100" src="assets/img/ego12.jpeg" style={{objectFit: 'cover'}}/>
                            <div className="overlay d-flex flex-column justify-content-center  p-3">
                                <h5 className="text-white font-weight-bold">Eco Game Zone</h5>
                                <p className="text-white">Venez vous détendre dans nos salles de jeux vidéo modernes et confortables.</p>
                                <a className="btn btn-primary mt-2 btns" href="/id_service">En savoir plus</a>
                            </div>
                        </div>
                        {/* <!-- Service 4 --> */}
                        <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                            <img className="img-fluid h-100" src="assets/img/ego14.jpeg" style={{objectFit: 'cover'}}/>
                            <div className="overlay d-flex flex-column justify-content-center  p-3">
                                <h5 className="text-white font-weight-bold">Développement de jeux, d’applications et de logiciels</h5>
                                <p className="text-white">Nous concevons des sites, applications et logiciels personnalisés pour répondre à vos besoins.</p>
                                <a className="btn btn-primary mt-2 btns" href="/id_service">En savoir plus</a>
                            </div>
                        </div>
                        {/* <!-- Service 5 --> */}
                        <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                            <img className="img-fluid h-100" src="assets/img/ego11.jpeg" style={{objectFit: 'cover'}}/>
                            <div className="overlay d-flex flex-column justify-content-center  p-3">
                                <h5 className="text-white font-weight-bold">Formations</h5>
                                <p className="text-white">Apprenez à développer des applications, jeux vidéo et logiciels VR/AR avec nos formations pratiques.</p>
                                <a className="btn btn-primary mt-2 btns" href="/id_service">En savoir plus</a>
                            </div>
                        </div>
                        {/* <!-- Add more services as needed --> */}
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- services End -->  */}


        {/* <!-- Nos realisations start -->  */}
        <div className="container mt-5">
            <h2 className="text-center mb-4">Nos Réalisations</h2>
            {/* <!-- Début du carousel --> */}
            <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                    {/* <!-- Slide 1 (Vidéo YouTube) --> */}
                    <div className="carousel-item active">
                        <iframe 
                            className="video-medium" 
                            src="https://www.youtube.com/embed/oMw1v2QJI6E" 
                            title="Vidéo YouTube" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <div className="carousel-caption">
                            <h5 className="pro">les labos Virtuels une réalisation au Cameroun</h5>
                            {/* <p>Création d'une vidéo publicitaire pour un client.</p> */}
                        </div>
                    </div>
            
                    {/* <!-- Slide 2 (Vidéo YouTube) --> */}
                    <div className="carousel-item">
                        <iframe 
                            className="video-medium" 
                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                            title="Vidéo YouTube" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <div className="carousel-caption">
                            <h5 className="pro">Formation/Emploi en Réalite Virtuelle</h5>
                            {/* <p>Création d'une vidéo publicitaire pour un client.</p> */}
                        </div>
                    </div>
            
                    {/* <!-- Slide 3 (Vidéo YouTube) --> */}
                    <div className="carousel-item">
                        <iframe 
                            className="video-medium" 
                            src="https://www.youtube.com/embed/iAKv855rbZk" 
                            title="Vidéo YouTube" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <div className="carousel-caption">
                            <h5 className="pro">EcoVirtual Lab : Mesure de l'enthalpie dans un labo virtuel</h5>
                            {/* <p>Création d'une vidéo publicitaire pour un client.</p> */}
                        </div>
                    </div>
                </div>
            
                {/* <!-- Contrôles précédent/suivant --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Précédent</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Suivant</span>
                </button>
            </div>
        </div>    
        {/* <!-- Nos realisations End -->  */}

        <div className="container text-center">
            <div className="stats-container">
                {stats.map((stat, index) => (
                <div className="stats-card" key={index}>
                    <div className="icon">
                    <i className={stat.icon}></i>
                    </div>
                    <h5 className="counter">{counts[index]}</h5>
                    <p>{stat.label}</p>
                </div>
                ))}
            </div>
        </div>




        {/* <!-- Testimonial Start --> */}
        <Testimonial/>
        {/* <!-- Testimonial End --> */}





        {/* <!-- Contact Start --> */}
        <div className="container-xxl py-6">
                    <div className="container">
                        <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Contact Us</div>
                            <h2 className="mb-5">Contactez Nous</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
                                {/* <!-- Contour ajouté au formulaire --> */}
                                <form style={{border: '2px solid #002b5c, borderRadius: 10px', padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'}}>
                                    <div className="row g-3">
                                        {/* <!-- Nom --> */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                                <label for="name"> Nom et Prenom</label>
                                            </div>
                                        </div>
                                        {/* <!-- Email --> */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                                <label for="email"> Email</label>
                                            </div>
                                        </div>
                                        {/* <!-- Services proposés --> */}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <select className="form-select" id="service" required>
                                                    <option value="" disabled selected>Choisissez une solution</option>
                                                    <option value="service1">Développement Web</option>
                                                    <option value="service2">Visite virtuel</option>
                                                    <option value="service3">Réalité virtuel IT</option>
                                                    <option value="service4">Développement web et Mobile</option>
                                                    <option value="service5">Autre</option>
                                                </select>
                                                <label for="service">Services Proposés</label>
                                            </div>
                                        </div>
                                        {/* <!-- Sujet --> */}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                                <label for="subject">Sujet</label>
                                            </div>
                                        </div>
                                        {/* <!-- Message --> */}
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Laissez votre message ici" id="message" style={{height: '150px'}}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        {/* <!-- Bouton de soumission --> */}
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Envoyer le Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </div>          
        {/* <!-- Contact End --> */}






        {/* <!-- Team Start --> */}
        <div className="container-xxl py-6">
            <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'600px'}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Nos Partenaires</div>
                    <h2 className="mb-5">Nos Partenaires</h2>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-1.jpg"/>
                        <div className="ps-3">
                            <h6 className="mb-1">Marie Dupont</h6>
                            <small>Développeuse Web</small>
                        </div>
                    </div>
                    <p>Un service exceptionnel, toujours à l'écoute de nos besoins. Je recommande vivement !</p>
                    </div>
                    <div className="testimonial-item rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-2.jpg"/>
                            <div className="ps-3">
                                <h6 className="mb-1">Jean Martin</h6>
                                <small>Consultant Marketing</small>
                            </div>
                        </div>
                        <p>Une collaboration fructueuse, avec des résultats au-delà de nos attentes.</p>
                    </div>
                    <div className="testimonial-item rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-3.jpg"/>
                            <div className="ps-3">
                                <h6 className="mb-1">Sophie Leroy</h6>
                                <small>Designer Graphique</small>
                            </div>
                        </div>
                        <p>Des designs innovants et un service client exceptionnel. Un vrai plaisir de travailler ensemble !</p>
                    </div>
                    <div className="testimonial-item rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-4.jpg"/>
                            <div className="ps-3">
                                <h6 className="mb-1">Lucie Bernard</h6>
                                <small>Chef de Projet</small>
                            </div>
                        </div>
                        <p>Une équipe dynamique et réactive, toujours prête à relever de nouveaux défis.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}

        <Footer/>
    </div>
    )
}
export default Home;