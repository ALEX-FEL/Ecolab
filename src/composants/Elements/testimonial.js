import React from "react";
import { Link } from "react-router-dom";

function Testimonial() {
    return(
        <div className="container-xxl py-6">
                        <div className="container">
                            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                                {/* <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Testimonial</div> */}
                                <h2 className="mb-5">Ce qu'ils disent de Ecolab!</h2>
                            </div>
                            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                                <div className="testimonial-item rounded p-4">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>Grâce à vos services, j'ai pu augmenter ma visibilité en ligne et attirer de nouveaux clients. L'équipe est toujours à l'écoute et très professionnelle.</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/team/aristi.jpg"/>
                                        <div className="ps-3">
                                            <h6 className="mb-1">Aristide</h6>
                                            <small>Entrepreneur</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item rounded p-4">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>Les conseils que j'ai reçus ont transformé mon entreprise. Je recommande vivement vos services à tous les entrepreneurs en quête de croissance.</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/team/mimi.jpg"/>
                                        <div className="ps-3">
                                            <h6 className="mb-1">Mireille</h6>
                                            <small>Consultante en Marketing </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item rounded p-4">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>Un accompagnement sur mesure et des résultats visibles en peu de temps. Je suis ravie de ma collaboration avec votre équipe !</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/team/leroy.jpg"/>
                                        <div className="ps-3">
                                            <h6 className="mb-1">Leroy</h6>
                                            <small>Agriculteur</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item rounded p-4">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>J'ai apprécié le professionnalisme et la créativité de l'équipe. Mes photos sont désormais mises en valeur comme jamais !</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/team/alex.jpg"/>
                                        <div className="ps-3">
                                            <h6 className="mb-1">Kevin</h6>
                                            <small>Photographe</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
                   
    )
}

export default Testimonial;