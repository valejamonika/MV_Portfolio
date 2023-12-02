import React, { useRef } from 'react';
import './contact.css';
// import walmart from '../../assets/walmart.png';
// import microsoft from '../../assets/microsoft.png';
// import adobe from '../../assets/adobe.png';
// import facebok from '../../assets/facebook.png';
import facebookicon from '../../assets/facebook-icon.png';
import twittericon from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import youtubeicon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6ury45e', 'template_wwg3o6q', form.current, 'v5EKhFETQKLVVqdQ9')
            .then((result) => {
                console.log(result.text);
                alert("Email Sent Successfully....!")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contactpage">
            {/* <div id="clients">
                <h1 className="contactpagetitle">My clients</h1>
                <p className="clientdesc">I have had the oopertunity to work with various client and diverse group of companies.
                    Some of the notable companies. I have worked with.</p>
                <div className="clientimgs">
                    <img src={walmart} alt="Wallmart" className="clientimg" />
                    <img src={microsoft} alt="Microsoft" className="clientimg" />
                    <img src={adobe} alt="Adobe" className="clientimg" />
                    <img src={facebok} alt="Facebook" className="clientimg" />
                </div>
            </div> */}
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactdesc">Please fill out the form below to discuss any work oppurtunities.</span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name="your_name" />
                    <input type="email" className="email" placeholder='Your Email Address' name="your_email" />
                    <textarea class="msg" name="message" rows="10" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitbtn">Submit</button>
                    <div className="links">
                        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img src={facebookicon} alt="Facebbok" className="link" /></a>
                        <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target="_blank" rel="noreferrer"><img src={twittericon} alt="Twitter" className="link" /></a>
                        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram" className="link" /></a>
                        <a href='https://www.youtube.com/' target="_blank" rel="noreferrer"><img src={youtubeicon} alt="Youtube" className="link" /></a>
                        
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Contact