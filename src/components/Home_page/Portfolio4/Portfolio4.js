import React from 'react'
import './Portfolio4.css'
import { Link } from 'react-router-dom'


function Portfolio4() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };

    return (
        <section id='Portfolio_4'>
            <div className='Container'>
                <div className='title_section'>
                    <h4>Mon travail</h4>
                    <h2>Dernière réalisation de projet</h2>
                </div>
            
                <main>
            







                    <div className='portfolio1'>
                        <a target='blank' href='https://photograph-service.onrender.com//'>
                            <div className='img_box'>
                                <img src="https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/photography_portfolio.jpg" alt='this is a porfolio image' />
                            </div>
                        </a>
                        <a target='blank' href='https://photograph-service.onrender.com//'>
                            <div className='description'>
                                <h4>Service de photograph</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>


                    <div className='portfolio1'>
                        <a target='blank' href='https://cleaning-uauq.onrender.com/'>
                            <div className='img_box'>
                                <img src={"https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/nettoyage_protfolio.jpg"} alt='this is a porfolio image' />
                            </div>
                        </a>
                        <a target='blank' href='https://cleaning-uauq.onrender.com/'>
                            <div className='description'>
                                <h4>Service de nettoyage</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>




                    <div className='portfolio1'>
                        <a target='blank' href='https://markething.onrender.com/'>
                            <div className='img_box'>
                                <img src={"https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/markething_portfolio.jpg"} alt='this is a porfolio image' />
                            </div>
                        </a>
                        <a target='blank' href='https://markething.onrender.com/'>
                            <div className='description'>
                                <h4>Service de Markething</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>



                    <div className='portfolio1'>
                        <a target='blank' href='https://coaching-pro.onrender.com/'>
                            <div className='img_box'>
                                <img src={"https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/coaching_protfolio.jpg"} alt='this is a porfolio image' />
                            </div>
                        </a>
                        <a target='blank' href='https://coaching-pro.onrender.com/'>
                            <div className='description'>
                                <h4>Service de Coaching</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div>


                    <div className='portfolio1'>
                        <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                            <div className='img_box'>
                                <img src="https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/hotel_service_portfolio.jpg" alt='this is a porfolio image' />
                            </div>
                        </a>
                        <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                            <div className='description'>
                                <h4>Service d'Hotel</h4>
                                <p>Html, css, Javascript and React JS</p>
                            </div>
                        </a>
                    </div> 






                </main>
                <div className='btn_section'>
                    {/* <button>Look More</button> */}
                    <Link to="/Projects" onClick={() => { handleClick() }}>
                        <button>Tous les Projects</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio4