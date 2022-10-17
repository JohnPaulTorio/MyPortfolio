import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/john-paul-torio-24b66a1b9/"><BsLinkedin /></a>
            <a href="https://github.com/JohnPaulTorio"><BsGithub /></a>
            <a href="https://www.facebook.com/JohnPaulTorio13/"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocials