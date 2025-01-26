import React from 'react'
import emailjs from '@emailjs/browser';
function Formnewsecond() {
    const handleSubmit = () => {
        let formData={
            EnterName: '',
            EnterEmail: '',
            EnterMesage: '',
          }
      
        // Handle form submission
        console.log('Form submitted:', formData);
      
        emailjs
          .send(
            'service_fqfa7k6', // Service ID
            'template_8p34ljc', // Correct Template ID from EmailJS Dashboard
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

export default Formnewsecond
