import React, {useState} from "react";
import emailjs from 'emailjs-com';
import './ContactForm.elements.css';
import FlashMessage from "react-flash-message";
import Pulse from 'react-reveal/Pulse';

export default function ContactForm() {
    const [status, setStatus] = useState(false);
    const sendEmail = e =>{
        e.preventDefault();
        setStatus(true);

        emailjs.sendForm('service_q1re5gd', 'template_g6uk99a', e.target, 'user_NMVZ37RFNdsU15Wtvxjnc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return(
        <>
            <form onSubmit={sendEmail}>
                <h1>Conact us</h1>
                <div className="wrapper">
                    <div className="right">
                        <div className="field">
                            <input type="text" name="name" id="name" placeholder="Full name" />
                        </div>
                        <div className="field">
                            <input type="text" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div className="field">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="field">
                            <input type="text" name="phone" id="phone" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className="left">
                        <div className="field">
                            <textarea type="text" name="message" id="message" placeholder="Message" />
                        </div>
                        <input type="submit" value="send Message"/>
                        {status && (
                            <Pulse>
                                <FlashMessage duration={5000}>
                                    <div className="flash">Your message has been sent !</div>
                                </FlashMessage>
                            </Pulse>
                        )}
                    </div>
                </div>
            </form>
        </>
    )
}
