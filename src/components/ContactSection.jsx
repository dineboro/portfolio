import React from 'react';

import ContactForm from './ContactForm';

function ContactSection(){
    return(
        <div className="contact__text">
            <div className="container">
                <div className="row">
                    
                    <div className="cf__col">
                        <ContactForm/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactSection;