import React, { useState } from 'react';

function Contact() {

    const img02 = '/media/icons/phone.png';
    const img03 = '/media/icons/mail.png';
    const img04 = '/media/icons/pin.png';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send message, please try again.');
        }
    };

    return (
        <div>
            <div className="banner events01">
                <h1>Contact Us</h1>
            </div>

            <div className='events02'>
                <div className='eventsMainContainer'>
                    <div className='contactContainer'>
                        <h2>Let's Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Full Name'
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email Address'
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Phone Number'
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Message'
                                required
                            />
                            <br />
                            <button type='submit' className='btn'>Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='eventsMainContainer'>
                    <div className='contactInfoContainer'>
                        <div className='contactCard'>
                            <img src={img02} alt="contact-card" />
                            <h3>Hotline</h3>
                            <p>16466</p>
                        </div>
                        <div className='contactCard'>
                            <img src={img03} alt="contact-card" />
                            <h3>Email</h3>
                            <p>Info@royadevelopments.com</p>
                        </div>
                        <div className='contactCard'>
                            <img src={img04} alt="contact-card" />
                            <h3>Headquarters</h3>
                            <h4>Heliopolis</h4>
                            <p>3/1150 Emtedad Abdel Hameed Badawy St., Sheraton Buildings Heliopolis, Cairo, Egypt, 11799</p>
                        </div>
                        <div className='contactCard'>
                            <img src={img04} alt="contact-card" />
                            <h3>New Cairo Sales Office</h3>
                            <h4>Fifth Settlement</h4>
                            <p>Plot 69, Sector 1, Fifth Settlement, New Cairo, Egypt</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;