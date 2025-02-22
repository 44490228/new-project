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
            'service_fqfa7k6', // Service ID
            'template_0husgxi', // Correct Template ID from EmailJS Dashboard
            formData, // Data to send
            'u1NpvtiSJLekxun8O' // Public Key
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
