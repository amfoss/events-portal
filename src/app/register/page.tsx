"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FormData } from "../utils/types";
import { ToastContainer, toast } from "react-toastify";
import { ArrowLeft, HelpCircle, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Component() {
  const [isRegTimeOver, setRegTimeOver] = useState(false);
  const targetDate = new Date("2025-07-28T00:00:00");
  const router=useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    roll_no: "",
    phone_number: "",
    checkBox: false,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");
  const [wait, setWait] = useState(false);
  useEffect(() => {
    const checkIsRegClosed = () => {
      const now = new Date();
      setRegTimeOver(
        Math.floor((targetDate.getTime() - now.getTime()) / 1000) <= 0,
      );
    };
    checkIsRegClosed();
  }, [isDisabled]);

  useEffect(() => {
    const now = new Date();
    if (Math.floor((targetDate.getTime() - now.getTime()) / 1000) <= 0) {
      router.push("/register/seats-filled")
      toast.error("Registrations are currently closed");
    }
  }, []);

  useEffect(() => {
    setIsDisabled(
      !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.roll_no.trim() ||
        !formData.phone_number.trim() ||
        !formData.checkBox,
    );
  }, [formData]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!name.includes("checkBox")) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: !formData[name as keyof FormData] });
    }
  };

  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidRollNumber = (roll: string): boolean => {
    const rollRegex = /^am\.[a-z]{2}\.[a-z0-9]{10}$/i;
    return rollRegex.test(roll);
  };

  const validateForm = async () => {
    setWait(true);
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/seats-left/",
    );

    if (res.data.seat_left <= 0) {
      toast.error("All spots are taken!");
      router.push("/register/seats-filled")
      setWait(false);
    } else {
      const validEmail = isValidEmail(formData.email);
      const validRoll = isValidRollNumber(formData.roll_no);
      const validPhone = isValidPhone(formData.phone_number);
      if (formData.name !== "" && validEmail && validRoll && validPhone) {
        sendData();
      } else {
        if (formData.name === "") toast.warn("Please Enter Your Name.");
        else if (!validEmail) toast.warn("Enter A Valid Email Id");
        else if (!validRoll) toast.warn("Enter A Valid Roll Number");
        else if (!validPhone) toast.warn("Enter A Valid Phone Number");
        setWait(false)
      }
    }
  };

  const sendData = async () => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/create_order/",
        formData,
      );
      if (res.status === 200) {
        localStorage.setItem("orderId", res.data.merchantOrderId);
        window.location.href = res.data.redirectUrl;
      } else {
        setError(
          res.data.error || "An error occurred while processing your request.",
        );
      }
    } catch (error) {
      let message = "An error occurred while processing your request.";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.error || error.message || message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      setError(message);
    } finally {
      setWait(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">
      <Image
        alt="Background"
        width={1200}
        height={1200}
        className="absolute z-0 top-0 left-0 pointer-events-none"
        src="/bg1.png"
      />
      <Image
        alt="Background"
        width={1200}
        height={1200}
        className="absolute z-0 scale-y-[-1] bottom-0 right-0 pointer-events-none"
        src="/bg2.png"
      />
      <ToastContainer />
      <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="hidden sm:inline text-sm font-medium">Back</span>
        </Link>
      </div>

      <div
        id="Popup"
        className={`fixed inset-0 z-50 flex items-center ${error === "" ? "hidden" : "visible"} justify-center bg-black/60 backdrop-blur-sm transition-all duration-300`}
      >
        <div className="bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] border border-pink-500 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Payment Error</h1>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            className="mt-2 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition"
            onClick={() => {
              setError("");
            }}
          >
            Close
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 my-20 lg:grid-cols-2 gap-12 items-start">
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20">
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-white tracking-wide"
              >
                Register
              </motion.h1>
              <p className="text-gray-400 mt-2">Secure your seat now</p>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={changeValue}
                className="w-full px-4 py-3 bg-black/30 border border-pink-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <input
                type="text"
                name="roll_no"
                placeholder="Admission Number"
                value={formData.roll_no}
                onChange={changeValue}
                className="w-full px-4 py-3 bg-black/30 border border-pink-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Personal Email Address"
                value={formData.email}
                onChange={changeValue}
                className="w-full px-4 py-3 bg-black/30 border border-pink-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={changeValue}
                maxLength={10}
                className="w-full px-4 py-3 bg-black/30 border border-pink-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <div className="flex items-start space-x-3 mt-6">
                <input
                  type="checkbox"
                  name="checkBox"
                  checked={formData.checkBox}
                  onChange={changeValue}
                  className="w-5 h-5 mt-0.5 accent-pink-500"
                />
                <label
                  htmlFor="acknowledgment"
                  className="text-sm text-gray-300 font-bold leading-relaxed"
                >
                  By signing up for this workshop, I acknowledge that
                  participation does not grant me membership or free entry into
                  amFOSS
                </label>
              </div>
              {/* <div className="flex items-start space-x-3 mt-6">
                <input
                  type="checkbox"
                  name="checkBox2"
                  checked={formData.checkBox2}
                  onChange={changeValue}
                  className="w-5 h-5 mt-0.5 accent-pink-500"
                />
                <label
                  htmlFor="acknowledgment-2"
                  className="text-sm text-gray-300 leading-relaxed"
                >
                  <span>
                    By signing up for this workshop, I acknowledge that I have
                    read and agree to the{" "}
                  </span>
                  <Link
                    className="text-white hover:text-pink-400 transition-colors underline"
                    href={"/terms"}
                  >
                    Terms & Condition
                  </Link>
                  ,{" "}
                  <Link
                    className="text-white hover:text-pink-400 transition-colors underline"
                    href={"/refund"}
                  >
                    Refund Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="text-white hover:text-pink-400 transition-colors underline"
                    href={"/privacy"}
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div> */}
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 w-full flex flex-col h-full items-center justify-center"
          >
            <div className="bg-black/20 rounded-xl p-6 border border-gray-700 w-full shadow-inner shadow-purple-900/20">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="text-white font-semibold border-b border-gray-600">
                    <th className="text-left pb-2">Item</th>
                    <th className="text-left pb-2">Price</th>
                    <th className="text-left pb-2">Total</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr>
                    <td className="py-2">Seat x 1</td>
                    <td className="py-2">₹1499</td>
                    <td className="py-2">₹1499</td>
                  </tr>
                  {/* <tr>
                    <td className="py-2">Taxes</td>
                    <td className="py-2">₹100</td>
                    <td className="py-2">₹100</td>
                  </tr> */}
                </tbody>
                <tfoot>
                  <tr className="border-t border-gray-600">
                    <td className="pt-4 text-white font-semibold text-lg">
                      Total
                    </td>
                    <td></td>
                    <td className="pt-4 text-white font-semibold text-lg">
                      ₹1499
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              disabled={isDisabled || isRegTimeOver}
              onClick={validateForm}
              className="relative text-white font-bold py-4 px-12 rounded-lg text-xl overflow-hidden disabled:cursor-not-allowed"
            >
              <span
                className={`
      absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 
      transition-opacity duration-500 ease-in-out
      ${isDisabled || isRegTimeOver ? "opacity-0" : "opacity-100"}
    `}
              />
              <span
                className={`
      absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 
      transition-opacity duration-500 ease-in-out
      ${isDisabled || isRegTimeOver ? "opacity-100" : "opacity-0"}
    `}
              />
              <span className="relative z-10">
                {" "}
                {wait ? <Loader className="h-5 w-5 animate-spin" /> : "Pay"}
              </span>
            </motion.button>
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
            >
              <HelpCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Need help? Contact us</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
