
import './project.css'

import quranImg from '../../imgs/quran.png'
import arselImg from '../../imgs/arsel.png'


const projects = [

    {
        name: 'Quran Kareem', img: quranImg, isReady: true, alt: 'Quran img',
        desc: "A beautiful Quran recitation platform ... view project!",
        link: 'https://my-projects-09.github.io/Quran-web/'
    },

    {
        name: 'Arsel Chat', img: arselImg, isReady: false, alt: 'Arsel logo',
        desc: "A real-time chat application ... coming soon!",
        link: ''
    },

]



export function Projects() {

    return (
        <div className="projects-cont" id='project'>
            <h1 className='blue-text'>// My Projects</h1>

            <div className="projects-box">
                {projects.map((project, index) => (
                    <div className='project-card' key={index}>
                        <img className='project-img' src={project.img} alt={project.alt} />

                        <div className="text-project">
                            <h2>{project.name}</h2>
                            <p className='project-desc'>{project.desc}</p>
                        </div>

                        <a className={` ${project.isReady === true ? ' active-btn' : ' unactive-btn'}`} 
                            href={project.link} target="_blank" rel="noopener noreferrer"
                        >
                            {project.isReady === true ? 'View project' : 'coming soon'}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}