import React from 'react'
import './About3.css'
import { Link } from 'react-router-dom'

// import about_img from './images/profil_pic.png';
// import about_img from './images/profil picture.png';
import about_img from './images/Profil Img.png';



function About3() {


    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
        // behavior: 'smooth'
      });
    };
  
  return (
    <div>
      <main id='About_3'>

        <div className='Container'>
          <div className='title_section'>
            <h1>À propos de moi.</h1>
            <p>Je crée des expériences web uniques et engageantes en tant que développeur front-end. Je vais donner vie à vos idées en ligne.</p>
          </div>
          <div className='Containt'>

            <div className='img_box'>
              <div className='img_design'></div>
              <div className='img_design2'></div>
              <div className='img_box2'>
                <img src={about_img} alt='this is a profil image' />
              </div>
            </div>

            <div className='description'>
              <h2>Qui suis-je ?</h2>
              <p>Salut, moi c'est Pierre-Andre! Je suis un développeur web front-end, spécialisé dans la création de sites internet personnalisés. J'adore concevoir des expériences utilisateur uniques et intuitives. Mon objectif est de transformer tes idées en une présence en ligne esthétique et efficace.</p>
              
              <ul>
                <h4 className='about_point_title'>Voici les services que je propose :</h4>
                <li> Création de sites web personnels pour CV en ligne </li>
                <li>Conception de sites web portfolio </li>
                <li>Développement de sites web pour services professionnels</li>
                <li>Création de ton Identité Visuelle</li>
              </ul>
              <div className='btn_section'>
                <Link to="/About" onClick={() => { handleClick() }}>
                  <button className='voir_plus'>Voir Plus</button>
                </Link>
                <Link to="/Contact" onClick={() => { handleClick() }}>
                  <button className='contactez_moi'>Contactez-moi</button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default About3