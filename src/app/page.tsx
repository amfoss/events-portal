"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Schedule from "./components/ScheduleGrid";
import FaqGrid from "./components/faqGrid";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SampleCertificate from "./components/SampleCertificate";
// import SwiperCarousel from "./components/speakerCarousel";
import axios from "axios";

export default function WorkshopPage() {
  const [currentSeats,setCurrentSeats]=useState(0);
  const [showSeats, setShowSeats] = useState(false);
  const triggerSeats = (trigger: boolean) => {
    setShowSeats(trigger);
  };
  useEffect(()=>{const getSeats=async()=>{
    setCurrentSeats((await axios.get("https://amfossworkshop.khushalch.me/seats-left/")).data.seat_left)
  }
  getSeats()},[])
  return (
    <>
      <div className="min-h-screen z-10 bg-gradient-to-b text-white  overflow-x-hidden">
        <NavBar  triggerSeats={triggerSeats} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Header  showSeats={showSeats} />
          <Schedule />
          <SampleCertificate/>
          {/* <SwiperCarousel /> */}
          <FaqGrid />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}
