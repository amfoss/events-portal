"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Schedule from "./components/ScheduleGrid";
import FaqGrid from "./components/faqGrid";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwiperCarousel from "./components/speakerCarousel";
import axios from "axios";
export default function WorkshopPage() {
  const [currentSeats, setCurrentSeats] = useState(0);
  // const currentSeats = 70;
  const [showSeats, setShowSeats] = useState(false);
  const triggerSeats = (trigger: boolean) => {
    setShowSeats(trigger);
  };
  useEffect(() => {
    const getSeats = async () => {
      setCurrentSeats(
        (await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/seats-left/"))
          .data.seat_left,
      );
    };
    getSeats();
  }, []);
  return (
    <>
      <div className="min-h-screen z-10 bg-gradient-to-b text-white from-[#0f0f0f] to-[#000] overflow-x-hidden">
        <Image
          alt="Background"
          width={1200}
          height={1200}
          className="absolute z-0 left-0 top-0 pointer-events-none"
          src="/bg1.png"
        />
        <Image
          alt="Background"
          width={1200}
          height={1200}
          className="absolute z-0 right-0"
          src="/bg3.png"
        />
        <NavBar currentSeats={currentSeats} triggerSeats={triggerSeats} />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Header currentSeats={currentSeats} showSeats={showSeats} />

          <Image
            alt="Background"
            width={1200}
            height={1200}
            className="absolute z-0 pointer-events-none"
            src="/bg4.png"
          />
          <Schedule />
          <SwiperCarousel />
          <FaqGrid />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}
