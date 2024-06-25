import React from 'react'

import About3  from './About3/About3'
import Skill1 from './Skill1/Skill1'
import Service from './Services/Service5'
import Service4 from './Service4/Service4'
import Portfolio4 from "./Portfolio4/Portfolio4"
import Process from './Process/Service_2_Process'
import Contact from './Contact/Contact5'
import Contact1 from './Contact1/Contact1'
import Hero2 from './Hero2/Hero2'



function Home_page() {
    return (
        <div>
            <Hero2 />
            <About3 />
            <Service />
            <Service4 />
            <Skill1 />
            <Process />
            <Portfolio4 />
            <Contact1 />
        </div>
    )
}

export default Home_page