import React from 'react'
import "./Portfolio.css"
import quizeApp from "./Images/quizeApp.png"
import ecommerce from "./Images/ecommerce.png"
import movieApp from "./Images/movieApp.png"
import hotel from './Images/hotel.png'
import restaurant from './Images/restaurant.png'
import transport from './Images/transport.png'


import website1 from './Images/website1.PNG'
import website2 from './Images/website2.PNG'
import website3 from './Images/website3.PNG'
import website4 from './Images/website4.PNG'



// import truck_line from "./Images/truck_line.png"
// import whatsapp from "./Images/whatsapp.png"
// import youtube from "./Images/youtube.png"

function Portfolio({ classs }) {
    return (
        <section id='Portfolio'>

            <div className={`portfolio_container ${classs}`}>
                <div className='portfolio_containt'>
                    <h2>Mon Portfolio</h2>
                    <div>
                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                                <div className='img_box'>
                                    <img src="https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/photography_portfolio.jpg" alt='this is a porfolio image' />
                                </div>
                            </a>
                            <h3>Service de Photography</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'> <button>Visite</button></a>
                        </div>



                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                                <div className='img_box'>
                                    <img src={"https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/nettoyage_protfolio.jpg"} alt='this is a porfolio image' />
                                </div>
                            </a>
                            <h3>Service de Nettoyage</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'> <button>Visite</button></a>
                        </div>


                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                                <div className='img_box'>
                                    <img src={"https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/markething_portfolio.jpg"} alt='this is a porfolio image' />
                                </div>
                            </a>
                            <h3>Service de Markething</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'> <button>Visite</button></a>
                        </div>



                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                                <div className='img_box'>
                                    <img src={"https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/coaching_protfolio.jpg"} alt='this is a porfolio image' />
                                </div>
                            </a>
                            <h3>Service de Coaching</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'> <button>Visite</button></a>
                        </div>





                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'>
                                <div className='img_box'>
                                    <img src="https://raw.githubusercontent.com/PierreAndreLouis/images/main/image_portfolio_my_website/hotel_service_portfolio.jpg" alt='this is a porfolio image' />
                                </div>
                            </a>
                            <h3>Service Hôtel</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Hotel/'> <button>Visite</button></a>
                        </div>









                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Transport/'>
                                <div className='img_box'>
                                    <img src={transport} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Service de Transport</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Transport/'> <button>Visite</button></a>
                        </div>




                        {/* ------------------------------------------------------------------------ */}




                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio1/'>
                                <div className='img_box'>
                                    <img src={website1} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio1/'> <button>Visite</button></a>
                        </div>


                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio3/'>
                                <div className='img_box'>
                                    <img src={website3} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio3/'> <button>Visite</button></a>
                        </div>

                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio4/'>
                                <div className='img_box'>
                                    <img src={website4} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio4/'> <button>Visite</button></a>
                        </div>



                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio2/'>
                                <div className='img_box'>
                                    <img src={website2} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Portfolio Website</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/portfolio2/'> <button>Visite</button></a>
                        </div>


                        <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/quiz-app'>
                                <div className='img_box'>
                                    <img src={quizeApp} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Application de Quiz</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/quiz-app'> <button>Visite</button></a>
                        </div>

                       

                        <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/movie-trailer'>
                                <div className='img_box'>
                                    <img src={movieApp} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Movie Trailer</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/movie-trailer'> <button>Visite</button></a>
                        </div>

                        <div>
                            <a target='blank' href='https://louispierre-andre.github.io/Restaurant/'>
                                <div className='img_box'>
                                    <img src={restaurant} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Service de Restaurant</h3>
                            <a target='blank' href='https://louispierre-andre.github.io/Restaurant/'> <button>Visite</button></a>
                        </div>
           
                        {/* <div>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/ecommerce-web'>
                                <div className='img_box'>
                                    <img src={ecommerce} alt='This is an image of my project' />
                                </div>
                            </a>
                            <h3>Site e-commerce</h3>
                            <a target='blank' href='https://LouisPierre-Andre.github.io/ecommerce-web'> <button>Visite</button></a>
                        </div> */}
                  



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio