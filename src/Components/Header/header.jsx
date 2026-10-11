
import './header.css'

import '../../App.css'


import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Header({toggleMenu, closeMenu, menuOpen}) {

    return (
        <div className="header" onClick={closeMenu}>
            <h2 className='logo-font2'>SAHER<span className='logo-font blue-text'>.dev</span></h2>

            <nav className='nav'>
                <a href="#skills">Skills</a>
                <a href="#project">Projects</a>
                <a href="#about">About</a>
            </nav>

            <a className='btn contact-me' href="#contact">
                <FontAwesomeIcon icon={faPaperPlane}/> Contact me
            </a>

            <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={(e) => {e.stopPropagation(); toggleMenu()}} />

            {menuOpen && (
                <div className='menu' onClick={(e) => e.stopPropagation()}>

                    <a className='menu-link' href="#skills" onClick={closeMenu}>Skills</a>
                    <a className='menu-link' href="#project" onClick={closeMenu}>Projects</a>
                    <a className='menu-link' href="#about" onClick={closeMenu}>About</a>

                    <hr />
                    <br />
                    <a className='btn' href="#contact"><FontAwesomeIcon icon={faPaperPlane}/> Contact me</a>
                </div>
            )}
        </div>
    )
}