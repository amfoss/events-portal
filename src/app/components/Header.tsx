import { motion, Variants, easeOut } from "framer-motion";
import amFoss2 from "@/public/amFOSS2.png";
import Image from "next/image";
interface headerProps {
  showSeats: boolean;
  currentSeats: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Header({ showSeats, currentSeats }: headerProps) {
  const divVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: easeOut,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const pVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <>
      <div className="text-center flex-col flex items-center px-5 mt-30 md:mt-60 lg:mt-40 sm:mt-40 max-w-5xl mx-auto">
        <Image src={amFoss2} alt="amFoss 2 Logo" className="w-52 h-24 mr-5" />
        <h1 className="text-5xl md:text-9xl text-white font-Lalezar mt-5 tracking-wider">
          WORKSHOP
        </h1>
        <p className="text-3xl md:text-5xl font-Lekton mt-8 md:mt-4 text-gray-300 ">
          Your First Step Into Tech Starts Here.
        </p>
        <motion.div
          variants={divVariants}
          initial="hidden"
          animate="show"
          className="mt-10 text-white text-center px-4"
        >
          {/*
          <motion.span
            variants={pVariants}
            className="text-2xl flex md:text-4xl font-Lekton text-gray-200 drop-shadow-sm tracking-wide leading-snug"
          >
            Starting September<p className="text-xl md:text-2xl">*</p>, 2025
          </motion.span>
          */}
          <motion.p
            variants={pVariants}
            className="text-lg md:text-2xl font-Lekton text-gray-300 mt-3 drop-shadow-sm tracking-wide"
          >
            14 Days • Offline Workshop
          </motion.p>
          {/*
          <motion.p
            variants={pVariants}
            className="text-sm text-gray-200 font-Lekton drop-shadow-2xl tracking-tight"
          >
            (Dates are Tentative)
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showSeats ? 0.2 : 1 }}
          transition={{ duration: 0.5 }}
          className="mt-15 text-white text-xl sm:text-xl md:text-3xl transition-colors font-Lalezar flex flex-wrap items-center justify-center text-center px-4"
        >
          Only
          <div className="bg-gradient-to-r  z-30 from-[#FF06E4] to-[#770297] text-white flex items-center rounded-md px-3 py-1 mx-4 text-xl sm:text-xl md:text-3xl ">
            {currentSeats + " seats"}
          </div>
          left, register today!
            */}
        </motion.div>

        {currentSeats > 0 ? (
          <motion.a
            href="https://openworkshop.vercel.app/register"
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.8 }}
            className="bg-gradient-to-r mt-12 z-20 from-[#FF06E4] to-[#770297] text-white px-10 py-4 rounded-xl font-Lalezar text-xl sm:text-xl md:text-3xl  font-bold uppercase"
          >
            REGISTER NOW!
          </motion.a>
        ) : (
          <motion.div className="z-30">
            <p className="bg-gradient-to-r mt-12 mb-4 z-20 from-[#FF06E4] to-[#770297] text-white px-5 py-2 rounded-xl font-Lalezar text-lg  font-bold uppercase">
              New batch coming soon!
            </p>
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.4 },
              }}
              href="https://forms.gle/kui5nhC91Voz4jRW7"
              className="text-neutral-500 transition-colors hover:text-white duration-300"
            >
              Fill the Form to get in early!
            </motion.a>
          </motion.div>
        )}
      </div>
      <div className="max-w-4xl relative mx-auto mt-40 mb-20 px-6 md:px-10">
        <div className="mb-8 z-10 w-fit">
          <p className="text-4xl font-bold text-white">OUR AIM</p>
          <div className="w-[80%] m-auto mt-1 h-1 bg-gradient-to-r  from-[#FF06E4] to-[#770297]"></div>
        </div>
        <p className="text-lg font-bold z-10 leading-relaxed text-white">
          The
          <span className="text-[#FF06E4] font-bold mx-1">amFOSS Workshop</span>
          is designed to be the perfect starting point for students who are
          fresh out of school and curious about the world of computer science
          and software development. Whether you come from a technical background
          or not, this workshop will help you build a strong foundation in
          essential tools and skills needed to thrive in the tech world.
        </p>
      </div>
    </>
  );
}
