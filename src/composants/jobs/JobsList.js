import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "./data";
import Header from "../Elements/header";
import Footer from "../Elements/footer";

function JobsList() {
    return (
        
        <div className="container-xxl bg-white p-0">
            <div className="container-xxl position-relative p-0">
            <Header/>
             </div>
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
                        <h1 className="mb-3">Offres d'emploi</h1>
                        <p>Découvrez nos opportunités et postulez en ligne.</p>
                    </div>
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white border rounded-3 p-4 mb-4 d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="mb-1">{job.title}</h5>
                                <div className="text-muted small">
                                    {job.location} <span className="mx-2">•</span> {job.category}
                                </div>
                            </div>
                            <div className="text-end">
                                <div className="text-muted small mb-2">Publiée {job.publishedAt}</div>
                                <Link to={`/jobs/${job.id}`} className="btn btn-warning">Postuler</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default JobsList;


