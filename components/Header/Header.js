'use client';

import React from "react";
import Image from 'next/image';
import './Header.css';
import Countdown from "../Countdown/CountdownTimer";


function Header() {
    const eventDate = "2024-10-21";

    const scrollToRegistration = () => {
        const registrationSection = document.getElementById("registration");
        if (registrationSection) {
            registrationSection.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <div className="header">
            <div className="header-top" >
                <a href="https://amfoss.in"><Image src="/assets/amfoss_logo.png" alt="amfoss logo" className="logo" width={100} height={100} /></a>
                <a href="https://www.amrita.edu/campus/amritapuri/"><Image src="/assets/amrita_logo.png" alt="amrita logo" className="logo" width={100} height={100} /></a>
            </div>
            <div className="header-main" >
                <div className="box">
                </div>
                <div className="left-content">
                    <Image src="/assets/HF-Horizontal-Color-Light.svg" alt="hacktoberfest logo" className="mainLogo" width={400} height={100} />
                    <p className="subtext"> It&apos;s that time of year again.<br />HacktoberFest is nearly upon us!</p>
                    <button className="register-btn" onClick={scrollToRegistration}>REGISTER NOW</button>
                </div>
                <div className="right-content">
                </div>

                <Countdown eventDate={eventDate} />
            </div>

        </div>
    )
}

export default Header;