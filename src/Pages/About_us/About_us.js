import React from 'react'
import './About_us.css'
import ResponsiveAppBar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'

export default function About_us() {
  return (
    <div className='about-us-main'>
      <ResponsiveAppBar />
      <div className='about-us-top-div'>
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
      <div className='about-us-content-wraper'>
        <p className='about-heading'>About Us</p>
        <div className='about-content-wrape'>
          <div className='about-left-side'>
            <p className='about-left-top-h'>Exploring the Marvels of Celestial Revelation.</p>
            <p className='paragraph-text-about'>Welcome to <span className='bold-text'>Taleem Ul Quran Services,</span> where learning and understanding the Holy Quran becomes a transformative journey of faith, knowledge, and spiritual growth. the Quran, Tafsir, Qaida, and Namaz accessible and convenient for everyone</p>
            <br />
            <p className='paragraph-text-about'>At <span className='bold-text'>Taleem Ul Quran Services,</span> we believe that everyone should have the opportunity to learn, and our online teacher services are ready to assist them all. Our team of experienced instructors is dedicated to providing high-quality education in a comfortable and supportive environment.</p>
            <br />
            <p className='paragraph-text-about'>We offers online courses to kids and adults throughout the world. It is a global, online, educational institute, committed to set standards in Quranic education in the simplest and successful manners .</p>
            <br />
            <p className='paragraph-text-about'>Join us at  <span className='bold-text'>Taleem Ul Quran Services </span> and experience a world of enlightenment, knowledge, and spiritual growth, led by qualified and experienced tutors.</p>

          </div>
          <div className='about-right-side'>
            <img className='about-img' src='/Images/about2.png' alt='about-img' />
            <img className='about-img' src='/Images/image3.png' alt='about-img' />

          </div>

        </div>
        <div className='about-contact-btn-wrape'>
        <a
                                    href="https://wa.me/923194908790"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="about-contact-btn"
                                >
                                    Book a Free Trial
                                </a>
        </div>

      </div>
      <Footer />


    </div>
  )
}
