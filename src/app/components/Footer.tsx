import { motion } from "framer-motion";
import Timer from "./Timer";
import Image from "next/image";
// import amFoss2 from "@/public/amFOSS2.png";
import X from "@/public/x-social-media-black-icon.png";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="max-w-4xl mx-auto my-20 px-6 md:px-10 flex flex-col items-center">
        <p className="text-2xl md:text-4xl font-bold mb-8 text-white">
          Time Is Ticking - Secure Your Spot Now !!!
        </p>
        <div className="flex flex-col items-center">
          <Timer />
          <motion.a
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-gradient-to-r  from-[#FF06E4] to-[#770297] text-white px-10 py-4 rounded-full text-lg font-bold uppercase "
          >
            REGISTER NOW
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/*<p className="text-2xl md:text-4xl font-bold mb-1 text-white">
          Support Open Source With
        </p>
        <Image
          src={amFoss2}
          alt="Foss Logo"
          className="w-48 h-24 object-fill"
        />*/}
      </div>
      <div className="ml-5 flex justify-center my-10 space-x-6">
        <Link href="https://github.com/amfoss">
          <Github className="w-10 h-10" />
        </Link>
        <Link href="https://www.linkedin.com/company/amfoss">
          <Linkedin className="w-10 h-10" />
        </Link>
        <Link href="https://x.com/amfoss_in">
          <Image src={X} className="w-8 mt-1 h-8" alt="Twitter" />
        </Link>
        <Link href="https://www.instagram.com/amfoss.in">
          <Instagram className="w-10 h-10" />
        </Link>
      </div>
      <div className="ml-5 flex justify-center my-10 space-x-3 text-xs md:text-md md:space-x-6">
        <Link className="text-white hover:text-pink-600 transition-all hover:underline" href={"/terms"}>Terms & Condition</Link>
        <Link className="text-white hover:text-pink-600 transition-all hover:underline" href={"/privacy"}>Privacy Policy</Link>
        <Link className="text-white hover:text-pink-600 transition-all hover:underline" href={"/refund"}>Refund Policy</Link>
        <Link className="text-white hover:text-pink-600 transition-all hover:underline" href={"/contact"}>Contact Us</Link>
      </div>
    </>
  );
}
