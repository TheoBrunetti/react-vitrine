import React from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>135 rue de L'innovation</p>
                            <p>73100 Aix-Les-Bains</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard
                                text="0651525354"
                                className="hover"
                            >
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() =>
                                        alert("Numéro de téléphone copié !")
                                    }
                                >
                                    06 51 52 53 54
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard
                                text="theobrunettipro@gmail.com"
                                className="hover"
                            >
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() =>
                                        alert("Addresse mail copié !")
                                    }
                                >
                                    theobrunettipro@gmail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credit">
                        <p>Théo Brunetti - 2023</p>
                    </div>
                </div>
                <Buttons left={"/projet-4"} />
            </div>
        </main>
    );
};

export default Contact;
