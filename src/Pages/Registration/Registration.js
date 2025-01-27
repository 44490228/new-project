import React, { useState } from 'react';
import './Registration.css';
import ResponsiveAppBar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import emailjs from '@emailjs/browser';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bestTime: '',
    guardianName: '',
    studentID: '',
    email: '',
    mobileNo: '',
    whatsappNo: '',
    address: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation logic
    if (name === 'mobileNo' || name === 'whatsappNo') {
      const onlyNumbers = /^[0-9]*$/;
      if (!onlyNumbers.test(value)) {
        setErrors((prev) => ({ ...prev, [name]: 'Only numbers are allowed' }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: 'Email must be a valid @gmail.com address' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'mobileNo', 'whatsappNo'];
    let newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert('Please fix the errors before submitting.');
      return;
    }

    // Submit form via EmailJS
    emailjs
      .send(
        'service_fqfa7k6', // Service ID
        'template_0husgxi', // Template ID
        formData, // Form data
        'u1NpvtiSJLekxun8O' // Public Key
      )
      .then(
        () => {
          alert('Form submitted successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            bestTime: '',
            guardianName: '',
            studentID: '',
            email: '',
            mobileNo: '',
            whatsappNo: '',
            address: '',
            comments: '',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Form submission failed. Please try again.');
        }
      );
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="main-registration-top-div">
        <div className="top-section-center-div">
          <div>
            <img className="arabic-img" src="/Images/arabic.png" alt="arabic" />
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
      <div className="form-container-second">
        <p className="Registration-text-top">Registration</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <p className="lable-text">First Name</p>
              <input
                className="input-text"
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <p className="lable-text">Last Name</p>
              <input
                className="input-text"
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <p className="lable-text">Best Time For Class</p>
              <input
                className="input-text"
                type="text"
                name="bestTime"
                placeholder="Enter Time"
                value={formData.bestTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p className="lable-text">Guardian/Parent Name</p>
              <input
                className="input-text"
                type="text"
                name="guardianName"
                placeholder="Enter Guardian/Parent Name"
                value={formData.guardianName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <p className="lable-text">Skype ID</p>
              <input
                className="input-text"
                type="text"
                name="studentID"
                placeholder="Enter Skype ID"
                value={formData.studentID}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p className="lable-text">Email</p>
              <input
                className="input-text"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <p className="lable-text">Mobile No.</p>
              <input
                className="input-text"
                type="text"
                name="mobileNo"
                placeholder="Enter Mobile No."
                value={formData.mobileNo}
                onChange={handleChange}
              />
              {errors.mobileNo && <span className="error">{errors.mobileNo}</span>}
            </div>
            <div className="form-group">
              <p className="lable-text">WhatsApp No.</p>
              <input
                className="input-text"
                type="text"
                name="whatsappNo"
                placeholder="Enter WhatsApp No."
                value={formData.whatsappNo}
                onChange={handleChange}
              />
              {errors.whatsappNo && <span className="error">{errors.whatsappNo}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <p className="lable-text">Address</p>
              <input
                className="input-text"
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <p className="lable-text">Comments or Message</p>
              <textarea
                className="input-textarea"
                name="comments"
                placeholder="Enter Message"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submit-btn-bottom">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
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

export default Registration;
