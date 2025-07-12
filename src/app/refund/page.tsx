'use client'
import { ArrowLeft, Calendar } from "lucide-react";
import {motion} from "framer-motion"
export default function RefundPolicyPage() {
  return (
    <div
     className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">

      <div className="absolute z-0 top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>


      <div className="absolute top-6 left-6 z-50">
        <button
          className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="hidden sm:inline text-sm font-medium" onClick={() => {window.history.back();}}>Back</span>
        </button>
      </div>

      <motion.div     initial={{y:100, opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.6}} className="max-w-4xl mx-auto w-full z-10 my-20">
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white tracking-wide mb-4">
              Refund Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last Updated on:03-07-2025 14:20:49</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              <strong className="text-white">HRIDESH MATTAKATHARA GOPAKUMAR </strong> believes in helping its customers as far as possible
            </p>
            
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                • In case of any Refunds approved by <strong className="text-white">HRIDESH MATTAKATHARA GOPAKUMAR</strong>, it&apos;ll take 3-5 days for the refund to be credited to the end customer to the original payment methods.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}