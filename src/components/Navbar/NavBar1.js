import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar1.css";

function NavBar1() {
    const [showNav, setShowNav] = React.useState(false)
    const [navBar, setNavBar] = React.useState(false)

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
            // behavior: 'smooth'
        });
    };

    ////////////////////////////////////////////////////////////////////

    let scrollPos = 0;
    function checkPosition() {
        let windowY = window.scrollY;

        if (windowY < 350) {
            setNavBar(false)
        } else {
            setNavBar(true)
        }
        scrollPos = windowY;
    }

    window.addEventListener('scroll', checkPosition);

    console.log(navBar)


    return (
        <div id="NavBar1" className={`${showNav && " active"} ${navBar ? "color_white" : "color_transparent"}`}>
            <div className='navbar_containt'>
                <div className='logo_section'>
                    <h3>Pierre-<span>Andre</span></h3>
                    <i onClick={() => { setShowNav(!showNav) }} class="bi bi-list"></i>
                </div>
                <ul onClick={() => { setShowNav(!showNav) }}>
                    <Link className='Link' onClick={() => { handleClick() }} to="/portfolio"><li>Home</li></Link>
                    <Link className='Link' onClick={() => { handleClick() }} to="/About"><li >About</li></Link>
                    <Link className='Link' onClick={() => { handleClick() }} to="/Projects"><li >Portfolio</li></Link>
                    <Link className='Link' onClick={() => { handleClick() }} to="/Contact"><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar1