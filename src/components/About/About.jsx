import React from 'react'
import './about.css'
import ME from '../../assets/mee.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className='about-card'>
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>Fresh Graduate</small>
                        </article>

                        <article className='about-card'>
                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <small>None</small>
                        </article>

                        <article className='about-card'>
                            <VscFolderLibrary className='about-icon' />
                            <h5>Projects</h5>
                            <small>3 Completed</small>
                        </article>
                    </div>

                    <p>Computer Engineering fresh graduate with background in Web Development and Java Programming. Proficient in Computer Troubleshooting and Maintenance and Computer Servers. Have a basic knowledge in MySQL Databases and queries.  Highly organized, proactive, and punctual with team-oriented mentality.</p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About