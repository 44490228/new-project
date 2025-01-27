import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ResponsiveAppBar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import './Contact_us.css';

function Contact_us() {
  const [formData, setFormData] = useState({
    EnterName: '',
    EnterEmail: '',
    EnterMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Validate email for "@gmail.com"
    if (!formData.EnterEmail.endsWith('@gmail.com')) {
      alert('Please enter a valid email ending with @gmail.com.');
      return;
    }

    // Validate all fields are filled
    if (!formData.EnterName || !formData.EnterEmail || !formData.EnterMessage) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    console.log('Form submitted:', formData);

    emailjs
      .send(
        'service_fqfa7k6', // Service ID
        'template_8p34ljc', // Template ID
        formData, // Data to send
        'u1NpvtiSJLekxun8O' // Public Key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-us-main">
      <ResponsiveAppBar />
      <div className="contact-top-div-bg">
        <div className="top-section-center-div">
          <div>
            <img className="arabic-img" src="/Images/arabic.png" alt="arabic" />
          </div>
          <p className="top-section-english-text">
            The best amongst you is the one who learns the <br /> Qur'an and teaches it{' '}
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
      <div className="contact-content-wraper">
        <p className="contact-text">Contact Us</p>
        <p className="contact-sb-text">
          We’re here to help! Whether you have a question about our services, need technical support, or just want to
          say hello, we’d love to hear from you.
        </p>
        <div className="contact-us-iner-wraper">
          {/* Left Side */}
          <div className="conact-us-left-side">
            <p className="get-in-text">Get In Touch</p>
            <p className="get-sb-text">
              We’re here to help! Whether you have a question about our services, need technical support, or just want
              to say hello, we’d love to hear from you.
            </p>
            <div className="logos-or-text-wraper">
              <div className="logos-or-text-wrape-first">
                <img className="logo-address" src="/Images/home.png" alt="home" />
                <div className="contact-home-wrape">
                  <p className="contact-address">Address</p>
                  <p className="contact-address-sb-text">Islamabad/Rawalpindi, Pakistan</p>
                </div>
              </div>
              <div className="logos-or-text-wrape-first">
                <img className="logo-address" src="/Images/phone.png" alt="phone" />
                <div className="contact-home-wrape">
                  <p className="contact-address">Phone Number</p>
                  <p className="contact-address-sb-text">+923194908790</p>
                </div>
              </div>
              <div className="logos-or-text-wrape-first">
                <img className="logo-address" src="/Images/whatsapp.png" alt="whatsapp" />
                <div className="contact-home-wrape">
                  <p className="contact-address">Whatsapp</p>
                  <p className="contact-address-sb-text">+923194908790</p>
                </div>
              </div>
              <div className="logos-or-text-wrape-first">
                <img className="logo-address" src="/Images/email.png" alt="email" />
                <div className="contact-home-wrape">
                  <p className="contact-address">Email</p>
                  <p className="contact-address-sb-text">taleemulquranservices@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="line-img-wraper-contact">
              <img className='contact-bottom-line-set' src="/Images/bottom-line.png" alt="line" />
            </div>
            <div className="social-links-contact-div-wrape-uper">
              <p className="folow-text">Follow us:</p>
              <div className="social-links-contact-div-wrape">
                <img className="follow-logo-img" src="/Images/tiktok-bottom.png" alt="tiktok" />
                <img className="follow-logo-img" src="/Images/insta-bottom.png" alt="instagram" />
                <img className="follow-logo-img" src="/Images/face-bottom.png" alt="facebook" />
                <img className="follow-logo-img" src="/Images/x-bottom.png" alt="twitter" />
                <img className="follow-logo-img" src="/Images/email-bottom.png" alt="email" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="conact-us-right-side">
            <div className="form-container">
              <h1 className="form-title">Send A Message</h1>
              <form onSubmit={handleSubmit} className="form-second">
                <input
                  type="text"
                  name="EnterName"
                  placeholder="Enter Name"
                  className="form-input"
                  value={formData.EnterName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="EnterEmail"
                  placeholder="Enter Email"
                  className="form-input"
                  value={formData.EnterEmail}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="EnterMessage"
                  placeholder="Enter Message"
                  className="form-textarea"
                  value={formData.EnterMessage}
                  onChange={handleChange}
                  required
                />
                <div className="contact-form-bottom-btn">
                  <button type="submit" className="form-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='whatsapp-static'>
        <a href="https://wa.me/923194908790" target="_blank" rel="noopener noreferrer">
          <img className='static-img-whatsapp' src='/Images/whatsappstatic.svg' alt="static" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact_us;
