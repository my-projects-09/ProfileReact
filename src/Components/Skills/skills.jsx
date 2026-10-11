import './skills.css'

import cssImg from '../../imgs/css.png'
import htmlImg from '../../imgs/html.png'
import jsImg from '../../imgs/js.png'
import reactImg from '../../imgs/react.png'
import pythonImg from '../../imgs/python.png'

const skills = [

    { name: ' HTML5 ', img: htmlImg, alt: 'HTML logo', s1: '<', s2: '/>' },

    { name: ' CSS', img: cssImg, alt: 'CSS logo', s1: '#', s2: '' },

    { name: ' JavaScript ', img: jsImg, alt: 'JS logo', s1: '{', s2: '}' },

    { name: ' React JS', img: reactImg, alt: 'React logo', s1: '⚛', s2: '' },

    { name: ' Python ', img: pythonImg, alt: 'Python logo', s1: '(', s2: ')' },
]

export function Skills() {

    return (
        <div className='skills-cont' id='skills'>
            <h1 className='blue-text'>// My skills</h1>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>

                        <h3>
                            <span>{skill.s1}</span>
                            {skill.name}
                            <span>{skill.s2}</span>
                        </h3>

                        <img className='skill-img' src={skill.img} alt={skill.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}