import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-top-div'>
                <img src='/Images/main22.png' alt='footer-img' />
                <p className='bottom-text-with-link'>Do you have any questions or need any assistance? <a className='link-text' href="https://wa.me/923194908790" target="_blank" rel="noopener noreferrer">
                    Chat With Us:
                </a></p>
            </div>
            <div className='footer-wraper'>
                <div className='footer-left-side-wrape'>
                    <div className='footer-column1'>
                        <p className='bottom-contact'>Contact</p>
                        <div className='links-footer-wraper'>
                            <p className='foter-link-text'>
                                Islamabad/Rawalpindi Pakistan
                            </p>
                            <p className='foter-link-text'>
                                +923194908790
                            </p>
                            <p className='foter-link-text'>
                                taleemulquranservices@gmail.com
                            </p>
                        </div>

                    </div>
                    <div className='footer-column1'>
                        <p className='bottom-contact'>LINKS</p>
                        <div className='links-footer-wraper'>
                            <p className='foter-link-text'>
                                About Us
                            </p>
                            <p className='foter-link-text'>
                                Courses
                            </p >
                            <p className='foter-link-text'>
                                contact
                            </p>
                        </div>

                    </div>
                    <div className='footer-column1'>
                        <div className='links-footer-wraper'>
                            <p className='foter-link-text'>
                                Our Blog
                            </p>
                            <p className='foter-link-text'>
                                Book a Free Trail
                            </p>
                            <p className='foter-link-text'>
                                Privacy Policy
                            </p>
                        </div>

                    </div>
                </div>
                <div className='footer-right-side-wrape'>
                    <div className='get-contact-text-wrape-boder-bottom'>
                        <p className='get-contact-text'>GET CONTACT </p>
                    </div>
                    <div className='social-links-wrape'>
                        <div>
                            <img className='tiktok' src='/Images/social-links/tiktok.svg' alt='/' />
                        </div>
                        <div>
                            <img className='thread' src='/Images/social-links/thread.svg' alt='/' />
                        </div>
                        <div>
                            <a
                                href="https://www.instagram.com/onlineacedm22?igh=bTZxYzEwdW9jdjN2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className='instagram'
                                    src="/Images/social-links/Intagram.svg"
                                    alt="Instagram"
                                    style={{ cursor: "pointer" }}
                                />
                            </a>
                        </div>
                        <div>
                            <img className='x' src='/Images/social-links/x.svg' alt='/' />
                        </div>
                        <div>
                            <a
                                href="https://www.facebook.com/share/18gkj1SATz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/Images/social-links/facebook.svg"
                                    alt="facebook"
                                    style={{ cursor: "pointer" }}
                                />
                            </a>
                        </div>
                        <div>
                            <img className='pintrest' src='/Images/social-links/pintrest.svg' alt='/' />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
