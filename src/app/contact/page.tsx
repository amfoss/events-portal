"use client";
import { ArrowLeft, Mail, Phone, MapPin, Scale, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">
      <div className="absolute z-0 top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-6 left-6 z-50">
        <Link
          className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
          href="/"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="hidden sm:inline text-sm font-medium">Back</span>
        </Link>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full z-10 my-20"
      >
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white tracking-wide mb-4">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg">
              Get in touch with us for any questions or support regarding the
              workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-gray-600 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm break-all">
                  amritapurifoss@gmail.com
                </p>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-gray-600 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm mb-2">+91 8281826051</p>
                <p className="text-gray-300 text-sm mb-2">+91 8306644713</p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>Mon-Fri, 5 PM - 12 AM</span>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-600 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-gray-300 text-sm">
                  Amrita Amritapuri,
                  <br />
                  Clappana P O, Kollam – 690525,
                  <br />
                  India
                </p>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-600 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4">
                  <Scale className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Name</h3>
                <p className="text-gray-300 text-sm">amFOSS</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              We&apos;re here to help! Feel free to reach out through any of the
              above channels.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
