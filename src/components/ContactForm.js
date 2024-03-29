import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".formMessage");

        emailjs
            .sendForm(
                "service_rzze68m",
                "template_fkcq5np",
                form.current,
                process.env.REACT_APP_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    formMess.innerHTML =
                        "<p className='success'>Message bien envoyé !</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);
                },
                (error) => {
                    console.log(error.text);
                    formMess.innerHTML =
                        "<p className='error'> Une erreur s'est produite, veuillez réessayer</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);
                }
            );
    };

    return (
        <div className="form-container">
            <h2>Contactez-nous</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label>Nom</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    required
                    autoComplete="off"
                    id="name"
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="exemple@exemple.com"
                    required
                    autoComplete="off"
                    id="email"
                />
                <label>Message</label>
                <textarea
                    name="message"
                    required
                    autoComplete="off"
                    id="mess"
                />
                <input type="submit" value="Envoyer" className="hover button" />
            </form>
            <div className="form-message"></div>
        </div>
    );
};

export default ContactForm;
