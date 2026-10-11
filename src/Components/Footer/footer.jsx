import './footer.css'

import logoImg from '../../imgs/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faGithub,
    faInstagram,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons'

import {
    faUserGraduate,
    faCode,
    faGamepad,
    faEarthEurope
} from '@fortawesome/free-solid-svg-icons'

import {
    faEnvelope
} from '@fortawesome/free-regular-svg-icons'



const footerInfo = [

    { text: 'School Student', icon: faUserGraduate, type: 'about' },
    { text: 'I Love Coding', icon: faCode, type: 'about' },
    { text: 'I Love Games', icon: faGamepad, type: 'about' },
    { text: 'From Jordan', icon: faEarthEurope, type: 'about' },


    { text: 'Instagram', icon: faInstagram, type: 'contact', link: 'https://www.instagram.com/saher._.0.9/' },
    { text: 'GitHub', icon: faGithub, type: 'contact', link: 'https://github.com/my-projects-09/' },
    { text: 'X - Twitter', icon: faXTwitter, type: 'contact', link: 'https://x.com/SaherDeek36036' },
    { text: 'Email', icon: faEnvelope, type: 'contact' }
]


const about = footerInfo.filter((item) => item.type === 'about')
const contact = footerInfo.filter((item) => item.type === 'contact')



export function Footer({ openEmailModal }) {

    return (
        <div className="footer">

            <div className="contact-about" id='about'>
                <h2 className='blue-text m'>// About</h2>
                {about.map((item, index) => (

                    <div className='icon-cont' key={index}>

                        <div className='icons icon-box'>
                            <FontAwesomeIcon icon={item.icon} />
                        </div>

                        <h3>{item.text}</h3>
                    </div>

                ))}
            </div>

            <div className='logo-contact' id='contact'>

                <div className='footer-logo-cont'>
                    <img className='footer-logo' src={logoImg} alt="logo" />
                    <h5>© 2026 Saher Al-Deek — Built with 💙</h5>
                </div>

                <div className="contact-about">
                    <h2 className='blue-text m'>// Contact</h2>

                    {contact.map((item, index) => (
                        <a className="icon-cont" key={index} href={item.link} rel="noopener noreferrer" target='_blank' onClick={ openEmailModal }>

                            <div className="icons icon-box">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>

                            <h3>{item.text}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}