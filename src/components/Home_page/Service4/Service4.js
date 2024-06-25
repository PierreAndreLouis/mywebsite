import React from 'react'
import './Service4.css'
import { Link } from 'react-router-dom'


function Service4() {
        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'auto'
                // behavior: 'smooth'
            });
        };
    return (
        <div>
            <main id='Service_4'>
                <div className='Container'>
                    <div className='title_section'>
                        <p>Construire des Interfaces Web Engageantes et Intuitives.</p>
                        <h2>Nous vous aidons à résoudre vos problèmes.</h2>
                        {/* Nous vous aidons a resoudre vos problemes */}
                        {/* <button>LIRE PLUS</button> */}
                        <Link to="/About" onClick={() => { handleClick() }}>
                            <button>LIRE PLUS</button>
                        </Link>
                    </div>
                    <div className='Containt'>
                        <div className='service1'>
                            <div className='icon'><i class="bi bi-person-circle"></i></div>
                            <div>
                                <h4>Sites Web Personnel</h4>
                                <p>Je crée des sites web personnalisés pour ton CV en ligne. Je t'aide à mettre en valeur ton parcours professionnel, tes compétences et tes réalisations de manière claire et professionnelle. Ton CV en ligne sera unique, reflétant parfaitement ta personnalité et attirant l'attention des recruteurs. Grâce à un design moderne tu te démarqueras facilement des autres candidats.</p>
                                {/* <p>Je crée des sites web personnalisés pour ton CV en ligne. Je t'aide à mettre en valeur ton parcours professionnel, tes compétences et tes réalisations de manière claire et professionnelle. Ton CV en ligne sera unique, reflétant parfaitement ta personnalité et attirant l'attention des recruteurs.</p> */}
                            </div>
                        </div>
                        <div className='service1'>
                            <div className='icon'><i class="bi bi-journal-album"></i></div>
                            <div>
                                <h4>Sites web portfolio</h4>
                                <p>Je conçois des sites web portfolio élégants et fonctionnels pour montrer tes projets et réalisations. Chaque projet sera mis en avant avec un design professionnel, permettant aux visiteurs de découvrir tes compétences et ta créativité. Que tu sois artiste, designer, développeur ou un autre professionnel, je t'aide à exhiber ton travail de la meilleure façon possible.</p>
                            </div>
                        </div>
                        <div className='service1'>
                            <div className='icon'><i class="bi bi-person-workspace"></i></div>
                            <div>
                                <h4>Site pour Services Offerts</h4>
                                <p>Je développe des sites web pour promouvoir tes services professionnels. Que tu sois consultant, freelance ou propriétaire d'une petite entreprise, je crée un site web conçu pour convertir les visiteurs en clients. Tu pourras présenter tes offres, témoignages de clients et informations de contact de manière claire et attrayante.</p>
                            </div>
                        </div>
                        {/* <div className='service1'>
                            <div className='icon'></div>
                            <div>
                                <h4>Service 4</h4>
                                <p>Lorem ipsum dolor ori  dicta conse blanditiis asperiores vel repellendus expedita earum. Ratione ullam quaerat vitae debitis voluptate. Lorem ipsum dolor ori  dicta conse blanditiis asperiores vel repellendus expedita earum. Ratione ullam quaerat vitae debitis voluptate.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Service4