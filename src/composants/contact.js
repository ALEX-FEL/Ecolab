import React from "react";
import Footer from "./Elements/footer";
import Header from "./Elements/header";

function Contact() {
    return(
    <div className="container-xxl bg-white p-0">


         {/* <!-- Navbar & Hero Start --> */}
         <div className="container-xxl position-relative p-0">
            <Header/>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Contact Start --> */}
        <div className="container-xxl py-6">
            <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Contact Us</div>
                    <h2 className="mb-5">If You Have Any Query, Please Feel Free Contact Us</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
                        <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '50px'}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}






        
        <Footer/>
    </div>
    )
}

export default Contact;