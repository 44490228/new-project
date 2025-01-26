import React, { useState } from "react";
import "./courses.css";
import ResponsiveAppBar from "../../Component/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure you have Bootstrap styles
import NooraniQaidaCard from "../../Component/Dropdown/Dropdown";
import NooraniQaidaCard2 from "../../Component/Dropdown2/Dropdown2";
import NooraniQaidaCard3 from "../../Component/Dropdown3/Dropdown3";
import NooraniQaidaCard4 from "../../Component/Dropdown4/Dropdown4";
import NooraniQaidaCard5 from "../../Component/Dropdown5/Dropdown5";
import NooraniQaidaCard6 from "../../Component/Dropdown6/Dropdown";
import NooraniQaidaCard7 from "../../Component/Dropdown7/Dropdown7";
import NooraniQaidaCard8 from "../../Component/Dropdown8/Dropdown8";
import NooraniQaidaCard9 from "../../Component/Dropdown9/Dropdown9";
import Footer from "../../Component/Footer/Footer";
import AccordianUsage from "../../Component/Accordian/Accordian";

export default function Courses() {
    const [showMore, setShowMore] = useState(false); // State for managing "View All" functionality

    const handleToggleShowMore = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <div className="main-page-wraper">
            <ResponsiveAppBar />
            {/* Top Section */}
            <div className="top-section">
                <div className="top-section-center-div">
                    <div>
                        <img
                            className="arabic-img"
                            src="/Images/arabic.png"
                            alt="arabic"
                        />
                    </div>
                    <p className="top-section-english-text">
                        The best amongst you is the one who learns the <br /> Qur'an and teaches it
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

            {/* Offer Section */}
            <div className="offer-section">
                <p className="offer-section-top-text">Our Courses</p>
                <p className="offer-section-second-text">What we offer</p>
                <div className="offer-card-wraper">
                    <NooraniQaidaCard />
                    <NooraniQaidaCard2 />
                    <NooraniQaidaCard3 />
                    <NooraniQaidaCard4 />
                    <NooraniQaidaCard5 />
                    <NooraniQaidaCard6 />
                    <NooraniQaidaCard7 />
                    <NooraniQaidaCard8 />
                    <NooraniQaidaCard9 />
                </div>
            </div>

            {/* Choose Section */}
            <div className="choose-section">
                <p className="choose-section-top-text">Why we are first choice for parents?</p>
                <p className="choose-section-second-text">Why Choose Us?</p>
                <div className="choose-section-left-right-wraper">
                    <div className="choose-content-left">
                        <div className="first-row">
                            <div className="card-choose-left">
                                <img
                                    className="icon-img-width"
                                    src="/Images/Frame 1261153062.png"
                                    alt="staff"
                                />
                                <div className="card-choose-left-content-div">
                                    <p className="experence-text">Experienced Staff</p>
                                    <p className="sb-text-card-choose">
                                        Our dedicated and highly-qualified instructors are committed to providing the best support for your children’s learning journey.
                                    </p>
                                </div>
                            </div>
                            <div className="card-choose-left">
                                <img className="icon-img-width" src="/Images/trust.png" alt="trust" />
                                <div className="card-choose-left-content-div">
                                    <p className="experence-text">Complete Package</p>
                                    <p className="sb-text-card-choose">
                                        We take pride in offering a complete range of Quran and Islamic learning courses, all conveniently available in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="first-row">
                            <div className="card-choose-left">
                                <img className="icon-img-width" src="/Images/cost.png" alt="cost" />
                                <div className="card-choose-left-content-div">
                                    <p className="experence-text">Cost-Effectiveness</p>
                                    <p className="sb-text-card-choose">
                                        Providing affordable courses is our priority, as we take joy in making quality education accessible to people from all walks of life.
                                    </p>
                                </div>
                            </div>
                            <div className="card-choose-left">
                                <img className="icon-img-width" src="/Images/trust.png" alt="trust" />
                                <div className="card-choose-left-content-div">
                                    <p className="experence-text">Trustworthy Institution</p>
                                    <p className="sb-text-card-choose">
                                        Our established track record serves as a reliable foundation for earning and maintaining people's trust in us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="choose-section-right-side">
                        <img className="boys-circle-img-width" src="/Images/new55.png" alt="boy" />
                    </div>
                </div>
            </div>

            {/* Fasten Section */}
            <div className="fasten-section-second">
                <p className="fasten-text">
                    Deepen your connection with the Quran. Join our all-encompassing learning journey today!
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

            <Footer />
        </div>
    );
}
