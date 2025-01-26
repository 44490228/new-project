import React, { useState } from 'react';
import './Home.css';
import ResponsiveAppBar from '../../Component/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure you have Bootstrap styles
import NooraniQaidaCard from '../../Component/Dropdown/Dropdown';
import NooraniQaidaCard2 from '../../Component/Dropdown2/Dropdown2';
import NooraniQaidaCard3 from '../../Component/Dropdown3/Dropdown3';
import NooraniQaidaCard4 from '../../Component/Dropdown4/Dropdown4';
import NooraniQaidaCard5 from '../../Component/Dropdown5/Dropdown5';
import NooraniQaidaCard6 from '../../Component/Dropdown6/Dropdown';
import Footer from '../../Component/Footer/Footer';
import NooraniQaidaCard7 from '../../Component/Dropdown7/Dropdown7';
import NooraniQaidaCard8 from '../../Component/Dropdown8/Dropdown8';
import NooraniQaidaCard9 from '../../Component/Dropdown9/Dropdown9';
import AccordianUsage from '../../Component/Accordian/Accordian';

function Home() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='main-page-wraper'>
            <ResponsiveAppBar />
            <div className='top-section'>
                <div className='top-section-center-div'>
                    <div>
                        <img className='arabic-img' src="/Images/arabic.png" alt="arabic" />
                    </div>
                    <p className='top-section-english-text'>
                        The best amongst you is the one who learns the <br /> Qur'an and teaches it
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
            <div className="scroll-text-container">
                <div className="scroll-text-wraper">
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                    <p className="welcome-text">Welcome to the Taleemul Quran Official</p>
                </div>
            </div>
            <div className='offer-section'>
                <p className='offer-section-top-text'>Our Courses</p>
                <p className='offer-section-second-text'>What we offer</p>
                <div className='offer-card-wraper'>
                    <NooraniQaidaCard />
                    <NooraniQaidaCard2 />
                    <NooraniQaidaCard3 />
                    <NooraniQaidaCard4 />
                    <NooraniQaidaCard5 />
                    <NooraniQaidaCard6 />
                    {showMore && (
                        <>
                            <NooraniQaidaCard7 />
                            <NooraniQaidaCard8 />
                            <NooraniQaidaCard9 />
                        </>
                    )}
                </div>
                <div className='offer-section-bottom-btn-wrape'>
                    <button className='view-btn' onClick={() => setShowMore(true)}>View All</button>
                </div>
            </div>

            <div className='choose-section'>
                <p className='choose-section-top-text'>Why we are first choice for parents?</p>
                <p className='choose-section-second-text'>Why Choose Us?</p>
                <div className='choose-section-left-right-wraper'>
                    <div className='choose-content-left'>
                        <div className='first-row'>
                            <div className='card-choose-left'>
                                <img className='icon-img-width' src='/Images/Frame 1261153062.png' alt='staff' />
                                <div className='card-choose-left-content-div'>
                                    <p className='experence-text'>Experienced Staff</p>
                                    <p className='sb-text-card-choose'>Our dedicated and highly-qualified instructors are committed to providing the best support for your children’s learning journey.</p>
                                </div>
                            </div>
                            <div className='card-choose-left'>
                                <img className='icon-img-width' src='/Images/trust.png' alt='staff' />
                                <div className='card-choose-left-content-div'>
                                    <p className='experence-text'>Complete Package</p>
                                    <p className='sb-text-card-choose'>We take pride in offering a complete range of Quran and Islamic learning courses, all conveniently available in one place.</p>
                                </div>
                            </div>
                        </div>
                        <div className='first-row'>
                            <div className='card-choose-left'>
                                <img className='icon-img-width' src='/Images/cost.png' alt='staff' />
                                <div className='card-choose-left-content-div'>
                                    <p className='experence-text'>Cost-Effectiveness</p>
                                    <p className='sb-text-card-choose'>Providing affordable courses is our priority, as we take joy in making quality education accessible to people from all walks of life.</p>
                                </div>
                            </div>
                            <div className='card-choose-left'>
                                <img className='icon-img-width' src='/Images/trust.png' alt='staff' />
                                <div className='card-choose-left-content-div'>
                                    <p className='experence-text'>Trustworthy Institution</p>
                                    <p className='sb-text-card-choose'>Our established track record serves as a reliable foundation for earning and maintaining people's trust in us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='choose-section-right-side'>
                        <img className='boys-circle-img-width' src="/Images/new55.png" alt='boy' />
                    </div>
                </div>
            </div>
            <div className='fasten-section'>
                <p className='fasten-text'>fasten your kid’s learingwith our top quran instructor</p>
                <a
                    href="https://wa.me/923194908790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="top-section-button"
                >
                    Book a Free Trial
                </a>


            </div>
            <div className='vision-section'>
                <img className='boy-reading-img' src='/Images/image 42.png' alt='boy' />
                <div className='vision-cards-wraper'>
                    <div className='vision-card'>
                        <p className='vision-card-heading'>Vision</p>
                        <p className='vision-card-sb-text'>Our aim is to provide service to our local Muslim community alongside others in our neigborhood.</p>

                    </div>
                    <div className='vision-card'>
                        <p className='vision-card-heading'>Mission</p>
                        <p className='vision-card-sb-text'>We are trying to help enrich our Muslim community by providing knowledge on Islam and encouraging praying together.</p>

                    </div>

                </div>
                <div className='assist-section'>
                    <div className='assist-left'>
                        <p className='assist-left-q'>Ask any questions</p>
                        <p className='assist-left-h'>How can we assist you? Please inform us.</p>
                        <div className='assist-left-sb-text-wrape'>
                            <p className='assist-left-sb-text'>We mention some Queries that many students and parents usually ask but if you have any kind of other Questions. You can contact us through the contact form, mobile number, or directly by sending an email at info@awwalquran.com</p>
                        </div>
                        <div className='assist-div-left-wrape-bottom-first'>
                            <div className='first-bottom'>


                            </div>

                        </div>

                    </div>
                    <div className='assist-right'>
                        <AccordianUsage />
                    </div>

                </div>
                <div className='bottom-wrape-section'>
                    <img className='bottom-img-quran' src='/Images/image 40.png' alt='.' />
                    <div className='bottom-top-section'>
                        <p className='available-text-timing'>24/7 Available</p>
                        <p className='available-text-timing-sb-text'>Are you looking for best Online Quran Tutor? With the guidance of our dedicated Online Quran teachers you can excel anything and everything of your Quranic knowledge within a shortest possible time.</p>
                        <ul>
                            <li className='list-item'>Expert Quran Tutor</li>
                            <li className='list-item'>Male Female Teachers</li>
                            <li className='list-item'>Flexible Timings</li>
                            <li className='list-item'>3 Days Free Trial</li>
                        </ul>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Home;
