"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Schedule from "./components/ScheduleGrid";
import FaqGrid from "./components/faqGrid";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import SwiperCarousel from "./components/speakerCarousel";
export default function WorkshopPage() {
  // const [currentSeats,setCurrentSeats]=useState(0)
  const currentSeats = 100;
  const [showSeats, setShowSeats] = useState(false);
  const triggerSeats = (trigger: boolean) => {
    setShowSeats(trigger);
  };
  // useEffect(()=>{const getSeats=async()=>{
  //   setCurrentSeats((await axios.get("http://127.0.0.1:5000/seats-left/")).data.seat_left)
  // }
  // getSeats()},[])
  return (
    <>
      <div className="min-h-screen z-10 bg-gradient-to-b text-white  overflow-x-hidden">
        <NavBar currentSeats={currentSeats} triggerSeats={triggerSeats} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Header currentSeats={currentSeats} showSeats={showSeats} />
          <Schedule />
          {/* <SwiperCarousel /> */}
          <FaqGrid />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}
