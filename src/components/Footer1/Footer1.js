import React from 'react'
import "./Footer1.css"
import bg_image from './Images/image (1).jpg'
import image1 from './Images/hotel.png'
import image2 from './Images/transport.png'
import image3 from './Images/website1.PNG'
import image4 from './Images/website2.PNG'
import image5 from './Images/website3.PNG'
import image6 from './Images/website4.PNG'


import { Link } from 'react-router-dom';



import upwork_logo from './Images/upwork_logo.png'
import fiver_logo from './Images/fiver_logo.png'
import linkedin_logo from './Images/linkedin_logo.png'
import whatsapp_logo from './Images/whatsapp_logo.png'





// import bg_portfolio1 from "./images/"
// import bg_portfolio2 from "./images/"
// import bg_portfolio3 from './images/'
// import bg_portfolio4 from "./images/"
// import bg_portfolio5 from './images/'


function Footer1() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };
    return (
        <section id='Footer_1'>
            <div className='footer_container'>
                <div className='footer_containt'>
                    <div className='block block1'>
                        <h2>Pierre-André LOUIS</h2>
                        <p>Je crée des sites web personnalisés qui permettent à mes clients de présenter leur profil, leur portfolio ou leurs services de manière professionnelle.</p>
                        <div className='info'>
                            <p>Email: webdeveloper3030 @gmail.com</p>
                            <p>Phone: (+509) 4673-1710</p>
                        </div>
                        <div className='icon_section'>
                            <a target="_blank" href='https://www.linkedin.com/in/pierre-andr%C3%A9-louis-3a64a6279/'><img className="fiverr_logo" src={linkedin_logo} /></a>
                            <a target="_blank" href="https://www.fiverr.com/webdeveloper_pr" > <img className="fiverr_logo" src={fiver_logo} /></a>
                            <a target="_blank" href='https://www.upwork.com/freelancers/~017c6fdbed2e590223' ><img className="upwork_logo" src={upwork_logo} /></a>
                            <a target="_blank" href='https://wa.me/50946731710' ><img className="fiverr_logo" src={whatsapp_logo} /></a>
                        </div>
                    </div>

                    <div className='block block2'>
                        <h2>Liens Rapide</h2>
                        <Link className='Link' onClick={() => { handleClick() }} to="/portfolio">Home</Link>
                        <Link className='Link' onClick={() => { handleClick() }} to="/About">About</Link>
                        <Link className='Link' onClick={() => { handleClick() }} to="/Projects">Portfolio</Link>
                        <Link className='Link' onClick={() => { handleClick() }} to="/Contact">Contact</Link>

                    </div>

                    <div className='block block3'>
                        <h2>Services</h2>
                        <p>Sites Web Personnel</p>
                        <p>Création Sites web portfolio</p>
                        <p>Site pour Services Offerts</p>
                        {/* <p>Web applicaton</p> */}
                    </div>

                    <div className='block block4'>
                        <h2>Portfolio</h2>
                        <div className='images_section'>
                            <a target='blank' href='https://louispierre-andre.github.io/Transport/'><img src={image1} alt='This is an image from our instagram account' /></a>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'><img src={image2} alt='This is an image from our instagram account' /></a>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio1/'><img src={image3} alt='This is an image from our instagram account' /></a>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio2/'><img src={image4} alt='This is an image from our instagram account' /></a>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio3/'><img src={image5} alt='This is an image from our instagram account' /></a>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio4/'><img src={image6} alt='This is an image from our instagram account' /></a>
                        </div>
                    </div>
                </div>

                <img className='image_bg' src={bg_image} />
            </div>
        </section>
    )
}

export default Footer1