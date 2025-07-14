import { FAQ } from "../utils/types";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const FaqCard = ({ faq }: { faq: FAQ }) => {
  const [expandCard, setExpandCard] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        className="bg-white/10 rounded-xl px-6 py-4 text-white shadow-lg"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setExpandCard(!expandCard)}
        >
          <p className="font-semibold text-lg">{faq.question}</p>
          <motion.div
            animate={{ rotate: expandCard ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowDown />
          </motion.div>
        </div>

        <AnimatePresence>
          {expandCard && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <p className="text-sm text-gray-300">{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default function FaqGrid() {
  const faqs: FAQ[] = [
    {
      question: "Will I get amfoss membership if pay for this workshop?",
      answer:
        "No, attending or paying for this workshop does not guarantee amFOSS membership.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "Not at all. This workshop is meant for complete beginners. We’ll guide you step-by-step.",
    },
    {
      question: "What is this workshop about?",
      answer:
        "This workshop is designed to introduce you to the world of technology, coding, and problem solving. Whether you're from a technical background or not, it will help you build foundational skills in programming, version control (Git), Linux, and more.",
    },
    {
      question: "Who can attend this workshop?",
      answer:
        "Anyone who is interested in learning tech — especially first-year students! No prior experience is required. We welcome absolute beginners.",
    },
    {
      question: "Do I need a laptop to participate?",
      answer:
        "Yes, we recommend bringing your own laptop. If you don’t have one, you can share with a friend, or let us know in advance so we can try to make arrangements.",
    },
    {
      question: "Is this workshop free?",
      answer:
        "Not quite – it’s ₹1499! That gets you 14 days packed with hands-on learning, exciting projects, and a whole lot of fun. It’s an experience your future self will totally thank you for. 😎🚀",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes! All participants who complete the workshop will receive a certificate of participation.",
    },
    {
      question: "How do I register?",
      answer:
        "You can click on the 'Register Now' button on this page to secure your spot. Hurry — seats are limited!",
    },
    {
      question: "What should I bring?",
      answer:
        "Just bring: Your laptop and charger, A notebook and pen (optional), Lots of energy and questions!",
    },
    {
      question: "Who is organizing this workshop?",
      answer:
        "This workshop is organized by amFOSS, a student community at Amrita Vishwa Vidyapeetham focused on open source, programming, and tech outreach.",
    },
  ];
  return (
    <div
      id="faq"
      className="max-w-4xl mx-auto mt-[40vh] md:mt-[0vh] px-6 md:px-10"
    >
      <div>
        <div className="mb-8 w-fit">
          <p className="text-4xl font-bold text-white">FAQs</p>
          <div className="w-[80%] m-auto mt-1 h-1 bg-gradient-to-r  from-[#FF06E4] to-[#770297]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1  gap-4">
        {faqs.map((faq, i) => (
          <FaqCard key={i} faq={faq} />
        ))}
      </div>
    </div>
  );
}
