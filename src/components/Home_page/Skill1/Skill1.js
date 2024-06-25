import React from 'react'
import './Skill1.css'



import html_icon from './images/Logo/html_logo.png'
import css_icon from './images/Logo/CSS3_logo.png'
import javascript_icon from './images/Logo/JavaScript_logo.png'
import react_icon from './images/Logo/ReactJS_logo.png'
import Cplus_icon from './images/Logo/c_plus.png'
import cisco_icon from './images/Logo/cisco2.png'
import illustrator_icon from './images/Logo/Illustrator_Logo.png'
import java_logo from './images/Logo/java.png'
import mysql_icon from './images/Logo/MySQL_Logo.png'
import oracle_icon from './images/Logo/oracle.png'
import photoshop_icon from './images/Logo/Photoshop_Logo.png'
import bootstrap_icon from './images/Logo/Bootstrap_logo.png'
import php_logo from './images/Logo/php_logo.jpg'






function Skill1() {
    return (
        <section id='Skill_1'>
            <div className='Container'>
                <div className='title_section'>
                    <h4>Mes Competences</h4>
                    <h2>Mes Principaux Outils</h2>
                </div>
                <div className='skills'>
                    <div className='skill1 html'>
                        <div className='icon_box'>
                            <img src={html_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>HTML</p>
                    </div>

                    <div className='skill1 css'>
                        <div className='icon_box'>
                            <img src={css_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>CSS</p>
                    </div>

                    <div className='skill1 javascript'>
                        <div className='icon_box'>
                            <img src={javascript_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>JavaScript</p>
                    </div>

                    <div className='skill1 react'>
                        <div className='icon_box'>
                            <img src={react_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>React JS</p>
                    </div>

                    <div className='skill1 bootstrap'>
                        <div className='icon_box'>
                            <img src={bootstrap_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>Bootstrap</p>
                    </div>

                    <div className='skill1 cplus'>
                        <div className='icon_box'>
                            <img src={Cplus_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>C++</p>
                    </div>

                    <div className='skill1 java'>
                        <div className='icon_box'>
                            <img src={java_logo} alt='This is a icon of a slill' />
                        </div>
                        <p>JAVA</p>
                    </div>

                    <div className='skill1 php'>
                        <div className='icon_box'>
                            <img src={php_logo} alt='This is a icon of a slill' />
                        </div>
                        <p>PHP</p>
                    </div>

                    <div className='skill1 illustrator'>
                        <div className='icon_box'>
                            <img src={illustrator_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>Illustrator</p>
                    </div>

                    <div className='skill1 photoshop'>
                        <div className='icon_box'>
                            <img src={photoshop_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>Photoshop</p>
                    </div>

                    <div className='skill1 mysql'>
                        <div className='icon_box'>
                            <img src={mysql_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>mysql</p>
                    </div>

                    <div className='skill1 oracle'>
                        <div className='icon_box'>
                            <img src={oracle_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>oracle</p>
                    </div>

                   

                    {/* <div className='skill1'>
                        <div className='icon_box'>
                            <img src={Cplus_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>C++</p>
                    </div> */}

                    {/* <div className='skill1'>
                        <div className='icon_box'>
                            <img src={css_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>CSS</p>
                    </div> */}

                    {/* <div className='skill1'>
                        <div className='icon_box'>
                            <img src={html_icon} alt='This is a icon of a slill' />
                        </div>
                        <p>HTML</p>
                    </div> */}

                </div>

            </div>
        </section>
    )
}

export default Skill1


// html
// css
// javascript
// react js
// c++


// bootstrap
// photoshop
// illustrator
// mysql
// oracle
// java
// php