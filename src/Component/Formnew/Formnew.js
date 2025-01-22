import React from 'react'
import emailjs from '@emailjs/browser';
function Formnew() {
    const handleSubmit = () => {
        let formData={
            firstName: '',
            lastName: '',
            bestTime: '',
            guardianName: '',
            studentID: '',
            email: '',
            mobileNumber: '',
            whatsappNumber: '',
            address: '',
            comments: ''
          }
      
        // Handle form submission
        console.log('Form submitted:', formData);
      
        emailjs
          .send(
            'service_dz8nlzy', // Service ID
            'template_lbkqy4c', // Correct Template ID from EmailJS Dashboard
            formData, // Data to send
            'lJ1lQTQQFtAJITUGx' // Public Key
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error);
            }
          );
      };
    return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Formnew
