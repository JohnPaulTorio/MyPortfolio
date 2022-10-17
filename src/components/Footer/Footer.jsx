import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href='#footer' className='footer-logo'>John Paul Torio</a>
            <ul className='permalinks'>
                <li><a href="#root">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href="https://facebook.com"><BsFacebook /></a>
                <a href="https://youtube.com"><BsYoutube /></a>
                <a href="https://instagram.com"><BsInstagram /></a>
                <a href="https://twitter.com"><AiOutlineTwitter /></a>
            </div>
            <div className="footer-copyright">
                <small>&copy; John Paul Torio | All Rights Reserved 2022</small>
            </div>
        </footer>
    )
}

export default Footer