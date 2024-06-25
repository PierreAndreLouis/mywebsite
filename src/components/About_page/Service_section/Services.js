import React from 'react'
import "./Services.css"

function Services() {
    return (
        <section id='Service_page'>

            <div className='Services_container'>
                <div className='portfolio_tilte_box service'>
                    <h2>Mes Services</h2>
                    <div className="title_style1"></div>
                    <div className="title_style2"></div>
                </div>
                <div className='services_containt'>
                    <div className='single_service_container'>
                        <i class="bi bi-person-circle"></i>
                        <h2> Sites Web Personnel</h2>
                        <p>
                            Je crée des sites web personnalisés pour ton CV en ligne. Je t'aide à mettre en valeur ton parcours professionnel, tes compétences et tes réalisations de manière claire et professionnelle. Ton CV en ligne sera unique, reflétant parfaitement ta personnalité et attirant l'attention des recruteurs. Grâce à un design moderne tu te démarqueras facilement des autres candidats.
                        </p>
                    </div>

                    <div className='single_service_container'>
                        <i class="bi bi-journal-album"></i>
                        <h2>Sites web portfolio</h2>
                        <p>
                            Je conçois des sites web portfolio élégants et fonctionnels pour montrer tes projets et réalisations. Chaque projet sera mis en avant avec un design professionnel, permettant aux visiteurs de découvrir tes compétences et ta créativité. Que tu sois artiste, designer, développeur ou un autre professionnel, je t'aide à exhiber ton travail de la meilleure façon possible.
                        </p>
                    </div>

                    <div className='single_service_container'>
                        <i class="bi bi-person-workspace"></i>
                        <h2>Site pour Services Offerts</h2>
                        <p>
                            Je développe des sites web pour promouvoir tes services professionnels. Que tu sois consultant, freelance ou propriétaire d'une petite entreprise, je crée un site web conçu pour convertir les visiteurs en clients. Tu pourras présenter tes offres, témoignages de clients et informations de contact de manière claire et attrayante.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services