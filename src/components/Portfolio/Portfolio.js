import React from 'react'
import Hero_about from '../About_page/Hero_about/Hero_about'
import hero_portfolio from './Images/bg (3).jpg'
// import Portfolio_section from '../Home_page/Portfolio/Portfolio'
import Gallery5 from '../Home_page/Portfolio/Gallery5'
import PortfolioSeo from '../seo/PortfolioSeo'

function Portfolio() {
  return (
    <div>
      <PortfolioSeo />
      <Hero_about title="Mon Portfolio" hero_img={hero_portfolio} />
      <Gallery5 />

    </div>
  )
}

export default Portfolio