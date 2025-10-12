'use client';

import React from "react";
import Image from 'next/image';
import './Header.css';
import Countdown from "../Countdown/CountdownTimer";


function Header() {
    const eventDate = "2025-10-15";

    const scrollToRegistration = () => {
        const registrationSection = document.getElementById("registration");
        if (registrationSection) {
            registrationSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToItinerary = () => {
        const itinerarySection = document.getElementById("event-schedule");
        if (itinerarySection) {
            itinerarySection.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="background">
            <div className="header">
                <div className="decorative-elements">
                    <div className="float-element element-1">&#123;&#125;</div>
                    <div className="float-element element-2">&lt;/&gt;</div>
                    <div className="float-element element-3">&#123; &#125;</div>
                    <div className="float-element element-4">[ ]</div>
                    <div className="float-element element-5">&#60;&#62;</div>
                    <div className="float-element element-6">( )</div>
                </div>

                <div className="header-top" >
                    {/* <a href="https://hacktoberfest.com"><Image src="/assets/HF-Horizontal-Color-Light.svg" alt="amfoss logo" className="logo" width={250} height={250} /></a> */}
                    <a href="https://amfoss.in"><Image src="/assets/amfoss_logo.png" alt="amfoss logo" className="logo" width={100} height={100} /></a>
                    
                    <a href="https://www.amrita.edu/campus/amritapuri/"><Image src="/assets/amrita_logo.png" alt="amrita logo" className="logo" width={100} height={100} /></a>
                </div>
                <div className="header-main" >
                    <div className="left-content">
                        <Image src="/assets/HF-Horizontal-Color-Light.svg" alt="hacktoberfest logo" className="mainLogo" width={400} height={100} />
                        <p className="subtext"> It&apos;s that time of year again.<br />HacktoberFest is nearly upon us!</p>
                        
                        <div className="badges-container">
                            <div className="edition-badge">
                                <span>🎃</span>
                                <span className="edition-text">12th Edition</span>
                            </div>
                            <div className="edition-badge">
                                <span className="edition-text">2025</span>
                            </div>
                        </div>
                        <div className="button-group">
                            <button onClick={scrollToRegistration}>REGISTER NOW</button>
                            <button onClick={scrollToItinerary}>SEE ITINERARY<Image src="/assets/caret.svg" alt=""width={16} height={16} /></button>
                        </div>
                    </div>
                    
                    <Countdown eventDate={eventDate} />
                </div>

                <div className="sliding-text-container">
                    <div className="sliding-text">
                        <div className="slide-track">
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;GET READY TO SHIP&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;SUPPORT OPEN SOURCE&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;GET READY TO SHIP&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;SUPPORT OPEN SOURCE&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;GET READY TO SHIP&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;SUPPORT OPEN SOURCE&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;GET READY TO SHIP&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;SUPPORT OPEN SOURCE&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;GET READY TO SHIP&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span>HACKTOBERFEST 2025&nbsp;&nbsp;•&nbsp;&nbsp;SUPPORT OPEN SOURCE&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;