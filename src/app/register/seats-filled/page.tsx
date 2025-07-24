"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SeatsFull() {
  return (
    <>
      <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="hidden sm:inline text-sm font-medium">Back</span>
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center w-full"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20 max-w-md w-full"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                  className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center"
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  Uh Oh!
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-xl text-gray-300 mb-4"
                >
                  Looks like all the spots are filled
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-gray-400 text-sm"
                >
                  This workshop has reached maximum capacity, but don't worry -
                  we have more exciting workshops coming up!
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="space-y-4"
              >
                <div className="bg-white/5 p-4 rounded-lg border border-gray-600">
                  <h3 className="text-white font-semibold mb-2">
                    Want more workshops like this?
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Fill out the form below to let us know you're interested!
                    We’ll use your feedback to plan more sessions you'll love.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.a
                    href="https://forms.gle/poV5Evr8fBqFWKLU8"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Fill The Form Here
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
