import React from "react";
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
                <a href="https://amfoss.in"><img src={`${process.env.PUBLIC_URL}/assets/amfoss_logo.png`} alt="amfoss logo" className="logo" /></a>
                <a href="https://www.amrita.edu/campus/amritapuri/"><img src={`${process.env.PUBLIC_URL}/assets/amrita_logo.png`} alt="amrita logo" className="logo" /></a>
            </div>
            <div className="header-main" >
                <div className="box">
                </div>
                <div className="left-content">
                    <img src={`${process.env.PUBLIC_URL}/assets/HF-Horizontal-Color-Light.svg`} alt="hacktoberfest logo" className="mainLogo" />
                    <p className="subtext"> It's that time of year again.<br />HacktoberFest is nearly upon us!</p>
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