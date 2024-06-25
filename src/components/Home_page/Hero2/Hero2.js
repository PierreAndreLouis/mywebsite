import React from 'react'
import './Hero2.css'
import hero_bg from './Images/hero.png'
// import mobile_img from './Images/profil_picture_2.png'
import mobile_img from './Images/Profil Img.png'


import upwork_logo from './Images/upwork_logo.png'
import fiver_logo from './Images/fiver_logo.png'
import linkedin_logo from './Images/linkedin_logo.png'
import whatsapp_logo from './Images/whatsapp_logo.png'


import cv from './Documents/CV2.pdf'
import { Link } from 'react-router-dom'

function Hero2() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };
    return (
        <section id='Hero_home'>
            <div className='Hero2_container'>
                <div className='hero2_containt'>
                    <div className='hero'>
                        <div className='mobile_hero_img'>
                            <div>
                                <img src={mobile_img} alt="this is a hero image" />
                            </div>
                        </div>


                        <h1>Pierre-Andre Louis</h1>
                        <h3>Développeur Web Front-End</h3>
                        <p>Je crée des sites web personnalisés qui permettent à mes clients de présenter leur profil, leur portfolio ou leurs services de manière professionnelle.</p>
                        <div className='btn_section'>
                            <Link to="/Contact" onClick={() => { handleClick() }}>
                                <button>Contacte-moi</button>
                            </Link>
                            <a href={cv} download>
                                <button className='down_cv'>Télécharger CV</button>
                            </a>
                        </div>
                    </div>
                    <div className='hero_links'>

                        <div>
                            <div>
                                <i class="bi bi-envelope"></i>
                                <div>
                                    <h3>Email</h3>
                                    <p>webdeveloper3030@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <i class="bi bi-telephone"></i>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+509 46731710</p>
                                </div>
                            </div>
                            <div>
                                <a target="_blank" href='https://www.linkedin.com/in/pierre-andr%C3%A9-louis-3a64a6279/'><img className="fiverr_logo" src={linkedin_logo} /></a>
                                <a target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img className="fiverr_logo" src={fiver_logo} /></a>
                                <a target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img className="upwork_logo" src={upwork_logo} /></a>
                                <a target="_blank" href='https://wa.me/50946731710' ><img className="fiverr_logo" src={whatsapp_logo} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rotate_bg'>
                    <div className='image_box'>
                        <div className='image'>
                            <img src={hero_bg} alt='This is the hero background' />
                            <div className='hero_filter'></div>
                        </div>
                    </div>
                </div>

        
            </div>
        </section>
    )
}

export default Hero2