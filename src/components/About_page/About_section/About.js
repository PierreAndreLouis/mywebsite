import React from 'react'
import "./About_page.css"
// import about_img from "./Images/profil_picture_2.png"
import about_img from "./Images/Profil Img.png"
// import fiverr_logo from "./Images/fiverr.png"
// import upwork_logo from "./Images/upwork.png"
import cv from "./Documents/CV2.pdf"

import upwork_logo from './Images/upwork_logo.png'
import fiver_logo from './Images/fiver_logo.png'
import linkedin_logo from './Images/linkedin_logo.png'
import whatsapp_logo from './Images/whatsapp_logo.png'



function About() {
    return (
        <div id="About" className='About_page_container'>
            <div className='image_container'>
                <div className='image_border'>
                    <img className='about_img_profil' src={about_img} />
                </div>
            </div>
            <div className='about_info_container'>
                <h2>Pourquoi m'embaucher  pour votre prochain projet?</h2>
                <p className='web_dev'>Développeur web front-end</p>
                <p className='desc'>
                    Salut ! Je suis un développeur web front-end, et je peux apprendre et
                    collaborer rapidement dans des environnements en constante évolution.
                    J'ai passé des centaines d'heures à apprendre des technologies comme
                    HTML, CSS, JavaScript, React js, Bootstrap, comment utiliser des APIs, et bien plus encore.
                    <hr />

                    Je me mets au défi tous les jours tout en restant concentré sur l'obtention
                    de résultats de haute qualité dans des délais stricts. Je suis impatient de décrocher
                    un poste stimulant dans une entreprise prestigieuse qui développera mes compétences et
                    enrichira mes compétences de développeur. 
                    <hr />

                    Je suis excité à l'idée de mettre mes services à disposition d'une entreprise ou d'une agence pour
                    développer mes compétences tout en facilitant leurs améliorations.</p>

                <div className='about_button_section'>
                    <a href={cv} download><button className='download_cv'>Download CV</button></a>
                    <div className='social_media_link'>
                        <a target="_blank" href='https://www.linkedin.com/in/pierre-andr%C3%A9-louis-3a64a6279/'><img className="fiverr_logo" src={linkedin_logo} /></a>
                        <a target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img className="fiverr_logo" src={fiver_logo} /></a>
                        <a target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img className="upwork_logo" src={upwork_logo} /></a>
                        <a target="_blank" href='https://wa.me/50946731710' ><img className="fiverr_logo" src={whatsapp_logo} /></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About