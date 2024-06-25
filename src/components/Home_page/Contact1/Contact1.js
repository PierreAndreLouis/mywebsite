import React from 'react'
import './Contact1.css'

function Contact1() {
    return (
        <div>
            <main id='Contact_1'>
                <div className='Container'>
                    <div className='contact_design'></div>
                    <form>
                        <h2>Contactez-moi</h2>
                        <p>Sentez-vous libre de nous contacter à tout moment. Nous vous répondrons dès que possible.</p>
                        <label>Nom</label>
                        <input type='text' placeholder='Your name' />
                        <label>E-mail</label>
                        <input type='text' placeholder='Your Email' />
                        <label>Message</label>
                        <textarea type='text' placeholder='Your Message' />
                        <button>Envoyer</button>
                    </form>
                    <div className='info'>
                        <h3>Info</h3>
                        <div className='info1'>
                            <div className='icon'><i class="bi bi-envelope-at-fill"></i></div>
                            <p>webdev3030@gmail.com</p>
                        </div>
                        <div className='info1'>
                            <div className='icon'><i class="bi bi-telephone-fill"></i></div>
                            <p>(+509) 4673-1710</p>
                        </div>
                        <div className='info1'>
                            <div className='icon'><i class="bi bi-geo-alt-fill"></i></div>
                            <p>Jacmel, Haiti</p>
                        </div>
                        <div className='info1'>
                            <div className='icon'><i class="bi bi-alarm-fill"></i></div>
                            <p>24/24 heures</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact1