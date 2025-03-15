import React from "react";
import Footer from "../Elements/footer";
import Header from "../Elements/header";
import Testimonial from "../Elements/testimonial";



function Visite_virtuelle(){
    return(
        <div className="container-xxl bg-white p-0">

            <div className="container-xxl position-relative p-0">
                <Header/>
            </div>

            <div className="container-xxl py-6">
                <div className="container">
                    {/* <div className="row g-5 align-items-center ">
                        <div className=" text-center ">
                            <h1 className="mb-4 animated zoomIn">Visite Virtuelle 237</h1>
                            <p class="fw-500  pano-text ">Créez, partagez, et découvrez</p>
                            <a href="#" className="btn btn-light rounded-pill py-3 px-5 mt-2 dancing-button"><b style={{color: 'inherit'}} >Commencez</b> - C'est gratuit!</a>
                        </div>
                    </div> */}
                    <div className="position-relative overflow-hidden">

                        <div className="row g-5 align-items-center text-center">
                            <div>
                                <h1 className="mb-4 animated zoomIn" style={{ fontSize: '69px'}}>Visite Virtuelle 237</h1>
                                <p className="fw-500 pano-text" style={{ fontSize: '39px'}} >Créez, partagez, et découvrez</p>
                                <a href="#" className="btn btn-light rounded-pill py-3 px-5 mt-2 dancing-button">
                                    <b style={{ color: 'inherit', fontSize: '30px' }}>Commencez</b> - C'est gratuit!
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                            <img className="img-fluid" src="assets/img/imgeco/1.png"/>
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

                    <div className="row g-5 align-items-center">
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
                    
                                                    <div class="text-center">
                                                        <div class="container my-4">
                                                            {/* <!-- Swiper Container --> */}
                                                            <div class="swiper mySwiper">
                                                                <div class="swiper-wrapper">
                                                                    
                                                                    {/* <!-- Slide 1 --> */}
                                                                    <div class="swiper-slide">
                                                                        <div class="grid-container">
                                                                            <div class="grid-item">
                                                                                <a href="https://site1.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/1.jpeg" alt="Image 1"/>
                                                                                    <div class="grid-overlay">Titre 1</div>
                                                                                </a>
                                                                            </div>
                                                                            <div class="grid-item">
                                                                                <a href="https://site2.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/2.jpeg" alt="Image 2"/>
                                                                                    <div class="grid-overlay">Titre 2</div>
                                                                                </a>
                                                                            </div>
                                                                            <div class="grid-item">
                                                                                <a href="https://site3.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/3.jpeg" alt="Image 3"/>
                                                                                    <div class="grid-overlay">Titre 3</div>
                                                                                </a>
                                                                            </div>
                                                                            <div class="grid-item">
                                                                                <a href="https://site4.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/4.jpeg" alt="Image 4"/>
                                                                                    <div class="grid-overlay">Titre 4</div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Slide 2 --> */}
                                                                    <div class="swiper-slide">
                                                                        <div class="grid-container">
                                                                            <div class="grid-item">
                                                                                <a href="https://site5.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/5.jpeg" alt="Image 5"/>
                                                                                    <div class="grid-overlay">Titre 5</div>
                                                                                </a>
                                                                            </div>
                                                                            <div class="grid-item">
                                                                                <a href="https://site6.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/6.jpeg" alt="Image 6"/>
                                                                                    <div class="grid-overlay">Titre 6</div>
                                                                                </a>
                                                                            </div>
                                                                            <div class="grid-item">
                                                                                <a href="https://site7.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/7.jpeg" alt="Image 7"/>
                                                                                    <div class="grid-overlay">Titre 7</div>
                                                                                </a>
                                                                            </div>
                                                                            <div class="grid-item">
                                                                                <a href="https://site8.com" target="_blank">
                                                                                    <img src="assets/img/imgeco/8.jpeg" alt="Image 8"/>
                                                                                    <div class="grid-overlay">Titre 8</div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                
                                                                {/* <!-- Navigation boutons --> */}
                                                                <div class="swiper-button-next"></div>
                                                                <div class="swiper-button-prev"></div>
                                                                
                                                                {/* <!-- Pagination --> */}
                                                                <div class="swiper-pagination"></div>
                                                            </div>
                                                        </div>


                                                    </div>
                    
                    
                                                                                    <div class="text-center">
                                                        <a href="https://www.Ecolab.com/fr/explorer?category=all" >
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

                    <div className="row g-5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30" style={{background: 'white'}}>
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                            <div class="col-12 col-md-12 col-lg-12" id="s-content">
                                            <h2 class="concept-title mb-15 home-section-title text-center home-title"> Comment Créer Des Visites Virtuelles Sur Ecolab ? </h2>
                                                                    <h3 class="mb-15 text-center home-subtitle"> Facile Et Rapide </h3>
                                                                    <div class="mt-2 fz-18 fw-500 concept-text">
                    
                                                    <p><strong>Créez un compte :</strong> Pour commencer à utiliser Ecolab, cliquez simplement sur le bouton «S’inscrire», c&#39;est rapide et gratuit.</p>
                    
                    <p><strong>Capturez vos photos :</strong> Ecolab est compatible avec toutes les photos de smartphones, les photos panoramiques, les caméras 360 et toutes les photos (JPG).</p>
                    
                    <p><strong>Chargez vos photos sur Ecolab : </strong>Cliquez sur « créer un visite », remplissez les informations nécessaires puis transférez toutes vos photos sur Ecolab. C’est illimité et simple</p>
                    
                    <p><strong>Améliorez votre visite virtuelle:</strong> Profitez des fonctionnalités proposées par Ecolab : Ajoutez des hotspots pour passer d&#39;une vue à l’autre, ajoutez des hotspots d&#39;informations «i», ajoutez des photos classiques 2D et bien plus encore. Votre visite sera encore plus interactive et offrira une expérience unique aux visiteurs et clients.</p>
                    
                    <p><strong>Partagez votre visite: </strong>Dès que vous avez publié la visite virtuelle, elle est prête à être partagée dans le monde entier ou encore intégrée sur tous les sites internet.</p>
                    
                                                                            <div class="text-center">
                                                    <a href="https://www.Ecolab.com/fr/comment-creer-visite-virtuelle-360" >
                                                    <button class="btn btn-outline-primary btn-section">
                                                        Découvrez ici les vidéos tuto - C&#039;est gratuit!
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
                    
                    <div className="row g-5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30 dop" >
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                                <div class="col-12 col-md-6 col-lg-5 text-center my-auto mx-auto ">
                                                <div class="col-12">
                                                    <img class="lazyload br-10 w-100" alt="Comment Partager Ou Intégrer Des Visites Virtuelles" data-src="assets/img/imgeco/section_1610555302-1678709324.png"/>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-7 " id="s-content" >
                                                <h2 class="concept-title mb-15 home-title home-section-title" >Comment Partager Ou Intégrer Des Visites Virtuelles</h2>
                                                <div class="mt-2 fz-18 fw-500 concept-text">
                                                    <p>
                                                        <p>Maintenant que votre premi&egrave;re visite virtuelle est publi&eacute;e sur Ecolab, vous vous demandez peut-&ecirc;tre : que dois-je faire ensuite ? Vous pouvez partager en ligne vos visites virtuelles et ainsi gagner en visibilit&eacute; et profiter des avantages qu&#39;elles vous offrent.</p>
                    
                    <p><strong>Partagez simplement vos visites virtuelles</strong><br />
                    Cliquez sur le bouton &laquo; Partager &raquo; et copiez le lien () de la visite et partagez-le partout : sur les sites internet et les r&eacute;seaux sociaux (sites de petites annonces, Facebook, WhatsApp, Linkedin, e-mail, SMS, etc.)</p>
                    
                    <p><strong>Int&eacute;grez la visite virtuelle&nbsp;sur votre site Web</strong><br />
                    Cliquez sur le bouton &laquo; Partager &raquo; et copier le code Embed. Toutes les visites cr&eacute;&eacute;es sur Ecolab peuvent &ecirc;tre int&eacute;gr&eacute;es sur la page d&eacute;sir&eacute;e de votre site Web.</p>
                    
                    <p><strong>Diffusez sur les r&eacute;seaux sociaux</strong><br />
                    Les visites virtuelles cr&eacute;&eacute;es sur notre plateforme Ecolab peuvent &ecirc;tre partag&eacute;es sur les r&eacute;seaux sociaux tels que Facebook, Twitter, Linkedin, WhatsApp, Telegram, Quora, Tumblr, Reddit, etc.</p>
                    
                    <p><strong>Obtenir le code QR</strong><br />
                    Ecolab g&eacute;n&egrave;re un code QR qui peut &ecirc;tre scann&eacute; afin d&#39;ouvrir directement la visite immersive. Vous pouvez sauvegarder le code QR sur votre t&eacute;l&eacute;phone, votre ordinateur ou encore l&#39;imprimer sur papier.</p>
                                                    </p>
                                                                                    <a href="fr.html#"  data-toggle="modal" data-target="#signupModal"  >
                                                        <button class="btn btn-outline-primary btn-section">
                                                        Débuter maintenant - C&#039;est gratuit!
                                                        </button>
                                                    </a>
                                                                                </div>
                                            </div>
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30" style={{background: 'white'}}>
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                                <div class="col-12 col-md-6 col-lg-5 text-center my-auto mx-auto  order-1 order-sm-1 order-md-2 order-last ">
                                                <div class="col-12">
                                                    <img class="lazyload br-10 w-100" alt="Boostez Votre Business" data-src="assets/img/imgeco/section_1610555235-1038486870.png"/>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-7  order-2 order-sm-2 order-md-1 " id="s-content" >
                                                <h2 class="concept-title mb-15 home-title home-section-title" >Boostez Votre Business</h2>
                                                <div class="mt-2 fz-18 fw-500 concept-text">
                                                    <p>
                                                        <p>Les visites virtuelles stimuleront votre originalit&eacute; et&nbsp;donneront &eacute;galement une acceleration puissante &agrave;&nbsp;votre entreprise.<br />
                    La visite virtuelle&nbsp;est un outil tr&egrave;s appr&eacute;ci&eacute; des photographes, des agents immobiliers et de tous, car elle est capable&nbsp;de montrer chaque recoin d&#39;un lieu, ce qui acc&eacute;l&egrave;re l&#39;ensemble des&nbsp;processus. La visite immersive vous fera gagner du temps et de l&#39;argent. Les propri&eacute;taires d&#39;h&ocirc;tels,&nbsp;BnB, restaurants et toutes soci&eacute;t&eacute;s&nbsp;sont &eacute;galement fans des visites virtuelles&nbsp;Ecolab, qui permettent de d&eacute;couvrir leurs &eacute;tablissements et gagner en visibilit&eacute;.</p>
                    
                    <p>Votre profil Ecolab et vos visites sont index&eacute;s sur divers moteurs de recherche (Google, Bing, Yandex, etc), ce qui est une force marketing de plus &agrave; vos cot&eacute;s grace au r&eacute;f&eacute;rencement naturel (SEO) : Soyez omnipr&eacute;sent sur internet.</p>
                                                    </p>
                                                                                </div>
                                            </div>
                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30 dop" >
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                            <div class="col-12 col-md-12 col-lg-12" id="s-content">
                                            <h2 class="concept-title mb-15 home-section-title text-center home-title"> Pourquoi La Visite Virtuelle ? </h2>
                                                                    <div class="mt-2 fz-18 fw-500 concept-text">
                    
                                                    <p>La visite virtuelle est le choix Numéro 1 pour des millions d&#39;agents immobiliers, de photographes, de propriétaires d&#39;hôtels, de spécialistes du marketing, de voyageurs et finalement pour tous.<br />
                    Offrez à vos clients et visiteurs une véritable expérience immersive au lieu de simple images. Les visites virtuelles permettent d’économiser de l’argent ainsi que votre temps et celui de vos clients. Également, les visites virtuelles éviteront des déplacements inutiles et polluants, chaque détail compte pour la planète.</p>
                    
                    <p><strong>Les visites virtuelles stimulent les ventes</strong><br />
                    Les visites virtuelles Ecolab permettent de Communiquer de manière innovante et de vous démarquer de vos concurrents. Croyez-nous, les clients et visiteurs adorent les visites immersives, bien plus que les photos basiques ou les vidéos monotones.</p>
                    
                    <p><strong>Les visites virtuelles boostent votre image</strong><br />
                    Bien que les visites virtuelles deviennent de plus en plus populaires, de nombreuses entreprises hésitent encore à les utiliser, estimant qu&#39;elles sont trop chères ou compliquées à réalisées. Ecolab a révolutionné la manière de créer et diffuser les visites virtuelles. Créez votre visite en quelques minutes et attirez de nouveaux clients facilement et rapidement.</p>
                    
                    <p><strong>Les visites immersives favorisent la créativité</strong><br />
                    Ecolab offre des fonctionnalités presque infinies qui ne nécessitent aucune compétence particulière. Stimulez votre créativité et surprenez vos visiteurs ou clients avec des visites virtuelles à couper le souffle.</p>
                    
                    <p><strong>Rejoignez une nouvelle communauté sur Ecolab</strong><br />
                    Ecolab n&#39;est pas simplement le meilleur outil de création visite virtuelle, c’est également un site de découverte et de rencontre entre professionnels et passionnés de visite virtuelle.</p>
                    
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
                    
                    <div className="row g-5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30" style={{background: 'white'}}>
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                                <div class="col-12 col-md-6 col-lg-5 text-center my-auto mx-auto ">
                                                <div class="col-12">
                                                    <img class="lazyload br-10 w-100" alt="Qu’est-ce Qu’une Visite Virtuelle ?" data-src="assets/img/imgeco/section_1610555340-1515872134.png"/>
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
                    
                    <div className="row g-5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30 dop" >
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                        
                                            <div class="col-12 col-md-12 col-lg-12" id="s-content">
                                                <h2 class="concept-title mb-15 home-section-title text-center home-title"> Qui A Besoin De Visites Virtuelles ? </h2>
                    
                    
                                                <div class="row main">
                    
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="assets/img/imgeco/1.png" class="card-img-top cursor-pointer lazyload" alt="Professionnels de l&#039;immobilier"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Professionnels de l&#039;immobilier</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Des nos jours, la visite virtuelle est indispensable pour louer ou vendre un bien. Cela vous fera gagner du temps, de la s&eacute;curit&eacute; et de l&#39;argent. Bien entendu, la visite virtuelle augemente le nombre d&#39;acheteurs potentiels. Tr&egrave;s pris&eacute; des agents immobilier et mandataires.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="assets/img/imgeco/section_1610555375-354707498.png" class="card-img-top cursor-pointer lazyload" alt="Photographes"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Photographes</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Cr&eacute;ez rapidement et facilement des visites virtuelles. Faites-vous recruter en ligne et&nbsp;gagnez en visibilit&eacute;. Montrez au monde votre talent!</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="https://assets.Ecolab.com/uploads/blockimage/blockimage_1610795223-445582474.png" class="card-img-top cursor-pointer lazyload" alt="Entreprises de construction"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Entreprises de construction</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Cr&eacute;ez des visites virtuelles &agrave; toutes les &eacute;tapes de l&#39;avancement de vos travaux : Avant, Pendant, Apr&egrave;s. Enrichissez votre portofolio et attirez de nouveaux clients et investisseurs. Montrez votre travail incroyable et faites la diff&eacute;rence avec vos concurrents.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="https://assets.Ecolab.com/uploads/blockimage/blockimage_1610795223-1010274549.png" class="card-img-top cursor-pointer lazyload" alt="Dronistes"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Dronistes</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Enfin un endroit pour montrer vos superbes vues a&eacute;riennes dans des visites virtuelles. Et pourquoi ne pas vendre vos services en ligne ?</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="https://assets.Ecolab.com/uploads/blockimage/blockimage_1610795223-2371153.png" class="card-img-top cursor-pointer lazyload" alt="Architectes et designers 3D"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Architectes et designers 3D</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Vous r&eacute;alisez des vues 3D, du Home Staging 3D, ou des plans de sol ? Montrez&nbsp;votre travail sur Ecolab et faites-vous mandater en&nbsp;ligne pour votre talent.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="https://assets.Ecolab.com/uploads/blockimage/blockimage_1610795224-1129413895.png" class="card-img-top cursor-pointer lazyload" alt="Entrepreneurs, écoles et entreprises"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Entrepreneurs, écoles et entreprises</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">De nos jours et plus que jamais, toutes les entreprises ont besoin&nbsp;d&#39;&ecirc;tre en ligne. N&#39;attendez plus et cr&eacute;ez des visites virtuelles&nbsp;pour de nombreux domaines tels que:&nbsp;Les boutiques, &eacute;coles, bars, restaurants, etc.</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="https://assets.Ecolab.com/uploads/blockimage/blockimage_1610795224-1429789100.png" class="card-img-top cursor-pointer lazyload" alt="Tourisme, patrimoine et villes"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
                                                                <h3 data-mh="title" class="match card-title home-subtitle block-subtitle cursor-pointer">Tourisme, patrimoine et villes</h3>
                                                            </a>
                                                            <span class="card-text fz-16 fw-500" data-mh="desc">Votre r&eacute;gion, sa ville et ses monuments m&eacute;ritent d&#39;&ecirc;tre d&eacute;couverts par le monde entier ! Montrez-les avec une immersion compl&egrave;te</span>
                                                            
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 br-5">
                                                        <div class="card">
                                                        <a href="https://www.Ecolab.com/fr/explorer"><img src="https://assets.Ecolab.com/uploads/blockimage/blockimage_1610795224-546616023.png" class="card-img-top cursor-pointer lazyload" alt="Artistes, influenceurs ou particuliers"/></a>
                                                        <div class="card-body">
                                                            <a href="https://www.Ecolab.com/fr/explorer">
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
                    
                    <div className="row g-5 align-items-center">
                        <div class="section-top-border- pt-30 pb-30" style={{background: 'white'}}>
                            <div class="container">
                    
                                <div class="row d-flex justify-content-center">
                    
                                    <div class="w-100 concept row section-area--" >
                    
                                                                <div class="col-12 col-md-6 col-lg-5 text-center my-auto mx-auto  order-1 order-sm-1 order-md-2 order-last ">
                                                <div class="col-12">
                                                    <img class="lazyload br-10 w-100" alt="Ecolab Pro : Pour Aller Plus Loin" data-src="https://assets.Ecolab.com/uploads/homesection/section_1610555375-354707498.png"/>
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
                    
                    <div className="row g-5 align-items-center">
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

export default Visite_virtuelle
;

            
        
        
        
