import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "./data";
import Header from "../Elements/header";
import Footer from "../Elements/footer";

function JobDetail() {
    const { id } = useParams();
    const job = useMemo(() => jobs.find(j => j.id === id), [id]);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("idle");

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const onFile = (e) => {
        setFile(e.target.files?.[0] || null);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            // Envoi via EmailJS REST API si les clés Vite sont définies
            const SERVICE_ID = import.meta?.env?.VITE_EMAILJS_SERVICE_ID;
            const TEMPLATE_ID = import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID;
            const PUBLIC_KEY = import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY;

            if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
                let attachmentBase64 = "";
                let filename = "cv.pdf";
                if (file) {
                    const buffer = await file.arrayBuffer();
                    attachmentBase64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
                    filename = file.name || filename;
                }

                const payload = {
                    service_id: SERVICE_ID,
                    template_id: TEMPLATE_ID,
                    user_id: PUBLIC_KEY,
                    template_params: {
                        applicant_name: form.name,
                        applicant_email: form.email,
                        applicant_message: form.message,
                        job_title: job.title,
                        job_id: job.id,
                        to_email: "nengue382@gmail.com"
                    },
                    attachments: attachmentBase64 ? [
                        {
                            content: attachmentBase64,
                            filename
                        }
                    ] : []
                };

                const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("EmailJS error");
                setStatus("success");
            } else {
                // Repli: ouvre le client mail de l'utilisateur
                const subject = encodeURIComponent(`Candidature - ${job.title}`);
                const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\nOffre: ${job.title}\n\nMessage:\n${form.message}`);
                window.location.href = `mailto:nengue382@gmail.com?subject=${subject}&body=${body}`;
                setStatus("success");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    if (!job) {
        return (
            <div className="container-xxl py-5"><div className="container"><p>Offre introuvable.</p></div></div>
        );
    }

    return (
        <div className="container-xxl bg-white p-0">
            <div className="container-xxl position-relative p-0">
            <Header/>
            </div>
            <div className="container-xxl py-6">
                <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <h1 className="mb-3">{job.title}</h1>
                        <div className="text-muted mb-3">{job.location} • {job.category} • Publiée {job.publishedAt}</div>
                        <p>{job.description}</p>
                        <h5 className="mt-4">Missions</h5>
                        <ul>
                            {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                        <h5 className="mt-4">Profil</h5>
                        <ul>
                            {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-white border rounded-3 p-4">
                            <h4 className="mb-3">Postuler</h4>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Nom complet</label>
                                    <input name="name" value={form.name} onChange={onChange} type="text" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input name="email" value={form.email} onChange={onChange} type="email" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea name="message" value={form.message} onChange={onChange} rows={4} className="form-control" placeholder="Quelques mots pour appuyer votre candidature"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">CV (PDF)</label>
                                    <input onChange={onFile} type="file" accept="application/pdf" className="form-control" />
                                </div>
                                <button disabled={status === "loading"} className="btn btn-primary w-100" type="submit">
                                    {status === "loading" ? "Envoi..." : "Envoyer la candidature"}
                                </button>
                                {status === "success" && <div className="alert alert-success mt-3">Candidature envoyée.</div>}
                                {status === "error" && <div className="alert alert-danger mt-3">Une erreur est survenue.</div>}
                            </form>
                            <p className="small text-muted mt-3">Astuce: pour un envoi réel et sécurisé, configurez un endpoint serveur qui enverra l'email à votre boîte.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default JobDetail;


