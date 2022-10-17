import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qzs1tgn', 'template_wzichpu', form.current, '8LovdSHb8U8iNTpLz')

        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">
                    <article className='contact-option'>
                        <AiOutlineMail className='contact-option-icon' />
                        <h4>Email</h4>
                        <h5>toriojohnpaul6@gmail.com</h5>
                        <a href='mailto:toriojohnpaul6@gmail.com'>Send a message!</a>
                    </article>
                    <article className='contact-option'>
                        <RiMessengerLine className='contact-option-icon' />
                        <h4>Messenger</h4>
                        <h5>John Paul Torio</h5>
                        <a href='https://m.me/JohnPaulTorio13'>Send a message!</a>
                    </article>
                    <article className='contact-option'>
                        <RiMessengerLine className='contact-option-icon' />
                        <h4>Messenger</h4>
                        <h5>John Paul Torio</h5>
                        <a href='https://m.me/JohnPaulTorio13'>Send a message!</a>
                    </article>
                </div>
                {/* End of Contact Option */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required id="" />
                    <input type="text" name="email" placeholder='Your Email' required id="" />
                    <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact