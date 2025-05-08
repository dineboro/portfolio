import React, {useState} from 'react';


const ContactForm = () =>{
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting]= useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validate = () =>{
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()){
            newErrors.email = 'Email is required';
            
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trimEnd()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        if (errors[name]){
            setErrors({...errors, [name]: ''});
        }
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!validate()) return;

        setIsSubmitting(true);


        try{
            // Replace with my submission logic (EmailJS or API call)       
            console.log('Submitting:', formData);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call       
            setSubmitStatus('success');       
            setFormData({ name: '', email: '', message: '' }); // Reset form     
            } catch (error) {       
                setSubmitStatus('error');     
            } finally {       
                setIsSubmitting(false);     
            }   
        };    
        return (     
        <div className="contact-form-container">
            <h2>Contact</h2>       
            {submitStatus === 'success' && (         
                <div className="success-message">           
                Thank you! Your message has been sent successfully.         
                </div>       
            )}  

            {submitStatus === 'error' && (
                <div className="error-message">
                    Something went wrong. Please try again.
                </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ?'error':''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}className={errors.email ? 'error' : ''}
                    />
                     {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <div className="contact__button">
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                </div>
                
            </form>
        </div>
    );
};

export default ContactForm;