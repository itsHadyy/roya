import React from 'react';

function Contact() {

    const img01 = '/media/banners/events02.png';
    const img02 = '/media/icons/phone.png';
    const img03 = '/media/icons/mail.png';
    const img04 = '/media/icons/pin.png';

    return (
        <div>
            <div className="banner events01">
                <h1>Contact Us</h1>
            </div>

            <div className='events02'>
                <div className='eventsMainContainer'>
                    <div className='contactContainer'>
                        <h2>Let's Get In Touch</h2>
                        <form>
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email Address' />
                            <input type="text" placeholder='Phone Number' />
                            <textarea placeholder='Message' />
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
                <div className='eventsMainContainer'>
                    <div className="event-content">
                        <img src={img01} alt="event-content" />
                        <div className='event-content-item'>
                            <div className='eventsHeader'>
                                <h1>Title of the paragraph</h1>
                                <p>12 - 12 - 2025</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Tempor hendrerit faucibus tincidunt quisque.
                                Faucibus consectetur commodo eu amet. Morbi at pretium ultrices arcu mattis. Fames duis
                                duis pretium pellentesque tristique praesent morbi. Nisi pellentesque ut tempus velit
                                amet dictumst eget. Donec malesuada interdum vitae nunc id in ac id. Imperdiet in non
                                sagittis bilendum in tempus eget. Amet consectetur quisque bilendum et habitasse dolor
                                cursus vitae. Sit ullamcorper in urna dui ut risus imperdiet ullamcorper eget hac.
                            </p>
                            <a href="" className="read-more">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;