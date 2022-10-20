import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';
const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMail />
                        <h4>Email</h4>
                        <h5>kayzinmg363@gmail.com</h5>
                        <a href='mailto:kayzinmg363@gmail.com' target='__blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>K Zin Maung</h5>
                        <a href='mailto:kayzinmg363@gmail.com' target='__blank'>Send a message</a>
                    </article>
                    <article className='contact__option' >
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href='https://api.whatsapp.com/send?phone=+959798951305' target='__blank'>Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}

                <form action=''>
                    <input type='text' name="name" placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder="Your Email" required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact