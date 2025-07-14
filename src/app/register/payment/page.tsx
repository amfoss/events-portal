"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, Clock, XCircle } from "lucide-react";
import axios from "axios";

export default function PaymentScreen() {
  // const isProcessing = false;
  // const PaymentSucess = false;
  const [isProcessing, setIsProcessing] = useState(true);
  const [PaymentSucess, setPaymentSucess] = useState(false);
  const [TransactionId, setTransactionId] = useState("");

  useEffect(() => {
    async function fetchPaymentStatus() {
      const res = await axios.get(
        "http://127.0.0.1:5000/payment-confirmation/" +
          localStorage.getItem("orderId"),
      );
      if (res.data.success) {
        console.log(res.data);
        setIsProcessing(false);
        setTransactionId(res.data.transactionId);
        setPaymentSucess(true);
      } else if (!res.data.success) {
        console.log(res.data);
        setIsProcessing(false);
        setTransactionId(res.data.transactionId);
        setPaymentSucess(false);
      } else {
        console.log("Still processing:", res.data.state);
      }
    }
    fetchPaymentStatus();
  }, []);

  const orderDetails = {
    transId: TransactionId || "N/A",
    // transId: "N/A",
    amount: "₹1499",
    date: new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  const BackButton = () => (
    <div className="absolute top-6 left-6 z-50">
      <button
        onClick={() => (window.location.href = "/")}
        className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="hidden sm:inline text-sm font-medium">Back</span>
      </button>
    </div>
  );

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">
        <BackButton />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-6 w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Processing Payment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 mb-6"
            >
              Please wait while we process your payment securely...
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-sm text-gray-400"
            >
              <Clock className="w-4 h-4" />
              <span>This may take a few moments</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
  if (PaymentSucess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">
        <BackButton />
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
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                  className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  Payment Successful!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-gray-300"
                >
                  Your registration is confirmed
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="space-y-4 mb-8"
              >
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-400">Transaction ID</span>
                  <span className="text-white ml-5 font-mono">
                    {orderDetails.transId}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-400">Amount Paid</span>
                  <span className="text-white font-semibold">
                    {orderDetails.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-400">Date</span>
                  <span className="text-white">{orderDetails.date}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Time</span>
                  <span className="text-white">{orderDetails.time}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">
      <BackButton />
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
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center"
              >
                <XCircle className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-3xl font-bold text-white mb-2"
              >
                Payment Failed
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-gray-300"
              >
                Unfortunately, your payment could not be processed.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="space-y-4 mb-8"
            >
              <div className="flex justify-between items-center py-2 border-b border-gray-600">
                <span className="text-gray-400">Transaction ID</span>
                <span className="text-white font-mono">
                  {orderDetails.transId}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-600">
                <span className="text-gray-400">Amount</span>
                <span className="text-white font-semibold">
                  {orderDetails.amount}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-600">
                <span className="text-gray-400">Date</span>
                <span className="text-white">{orderDetails.date}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Time</span>
                <span className="text-white">{orderDetails.time}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="space-y-3"
            >
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => (window.location.href = "/register")}
              >
                Try Again
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
