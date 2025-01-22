import React, { useState } from 'react';
import './Registration.css';
import ResponsiveAppBar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

function Registration() {
  const [formData, setFormData] = useState({
    mobileNo: '',
    whatsappNo: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

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

    // Check for errors before submission
    if (
      Object.values(errors).some((error) => error) ||
      !formData.mobileNo ||
      !formData.whatsappNo ||
      !formData.email
    ) {
      alert('Please fix the errors in the form before submitting.');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="main-registration-top-div">
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
      <div className="form-container-second">
        <p className='Registration-text-top'>Registration</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <p className='lable-text'>First Name</p>
              <input className='input-text' type="text" placeholder="Enter Your First Name" />
            </div>
            <div className="form-group">
              <p className='lable-text'>Last Name</p>
              <input className='input-text' type="text" placeholder="Enter Your Last Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <p className='lable-text' >Best Time For Class</p>
              <input className='input-text' type="text" placeholder="Enter Time" />
            </div>
            <div className="form-group">
              <p className='lable-text'>Guardian/Parent Name</p>
              <input className='input-text' type="text" placeholder="Enter Your Parent Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <p className='lable-text'>Skype ID</p>
              <input className='input-text' type="text" placeholder="Enter Id." />
            </div>
            <div className="form-group">
              <p className='lable-text'>Email</p>
              <input className='input-text'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <p className='lable-text'>Mobile No.</p>
              <input className='input-text'
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Enter Mobile No."
              />
              {errors.mobileNo && <span className="error">{errors.mobileNo}</span>}
            </div>
            <div className="form-group">
              <p className='lable-text'>Whatsapp</p>
              <input className='input-text'
                type="text"
                name="whatsappNo"
                value={formData.whatsappNo}
                onChange={handleChange}
                placeholder="Enter Whatsapp No."
              />
              {errors.whatsappNo && <span className="error">{errors.whatsappNo}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <p className='lable-text'>Address</p>
              <input className='input-text' type="text" placeholder="Enter Address" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <p className='lable-text'>Comment Or Message</p>
              <textarea className='input-textarea' placeholder="Enter Message"></textarea>
            </div>
          </div>
          <div className='submit-btn-bottom'>
          <button type="submit" className="submit-button">
            Submit
          </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Registration;
