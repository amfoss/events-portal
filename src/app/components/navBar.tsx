"use client";

import { Menu, Github, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import amFOSSLogo from "@/public/amFoss.png";
import Image from "next/image";
import X from "@/public/x-social-media-black-icon.png";
import { motion, AnimatePresence } from "framer-motion";

interface NavBarProps {
  currentSeats: number;
  triggerSeats: (trigger: boolean) => void;
}

interface NavBarLinkProps {
  label: string;
  section?: string;
}
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  if (document.body.style.position === "fixed") {
    const scrollY = parseInt(document.body.style.top || "0") * -1;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollY);
    setTimeout(() => {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  } else {
    const y = element.getBoundingClientRect().top + window.pageYOffset - 150;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const NavBarLink = ({ label, section }: NavBarLinkProps) => {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowBorder(true)}
      onMouseLeave={() => setShowBorder(false)}
      onClick={() => scrollToSection(section || "")}
      className="relative flex flex-col items-center cursor-pointer group"
    >
      <p className="z-10 transition-colors duration-200 group-hover:text-gray-200">
        {label}
      </p>
      <AnimatePresence>
        {showBorder && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF06E4] to-[#FF7B0A] origin-left rounded-full"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default function NavBar({ currentSeats, triggerSeats }: NavBarProps) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showSeats, setShowSeats] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 780);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const scrollDelta = Math.abs(scrollY - lastScrollY);

    setIsScrolled(scrollY > 100);
    setShowSeats(scrollY > 600);
    triggerSeats(scrollY > 600);

    if (scrollDelta > 50) {
      setLastScrollY(scrollY);
    }
  }, [lastScrollY, triggerSeats]);

  const closeSideMenu = () => setShowSideMenu(false);

  const navigationItems = [
    { label: "Register", href: "https://openworkshop.vercel.app/register" },
    { label: "Schedule", section: "schedule" },
    { label: "Speakers", section: "speakers" },
    { label: "FAQ's", section: "faq" },
  ];

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    let ticking = false;

    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobile && showSideMenu) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobile, showSideMenu]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-black/20 py-3 shadow-lg border-b border-white/10"
            : "backdrop-blur-sm py-5"
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src={amFOSSLogo}
            alt="amFoss Logo"
            width={176}
            height={80}
            className="w-30 h-14 md:w-44 md:h-20 object-contain transition-transform duration-200 hover:scale-105"
            priority
          />
        </Link>

        <div className="flex items-center space-x-6">
          <AnimatePresence>
            {showSeats && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-r from-[#FF06E4] to-[#770297] px-4 py-2 rounded-full font-bold text-sm md:text-base font-Lalezar shadow-lg border border-white/20"
              >
                <span className="text-white">
                  Only {currentSeats} seats left!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {!isMobile ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="hidden md:flex items-center space-x-8 text-white font-Outfit text-2xl"
              >
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link href={item.href}>
                        <NavBarLink label={item.label} />
                      </Link>
                    ) : (
                      <NavBarLink label={item.label} section={item.section} />
                    )}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                onClick={() => setShowSideMenu(!showSideMenu)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobile && showSideMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSideMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-70 h-full bg-gradient-to-b from-[#71293e] via-[#202020] to-[#0e0e0e] text-white z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10">
                  <Image
                    src={amFOSSLogo}
                    alt="amFoss Logo"
                    width={132}
                    height={60}
                    className="w-33 h-15"
                  />
                </div>

                <div className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-xl font-medium"
                      >
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={closeSideMenu}
                            className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button
                            onClick={() => {
                              if (item.section) scrollToSection(item.section);
                              closeSideMenu();
                            }}
                            className="block w-full text-left py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
                          >
                            {item.label}
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="p-6 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex space-x-4">
                      <Link
                        href={"https://github.com/amfoss"}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </Link>

                      <Link
                        href={"https://www.linkedin.com/company/amfoss"}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link
                        href={"https://x.com/amfoss_ins"}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                      >
                        <Image
                          src={X}
                          className="w-4 mt-[2px] h-4"
                          alt="Twitter"
                        />
                      </Link>
                      <Link
                        href={"https://www.instagram.com/amfoss.in"}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                      >
                        <Instagram className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
