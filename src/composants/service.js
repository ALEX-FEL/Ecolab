import React from "react"
import Footer from "./Elements/footer";
import Header from "./Elements/header";

function Service() {
    return(
    <div className="container-xxl bg-white p-0">


        
        <div className="container-xxl position-relative p-0">
            <Header/>
        </div>


        <div className="container-xxl py-6">
            <div className="container">
                <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">Nos services</h4>
                </div>
                <div className="product-grid">
                    {/* <!-- Produit 1 --> */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="assets/img/eco4.jpg" alt="Produit 1"/>
                        </div>
                        <h5 className="product-name">EcoVirtual Lab (Labos Virtuels)</h5>
                        <p className="product-description">Description du produit 1</p>
                        <a className="btn btn-primary" href="/ecoVirtual">Voir le produit</a>
                    </div>
                
                    {/* <!-- Produit 2 --> */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="assets/img/ego13.jpeg" alt="Produit 2"/>
                        </div>
                        <h5 className="product-name">Visite Virtuelle 237</h5>
                        <p className="product-description">Description du produit 2</p>
                        <a className="btn btn-primary" href="/visite_virtuelle" >Voir le produit</a>
                    </div>
                
                    {/* <!-- Produit 3 --> */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="img/product3.jpg" alt="Produit 3"/>
                        </div>
                        <h5 className="product-name">Eco Game zone</h5>
                        <p className="product-description">Description du produit 3</p>
                        <a className="btn btn-primary" href="/eco_Game_zone">Voir le produit</a>
                    </div>
                
                    {/* <!-- Produit 4 --> */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="img/product4.jpg" alt="Produit 4"/>
                        </div>
                        <h5 className="product-name">Développement de jeux, d’applications, logiciels</h5>
                        <p className="product-description">Description du produit 4</p>
                        <a className="btn btn-primary" href="/dev_jeux_app">Voir le produit</a>
                    </div>
                
                    {/* <!-- Produit 5 --> */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="img/product5.jpg" alt="Produit 5"/>
                        </div>
                        <h5 className="product-name">Formations</h5>
                        <p className="product-description">Description du produit 5</p>
                        <a className="btn btn-primary" href="/formations">Voir le produit</a>
                    </div>
                
                    {/* <!-- Produit 6 --> */}
                    {/* <div className="product-item">
                        <div className="product-image">
                            <img src="img/product6.jpg" alt="Produit 6"/>
                        </div>
                        <h5 className="product-name">Produit 6</h5>
                        <p className="product-description">Description du produit 6</p>
                        <button className="btn btn-primary">Voir le produit</button>
                    </div> */}
                
                    {/* <!-- Produit 7 --> */}
                    {/* <div className="product-item">
                        <div className="product-image">
                            <img src="img/product7.jpg" alt="Produit 7"/>
                        </div>
                        <h5 className="product-name">Produit 7</h5>
                        <p className="product-description">Description du produit 7</p>
                        <button className="btn btn-primary">Voir le produit</button>
                    </div> */}
                
                    {/* <!-- Produit 8 --> */}
                    {/* <div className="product-item">
                        <div className="product-image">
                            <img src="img/product8.jpg" alt="Produit 8"/>
                        </div>
                        <h5 className="product-name">Produit 8</h5>
                        <p className="product-description">Description du produit 8</p>
                        <button className="btn btn-primary">Voir le produit</button>
                    </div> */}
                
                    {/* <!-- Produit 9 --> */}
                    {/* <div className="product-item">
                        <div className="product-image">
                            <img src="img/product9.jpg" alt="Produit 9"/>
                        </div>
                        <h5 className="product-name">Produit 9</h5>
                        <p className="product-description">Description du produit 9</p>
                        <button className="btn btn-primary">Voir le produit</button>
                    </div> */}
                </div>
            </div>
        </div>
        
        <Footer/>
    </div>
    )
}
    
export default Service;