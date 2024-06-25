import React from 'react'
import './Hero_about.css'

// import hero_bg from '../Images/hero.png'
// import mobile_img from '../Images/Profile1.png'
// import upwork_logo from '../Images/upwork.png'
// import fiver_logo from '../Images/fiverr.png'


import upwork_logo from './Images/upwork_logo.png'
import fiver_logo from './Images/fiver_logo.png'
import linkedin_logo from './Images/linkedin_logo.png'
import whatsapp_logo from './Images/whatsapp_logo.png'

function Hero_about({ title, hero_img }) {
    return (
        <section id='About_page'>

            <div className='Hero2_container'>
                <div className='hero2_containt'>
                    <div className='hero'>
                        <h1>{title}</h1>
                        <h3>Pierre-Andre Louis</h3>
                        <h2>Développeur Web Front-End</h2>
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
                                <a target="_blank" href='https://www.linkedin.com/in/pierre-andr%C3%A9-louis-2b938224b/'><img className="fiverr_logo" src={linkedin_logo} /></a>
                                <a target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img className="fiverr_logo" src={fiver_logo} /></a>
                                <a target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img className="upwork_logo" src={upwork_logo} /></a>
                                <a target="_blank" href='https://wa.me/50946731710' ><img className="upwork_logo" src={whatsapp_logo} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rotate_bg'>
                    <div className='image_box'>
                        <div className='image'>
                            <img src={hero_img} alt='This is the hero background' />
                            <div className='hero_filter'></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero_about