import React from 'react'
import ResponsiveAppBar from '../../Component/Navbar/Navbar'
import './Contact_us.css'
import Footer from '../../Component/Footer/Footer'

function Contact_us() {
    return (
        <div className='contact-us-main'>
            <ResponsiveAppBar />
            <div className='contact-top-div-bg'>
                <div className="top-section-center-div">
                    <div>
                        <img className='arabic-img' src="/Images/arabic.png" alt="arabic" />
                    </div>
                    <p className="top-section-english-text">
                        The best amongst you is the one who learns the <br /> Qur'an and teaches it{' '}
                    </p>
                    <a
                        href="https://wa.me/923194908790"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="top-section-button"
                    >
                        Book a Free Trial
                    </a>
                </div>


            </div>
            <div className='contact-content-wraper'>
                <p className='contact-text'>Contact Us</p>
                <p className='contact-sb-text'>We’re here to help! Whether you have a question about our services, need technical support, or just want to say hello, we’d love to hear from you.</p>
                <div className='contact-us-iner-wraper'>
                    <div className='conact-us-left-side'>
                        <p className='get-in-text'>Get In Touch</p>
                        <p className='get-sb-text'>We’re here to help! Whether you have a question about our services, need technical support, or just want to say hello, we’d love to hear from you.</p>
                        <div className='logos-or-text-wraper'>
                            <div className='logos-or-text-wrape-first'>
                                <img className='logo-address' src='/Images/home.png' alt='home' />
                                <div className='contact-home-wrape'>
                                    <p className='contact-address'>Address</p>
                                    <p className='contact-address-sb-text'>Islamabad/Rawalpindi, Pakistan</p>

                                </div>

                            </div>
                            <div className='logos-or-text-wrape-first'>
                                <img className='logo-address' src='/Images/phone.png' alt='home' />
                                <div className='contact-home-wrape'>
                                    <p className='contact-address'>Phone Number</p>
                                    <p className='contact-address-sb-text'>+923194908790</p>

                                </div>

                            </div>
                            <div className='logos-or-text-wrape-first'>
                                <img className='logo-address' src='/Images/whatsapp.png' alt='home' />
                                <div className='contact-home-wrape'>
                                    <p className='contact-address'>Whatsapp</p>
                                    <p className='contact-address-sb-text'>+923194908790</p>

                                </div>

                            </div>
                            <div className='logos-or-text-wrape-first'>
                                <img className='logo-address' src='/Images/email.png' alt='home' />
                                <div className='contact-home-wrape'>
                                    <p className='contact-address'>Email</p>
                                    <p className='contact-address-sb-text'>taleemulquranservices@gmail.com</p>

                                </div>

                            </div>

                        </div>
                        <div className='line-img-wraper-contact'>
                            <img src='/Images/bottom-line.png' alt='line' />

                        </div>
                        <div className='social-links-contact-div-wrape-uper'>
                            <p className='folow-text'>Follow us:</p>
                            <div className='social-links-contact-div-wrape'>
                                <img className='follow-logo-img' src='/Images/tiktok-bottom.png' alt='social' />
                                <img className='follow-logo-img' src='/Images/insta-bottom.png' alt='social' />
                                <img className='follow-logo-img' src='/Images/face-bottom.png' alt='social' />
                                <img className='follow-logo-img' src='/Images/x-bottom.png' alt='social' />
                                <img className='follow-logo-img' src='/Images/email-bottom.png' alt='social' />

                            </div>
                        </div>

                    </div>
                    <div className='conact-us-right-side'>
                        <div className="form-container">
                            <h1 className="form-title">Send A Message</h1>
                            <form className="form-second">
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="form-input"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="form-input"
                                />
                                <textarea
                                    placeholder="Enter Message"
                                    className="form-textarea"
                                />
                                <div className='contact-form-bottom-btn'>
                                    <button type="submit" className="form-button">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                {/* <div className='location-img-wrape'>
                <img src='/Images/location-img.png' alt='location-img' />
            </div> */}

            </div>

            <Footer />

        </div>
    )
}

export default Contact_us
