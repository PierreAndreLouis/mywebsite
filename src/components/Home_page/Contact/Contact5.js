import React from 'react'
import "./Contact5.css"
import emailjs from "emailjs-com"


function Contact5() {
    function sendMail(e) {
        
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            // object: document.getElementById("object").value,
            message: document.getElementById("message").value,
        };
        
        
        if (document.getElementById("name").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("message").value.length > 0) {
             
            e.preventDefault();
            const serviceID = "service_rx6j582";
            const templateID = "template_pwtjhm7";
            emailjs.init("mONZdJGpYsyxqm-oh");

            emailjs.send(serviceID, templateID, params)
                .then(res => {
                    // document.getElementById("name").value = "";
                    // document.getElementById("email").value = "";
                    // document.getElementById("object").value = "";
                    // document.getElementById("message").value = "";
                    console.log(res);
                    alert("Your message sent successfully!!")

                })
                .catch(err => console.log(err));
        }

    }
    return (
        <section id='Contact5'>
            <div className='contact_container'>
                <div className='contact_containt'>
                    <h2>Contactez-moi</h2>
                    <div>
                        <div>
                            <h3>Contactez-moi</h3>
                            <p>Je suis toujours disponible et ouvert à mes clients. Écris-moi un message pour me dire comment je peux t'aider. Même si ce n'est pas pour des affaires, n'hésite pas à me contacter. Je serai heureux de répondre.</p>
                            <div className='info_box'>
                                <div>
                                    <i class="bi bi-person-fill"></i>
                                    <div>
                                        <p>Nom:</p>
                                        <p>Louis Pierre-Andre</p>
                                    </div>
                                </div>
                                <div>
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <p>Address:</p>
                                        <p>La Vallee de Jacmel, Haiti</p>
                                    </div>
                                </div>
                                <div>
                                    <i class="bi bi-envelope-fill"></i>
                                    <div>
                                        <p>Email:</p>
                                        <p>webdeveloper3030 @gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <i class="bi bi-telephone-fill"></i>
                                    <div>
                                        <p>Phone:</p>
                                        <p>+509 46 73 10 10</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3>Envoie-moi un message</h3>
                            <form>
                                <label>Nom</label>
                                <input type='text' placeholder='Votre name' id='name' required />
                                <label>Email</label>
                                <input type='text' placeholder='Votre email' id='email' required />
                                <label>Message</label>
                                <textarea placeholder='ecrire un message' id='message' required />
                                <button type='submit' onClick={(e) => { sendMail(e) }} >Envoie</button>
                                   
                               
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact5
