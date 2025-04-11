import React from "react";
import Footer from "../Elements/footer";
import Header from "../Elements/header";
import Testimonial from "../Elements/testimonial";



function EcoVirtual_Lab(){
    return(
        <div className="container-xxl bg-white p-0">

            <div className="container-xxl position-relative p-0">
                <Header/>
            </div>

            

            <div className="bannier" style={{ paddingTop: '6rem' }}>
                <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
                    
                    {/* Indicateurs animés */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    {/* Contenu du carrousel */}
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <img className="carousel-img" src="assets/img/Realite-Virtuelle.jpg" alt="Slide 1" style={{ height: '400px' }}/>
                            <div className="carousel-caption">
                                <h5 className="pro">Vivez une expéirence originale en réalité vietuelle</h5>
                                <button className="btn btn-primary mt-2">Réserver</button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="carousel-img" src="assets/img/Our Laboratory.png" alt="Slide 2" style={{ height: '400px' }}/>
                            <div className="carousel-caption">
                                <h5 className="pro">Vivez une expéirence originale en réalité vietuelle</h5>
                                <button className="btn btn-primary mt-2">Réserver</button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="carousel-img" src="assets/img/Our Laboratory1.png" alt="Slide 3" style={{ height: '400px' }}/>
                            <div className="carousel-caption">
                                <h5 className="pro">Vivez une expéirence originale en réalité vietuelle</h5>
                                <button className="btn btn-primary mt-2">Réserver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-6" style={{ paddingTop: '3rem' }}>
                <div className="container">
                    <div className="position-relative overflow-hidden">

                        <div className="row g-5 align-items-center text-center">
                            <div>
                                <p className="fw-500 pano-text" style={{ fontSize: '39px'}} >Créez, partagez, et découvrez</p>
                                <a href="#" className="btn btn-light rounded-pill py-3 px-5 mt-2 dancing-button">
                                    <b style={{ color: 'inherit', fontSize: '30px' }}>Commencez</b> - C'est gratuit!
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row g-5 g_5 align-items-center ">
                        <div class="w-100 concept row section-area-- dop" >
                            <div className="col-lg-6 wow zoomIn " data-wow-delay="0.1s">
                        <iframe 
                                                                            className="video-medium" 
                                                                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                            title="Vidéo YouTube" 
                                                                            frameborder="0" 
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                            allowfullscreen>
                          </iframe>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h2 class="concept-title mb-15 home-title home-section-title">L'outil  N° 1 Pour Les Visites Virtuelles</h2>
                                <div class="mt-2 fz-18 fw-500 concept-text">
                                    <p>
                                        </p><p><strong>Créez</strong>, <strong>éditez</strong> et <strong>partagez</strong> vos <strong>visites virtuelles</strong>.</p>
                                        <p>Ecolab est une plateforme et un outil en ligne pour créer et partager des visites virtuelles. C'est le premier réseau social de visites virtuelles auquel font confiance plus de 50'000 utilisateurs innovants. Les agents immobiliers, les photographes, les dronistes, les hôteliers, les entreprises et les créatifs adorent utiliser Ecolab, car c'est facile et ne nécessite aucune compétence particulière. Accessible à la fois depuis votre ordinateur et votre smartphone, les visites immersives créées sur Ecolab vous permettront de capter votre audience et de gagner en visibilité.</p>
                                    <p>
                                        
                                    </p>
                                                                    <a href="https://www.Ecolab.com/fr#" data-toggle="modal" data-target="#signupModal">
                                        <button class="btn btn-outline-primary btn-section">
                                        Allons-y - C'est gratuit!
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row g-5 g_5 align-items-center">
                        
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h2 class="concept-title mb-15 home-title home-section-title">Laboratoire scientifique : Chimie 
                        </h2>
                            <div class="mt-2 fz-18 fw-500 concept-text">
                                <p>
                                    </p><p><strong>Créez</strong>, <strong>éditez</strong> et <strong>partagez</strong> vos <strong>Laboratoires scientifiques</strong>.</p>
                                    <p>Découvrez nos laboratoires scientifiques immersifs. Un environnement d'étude et d'apprentissage en réalité virtuelle. Implémenter principalement pour les établissements scolaires, les écoles de formation, les universités et même les autodidactes. Dans cet environnement, vous avez la possibilité de manipuler les matériaux de laboratoire, faire des expériences et suivre leurs résultats, travailler en groupe avec vos commandes de classe, collègues, amis etc ..... Et Il vous offre la possibilité de faire bien plus encore .........</p>
                                <p>
                                    
                                </p>
                                                                  <a href="https://www.Ecolab.com/fr#" data-toggle="modal" data-target="#signupModal">
                                    <button class="btn btn-outline-primary btn-section">
                                      Allons-y - C'est gratuit!
                                    </button>
                                  </a>
                            </div>
                        </div>
                        <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                        <iframe 
                                                                            className="video-medium" 
                                                                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                            title="Vidéo YouTube" 
                                                                            frameborder="0" 
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                            allowfullscreen>
                          </iframe>
                        </div>
                    </div>

                    <div className="row g-5 g_5 align-items-center">
                        <div class="w-100 concept row section-area-- dop" >
                            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                            <iframe 
                                                                                className="video-medium" 
                                                                                src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                                title="Vidéo YouTube" 
                                                                                frameborder="0" 
                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                                allowfullscreen>
                            </iframe>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h2 class="concept-title mb-15 home-title home-section-title">Découvrez nos différents laboratoires scientifiques 
                            </h2>
                                <div class="mt-2 fz-18 fw-500 concept-text">
                                    <p>
                                        </p><p>Explorez nos <strong>laboratoires</strong> en pleine immersion et visitez une catégorie spécifique pour vos travaux.</p>
                                        <p>Regardez à quoi ressemble les laboratoires de chimie, biologie, chirurgie, linguistique. Vous pouvez également prendre rendez-vous dans nos locaux afin de découvrir et  faire des séances plus pratiques. 
                                        Contactez nous également pour l'implantation particulier de vos projets en réalité virtuelle 😊😊</p>
                                    <p>
                                        
                                    </p>
                                                                    <a href="https://www.Ecolab.com/fr#" data-toggle="modal" data-target="#signupModal">
                                        <button class="btn btn-outline-primary btn-section">
                                        Allons-y - C'est gratuit!
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 g_5 align-items-center">
                        
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h2 class="concept-title mb-15 home-title home-section-title">Laboratoire chirurgical </h2>
                            <div class="mt-2 fz-18 fw-500 concept-text">
                                <p>
                                    </p><p>Des <strong>laboratoires de médecine </strong>hyper réaliste permettant de faire des tests pratiques, apprendre, acquérir des compétences transférables qui vous préparent à mieux travailler en salle d'opération et à développer vos compétences pour réaliser des procédures simples ou complexes.</p>
                                    <p>Venez et faites des <strong>simulations chirurgicale</strong> très réalistes qui vous permettront de réussir plus efficacement dans vos domaines d'activités</p>
                                <p>
                                    
                                </p>
                                                                  <a href="https://www.Ecolab.com/fr#" data-toggle="modal" data-target="#signupModal">
                                    <button class="btn btn-outline-primary btn-section">
                                      Allons-y - C'est gratuit!
                                    </button>
                                  </a>
                            </div>
                        </div>
                        <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                        <iframe 
                                                                            className="video-medium" 
                                                                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                            title="Vidéo YouTube" 
                                                                            frameborder="0" 
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                            allowfullscreen>
                          </iframe>
                        </div>
                    </div>

                
                   

                    <div className="row g-5 g_5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30  dop">
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                 <div class="col-12 col-md-12 col-lg-12">
                                                <h2 class="concept-title mb-15 home-section-title text-center home-title"> Découvrez Les Visites Virtuelles </h2>
                                                <div class="mt-2 fz-18 fw-500 concept-text">
                                                    <div class="text-center">
                                                        <p>Explorez le monde le monde en pleine immersion et cherchez une catégorie spécifique de visites virtuelles.<br />
                    Achetez ou louez votre prochaine propriété, bateau, voiture, avion et location saisonnière. Découvrez les musées, les vues aériennes, l&#39;art, les créations 3D, les chantiers en construction et les salons. Trouvez tous les commerces près de chez vous: Boutiques, écoles, showrooms, bureaux et lieux de détente.</p>
                                                    </div>
                    
                                                    <div class="container my-5 text-center">
                                                        
                                                        <div class="owl-carousel image-carousel">
                                                            <div class="item">
                                                                <a href="">
                                                                    <div class="image-container ">
                                                                        <iframe 
                                                                            className="video-medium" 
                                                                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                            title="Vidéo YouTube" 
                                                                            frameborder="0" 
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                            allowfullscreen>
                                                                        </iframe>
                                                                        <div class="overlay-text">Visite Virtuelle : Salle de jeux vidéos</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="">
                                                                    <div class="image-container wow zoomIn">
                                                                        <iframe 
                                                                            className="video-medium" 
                                                                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                            title="Vidéo YouTube" 
                                                                            frameborder="0" 
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                            allowfullscreen>
                                                                        </iframe>
                                                                        <div class="overlay-text">Visite Virtuelle : Musée National </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="">
                                                                    <div class="image-container">
                                                                        <iframe 
                                                                            className="video-medium" 
                                                                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                            title="Vidéo YouTube" 
                                                                            frameborder="0" 
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                            allowfullscreen>
                                                                        </iframe>
                                                                        <div class="overlay-text"> Visite Virtuelle : Chambre d'hôtel</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="">
                                                                    <div class="image-container">
                                                                        <iframe 
                                                                            className="video-medium" 
                                                                            src="https://www.youtube.com/embed/DVTuJAHfLBc" 
                                                                            title="Vidéo YouTube" 
                                                                            frameborder="0" 
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                            allowfullscreen>
                                                                        </iframe>
                                                                        <div class="overlay-text">Visite Virtuelle : Chantier en construction</div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="custom-nav">
                                                            <button id="prev-slide" class="btn btn-dark me-2">
                                                                <i class="bi bi-chevron-left "></i>
                                                            </button>
                                                            <button id="next-slide" class="btn btn-dark">
                                                                <i class="bi bi-chevron-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                    
                    
                                                                                    <div class="text-center">
                                                        <a href="#?category=all" >
                                                        <button class="btn btn-outline-primary btn-section">
                                                            Explorez &amp; recherchez
                                                        </button>
                                                        </a>
                                                     </div>
                                                                                </div>
                    
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 g_5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30 dop" >
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                            <div class="col-12 col-md-12 col-lg-12" id="s-content">
                                            <h2 class="concept-title mb-15 home-section-title text-center home-title"> Pourquoi les laboratoires en réalité virtuelle ? </h2>
                                                                    <div class="mt-2 fz-18 fw-500 concept-text">
                    
                                                    <p>Au Cameroun en particulier et en Afrique en général, plus de 70% des établissements scolaires ne possèdent pas de laboratoire scientifique permettant aux élèves comme aux étudiants d’appliquer de manière pratique les cours théoriques qu’ils auraient vu en classe. Cela est un véritable déficit intellectuel  pour nos enfants dans la mesure où ces derniers ne pourront pas répondre de manière efficace lorsqu’ils seront dans le monde professionnel.  Bien plus, la plupart d’établissement, école de formation ou Université qui possèdent déjà des laboratoires physiques rencontre également un problème de matériel.  Très souvent, le matériel est défectueux et pas mis à jour. Par conséquent, la formation est biaisé et non consistante.
                                                    C’est notamment à cause de tous ces problèmes que les laboratoires virtuels interviennent comme une main de secours afin de participer activement sur le plan pratique à la formation des enfants et autres. Ces laboratoires auront la capacité de rassembler toute une salle de classe dans une même enceinte afin de leur permettre d’effectuer à l‘aide du matériel  des expériences purement pratique.</p>
                    
                                                                            <div class="text-center">
                                                    <a href="fr.html#"  data-toggle="modal" data-target="#signupModal"  >
                                                    <button class="btn btn-outline-primary btn-section">
                                                        Créez une visite virtuelle - C&#039;est gratuit!
                                                    </button>
                                                    </a>
                                                </div>
                                                                        </div>
                                        </div>
                    
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-5 g_5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30" style={{background: 'white'}}>
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                                <div class="col-12 col-md-6 col-lg-5 g_5 text-center my-auto mx-auto ">
                                                <div class="col-12">
                                                    <img class="lazyload br-10 w-100" alt="Qu’est-ce Qu’une Visite Virtuelle ?" src="assets/img/imgeco/5274708.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-7 " id="s-content" >
                                                <h2 class="concept-title mb-15 home-title home-section-title" >Qu’est-ce Qu’une Visite Virtuelle ?</h2>
                                                <div class="mt-2 fz-18 fw-500 concept-text">
                                                    <p>
                                                        <p>Les visites virtuelles, &eacute;galement appel&eacute;es visites immersives, sont un ensemble de photos reli&eacute;es entre elles afin que le&nbsp;visiteur puisse profiter pleinement de l&#39;exp&eacute;rience &laquo; Immersive &raquo;. Beaucoup de personnes consid&egrave;rent les visites virtuelles comme quelque chose de long et co&ucirc;teux &agrave; cr&eacute;er, Ecolab prouve le contraire. Notre objectif est de rendre les visites virtuelles accessibles &agrave; tous et dans le monde entier. Toutes les visites Ecolab peuvent &ecirc;tre visualis&eacute;es sur tous types d&rsquo;appareils en un simple clic: MAC, PC, Smartphone (iOs et Android), Tablette et masque de r&eacute;alit&eacute; virtuelle (VR).</p>
                                                    </p>
                                                                                    <a href="fr.html#"  data-toggle="modal" data-target="#signupModal"  >
                                                        <button class="btn btn-outline-primary btn-section">
                                                        Commencer maintenant - C&#039;est gratuit!
                                                        </button>
                                                    </a>
                                                                                </div>
                                            </div>
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-5 g_5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30 dop" >
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                        
                                            <div class="col-12 col-md-12 col-lg-12" id="s-content">
                                                <h2 class="concept-title mb-15 home-section-title text-center home-title"> Qui A Besoin De Visites Virtuelles ? </h2>
                    
                    
                                                <div class="row main">
                    
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/hero.png" class="card-img-top cursor-pointer lazyload" alt="Professionnels de l&#039;immobilier"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Professionnels de l&#039;immobilier</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Des nos jours, la visite virtuelle est indispensable pour louer ou vendre un bien. Cela vous fera gagner du temps, de la s&eacute;curit&eacute; et de l&#39;argent. Bien entendu, la visite virtuelle augemente le nombre d&#39;acheteurs potentiels. Tr&egrave;s pris&eacute; des agents immobilier et mandataires.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/imgeco/blockimage_1610794720-265510739.png" class="card-img-top cursor-pointer lazyload" alt="Photographes"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Photographes</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Cr&eacute;ez rapidement et facilement des visites virtuelles. Faites-vous recruter en ligne et&nbsp;gagnez en visibilit&eacute;. Montrez au monde votre talent!</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/imgeco/illustration-concept-architecte-construction_114360-9700.jpg" class="card-img-top cursor-pointer lazyload" alt="Entreprises de construction"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Entreprises de construction</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Cr&eacute;ez des visites virtuelles &agrave; toutes les &eacute;tapes de l&#39;avancement de vos travaux : Avant, Pendant, Apr&egrave;s. Enrichissez votre portofolio et attirez de nouveaux clients et investisseurs. Montrez votre travail incroyable et faites la diff&eacute;rence avec vos concurrents.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/imgeco/personnes-agees-dessinees-plat-aide-illustration-technologie_23-2148829463.jpg" class="card-img-top cursor-pointer lazyload" alt="Dronistes"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Dronistes</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Enfin un endroit pour montrer vos superbes vues a&eacute;riennes dans des visites virtuelles. Et pourquoi ne pas vendre vos services en ligne ?</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/imgeco/blockimage_1610794720-1809967517.png" class="card-img-top cursor-pointer lazyload" alt="Architectes et designers 3D"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Architectes et designers 3D</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Vous r&eacute;alisez des vues 3D, du Home Staging 3D, ou des plans de sol ? Montrez&nbsp;votre travail sur Ecolab et faites-vous mandater en&nbsp;ligne pour votre talent.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/imgeco/occupe-illustration-professionnelle_74855-2355.jpg" class="card-img-top cursor-pointer lazyload" alt="Entrepreneurs, écoles et entreprises"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Entrepreneurs, écoles et entreprises</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">De nos jours et plus que jamais, toutes les entreprises ont besoin&nbsp;d&#39;&ecirc;tre en ligne. N&#39;attendez plus et cr&eacute;ez des visites virtuelles&nbsp;pour de nombreux domaines tels que:&nbsp;Les boutiques, &eacute;coles, bars, restaurants, etc.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/imgeco/enseignant-travailleur-cote-du-globe-goupille-localisation-homme-gai-choisissant-illustration-vectorielle-plane-destination-concept-education-geographie-voyage-vacances-pour-banniere-page-web-destination_74855-25314.jpg" class="card-img-top cursor-pointer lazyload" alt="Tourisme, patrimoine et villes"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Tourisme, patrimoine et villes</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Votre r&eacute;gion, sa ville et ses monuments m&eacute;ritent d&#39;&ecirc;tre d&eacute;couverts par le monde entier ! Montrez-les avec une immersion compl&egrave;te</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="#"><img src="assets/img/imgeco/gens-mon-passe-temps-gens-faire-activites-nager-peindre-jouer-jeux-video-illustration_24908-60582.jpg" class="card-img-top cursor-pointer lazyload" alt="Artistes, influenceurs ou particuliers"/></a>
                                                        <div class="card-body">
                                                            <a href="#">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Artistes, influenceurs ou particuliers</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Les visites virtuelles ne sont pas r&eacute;serv&eacute;es qu&#39;aux professionnels et sont pour tous:&nbsp;De l&#39;amateur au passionn&eacute;.
                    L&rsquo;art et les souvenirs se doivent d&#39;&ecirc;tre partag&eacute;s afin de vous faire revivre ces moments.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                                                </div>
                                                                        </div>
                    
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-5 g_5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30" style={{background: 'white'}}>
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                                <div class="col-12 col-md-6 col-lg-5 g_5 text-center my-auto mx-auto  order-1 order-sm-1 order-md-2 order-last ">
                                                <div class="col-12">
                                                    <img class="lazyload br-10 w-100" alt="Ecolab Pro : Pour Aller Plus Loin" src="assets/img/imgeco/10905678.jpg"/>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-7  order-2 order-sm-2 order-md-1 " id="s-content" >
                                                <h2 class="concept-title mb-15 home-title home-section-title" >Ecolab Pro : Pour Aller Plus Loin</h2>
                                                <div class="mt-2 fz-18 fw-500 concept-text">
                                                    <p>
                                                        <p>Nous avons cr&eacute;&eacute; des fonctionnalit&eacute;s suppl&eacute;mentaires sous la formule Pro et Gold suite &agrave; vos nombreuses demandes. Ces formulesvous permettront de : passer des visites virtuelles en mode priv&eacute;es, prot&eacute;ger la consultation de la visite par un mot de passe, personnaliser la visite avec vos propres logos, ajouter dans la visite le lien de votre site internet, ajouter un fond sonore audio mp3 ou encore ajouter un plan de sol, et bien plus encore.</p>
                                                    </p>
                                                                                    <a href="https://www.Ecolab.com/fr/tarifs-visites-virtuelles-360" >
                                                        <button class="btn btn-outline-primary btn-section">
                                                        Découvrez nos tarifs
                                                        </button>
                                                    </a>
                                                                                </div>
                                            </div>
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-5 g_5  align-items-center">
                        <div class="section-top-border- pt-30 pb-30 dop" >
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                            <div class="col-12 col-md-12 col-lg-12" id="s-content">
                                            <h2 class="concept-title mb-15 home-section-title text-center home-title"> Histoire De La Visite Virtuelle </h2>
                                                                    <div class="mt-2 fz-18 fw-500 concept-text">
                    
                                                    <p>En 1787, l’artiste Robert Barker a réalisé un panorama 360° en peinture sur une surface cylindrique et vue de l’intérieur. Le mot panorama est apparu le 11 Juin 1791. Le 29 décembre 1900, Louis Lumière dépose le brevet du Photorama, premier procédé de photographie panoramique permettant la projection dans une rotonde, d’un cliché unique représentant un tour d’horizon, soit 360°.<br />
                    <br />
                    La réussite de la projection tient au fait que Louis Lumière applique à l’appareil les principes de l’obturation du Cinématographe. De Février 1902 jusqu’au printemps 1903, plus de 600 photographies panoramiques sont réalisés et projetées en public à Paris, dans une salle de 20 mètres de diamètre.Ces panoramas photographiques promettaient de réinventer la vogue des panoramas picturaux, née à la fin du 18ème siècle. À la fin du 19ème siècle, la photographie 360 prenait naissance, par l’assemblage de multiples photos pour en créer une seule en 360°.L’un des premiers lecteurs en ligne de visite virtuelle était le logiciel Quick Time d’Apple.<br />
                    <br />
                    En Janvier 2020, Ecolab rend enfin la visite virtuelle accessible à tous et pour le monde entier.</p>
                    
                                                                            <div class="text-center">
                                                    <a href="fr.html#"  data-toggle="modal" data-target="#signupModal"  >
                                                    <button class="btn btn-outline-primary btn-section">
                                                        Continuez d&#039;écrire l&#039;histoire
                                                    </button>
                                                    </a>
                                                </div>
                                                                        </div>
                                        </div>
                    
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Testimonial Start --> */}
                    <Testimonial/>
                    {/* <!-- Testimonial End --> */}
          
                
                </div>
            </div>
  

            <Footer/>
        </div>
    )
}

export default EcoVirtual_Lab;

            
        
        
        
