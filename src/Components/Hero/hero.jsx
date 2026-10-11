

import './hero.css'

import logoImg from '../../imgs/logo.png'


export function Hero() {

    return (
        <div className='hero'>

            <div className='img-hero'>
                <img className='hero-logo' src={logoImg} alt="logo" />
            </div>

            <div className='info-hero'>
                <h2 className='a-font'>سَـــــاهِـــــر الــــديــــك</h2>
                <h3>Saher Al-Deek</h3>
                <h2 className='blue-text'>Front-End Developer</h2>
                <p className='dec-font'>الحياة ماشية فيك و بلاك فا حاول تمشي معها اذا ما تعلمت العلم عنده اهله و اذا ما نجحت النجاح عنده اهله</p>

                <div className="btn-hero">
                    <a href="#project">
                        <button className='btn'>Projects</button>
                    </a>

                    <a href="#skills">
                        <button className='btn'>Skills</button>
                    </a>
                </div>
            </div>

        </div>
    );
}