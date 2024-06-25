import React from 'react'
import Hero_about from '../About_page/Hero_about/Hero_about'
import hero_contact from './Images/contact_hero2.jpg'
import Contact from '../Home_page/Contact/Contact5'
import "./Contact_page.css"


function Contact_page() {
  return (
      <div className='Contact_page_container'>
      <Hero_about title="Contactez-moi" hero_img={hero_contact} />
      <Contact />

    </div>
  )
}

export default Contact_page