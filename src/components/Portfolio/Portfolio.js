import React from 'react'
import Hero_about from '../About_page/Hero_about/Hero_about'
import hero_portfolio from './Images/bg (3).jpg'
import Portfolio_section from '../Home_page/Portfolio/Portfolio'

function Portfolio() {
  return (
    <div>
      <Hero_about title="Mon Portfolio" hero_img={hero_portfolio} />
      <Portfolio_section classs = "portfolio"/>

    </div>
  )
}

export default Portfolio