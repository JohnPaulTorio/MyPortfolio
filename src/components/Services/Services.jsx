import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services-container">
                <article className='service'>
                    <div className="service-head">
                        <h3>Frontend Development</h3>
                    </div>

                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Creating Static Websites using HTML, CSS and JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Teaching Web Fundamentals in JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Creating React App.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Deploying Web Applications in Github.</p>
                        </li>
                    </ul>
                </article>
                {/* end of Frontend Development */}
                <article className='service'>
                    <div className="service-head">
                        <h3>Backend Development</h3>
                    </div>

                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Can teach the basic fundamentals of MySQL and PHP</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Can collaborate in managing SQL Databases.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>With basic knowledge in Firebase Database.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Fluent in MongoDB and Firebase.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Can deploy and manage database in Microsoft SQL Database.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Backend Development */}
                <article className='service'>
                    <div className="service-head">
                        <h3>Java Programming</h3>
                    </div>

                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Can create Core JavaFX Applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Knowledgeable in Object Oriented Programming.</p>
                        </li>
                        <li>
                            <BiCheck className='service-list-icon' />
                            <p>Basic Knowledge in Data Structures and Algorithm using Java Programming Language.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services