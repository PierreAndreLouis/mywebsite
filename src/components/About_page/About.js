import React from 'react'
import Hero_about from './Hero_about/Hero_about'
import hero_About from './Images/about.jpg'
import About_section from './About_section/About'
import Skills from './Skills_section/Skills'
import Service from './Service_section/Services'
import AboutSeo from '../seo/AboutSeo'

function About() {
    return (
        <div>
            <AboutSeo />
            <Hero_about title="A Propos" hero_img={hero_About} />
            <About_section />
            <Skills />
            <Service />

        </div>
    )
}

export default About