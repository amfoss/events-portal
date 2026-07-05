import { AnimatePresence, motion } from "framer-motion";
import { Sessions } from "../utils/types";
export default function Schedule() {
  const sessions: Sessions[] = [
    {
      no: 0,
      category: "Open Source and Git Basics",
      day: 0,
      topic:
        "Introduction to Open Source, Git, GitHub, collaboration workflows, and workshop roadmap.",
    },
    {
      no: 1,
      category: "HTML",
      day: 1,
      topic:
        "Building the structure of web pages using semantic HTML elements and forms.",
    },
    {
      no: 2,
      category: "CSS",
      day: 2,
      topic:
        "Styling web pages with CSS, layouts, Flexbox, Grid, and responsive design.",
    },
    {
      no: 3,
      category: "JavaScript",
      day: 3,
      topic:
        "JavaScript fundamentals, DOM manipulation, events, and interactive web applications.",
    },
    {
      no: 4,
      category: "Intro to React & Vite",
      day: 4,
      topic:
        "Getting started with React, JSX, components, props, state, and Vite.",
    },
    {
      no: 5,
      category: "Project Frontend",
      day: 5,
      topic: "Building the frontend of the project using reusable React components.",
    },
    {
      no: 6,
      category: "Finish Frontend & Deploy",
      day: 6,
      topic:
        "Completing the frontend, optimizing responsiveness, and deploying the application.",
    },
    {
      no: 7,
      category: "Intro to Backend & Supabase",
      day: 7,
      topic:
        "Introduction to backend concepts, databases, authentication, and Supabase.",
    },
    {
      no: 8,
      category: "APIs & Backend",
      day: 8,
      topic:
        "Building APIs, handling backend logic, and managing application data.",
    },
    {
      no: 9,
      category: "Final Integration",
      day: 9,
      topic:
        "Connecting frontend and backend systems into a complete full-stack application.",
    },
    {
      no: 10,
      category: "Wrap Up",
      day: 10,
      topic:
        "Project showcase, feedback, open source opportunities, and next learning steps.",
    },
  ];

  return (
    <div id="schedule" className="max-w-4xl mx-auto my-4  0 px-6 md:px-10">
      <div>
        <div className="w-fit">
          <p className="text-4xl font-bold text-white">Schedule</p>
          <div className="w-[80%] m-auto mt-1 h-1 bg-gradient-to-r  from-[#f07c8fff] to-[#8b5cf6]"></div>
        </div>
      </div>
      <div className="min-h-screen py-12  text-white font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {sessions.map((session, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8, once: true }}
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:scale-[1.02] hover:bg-white/20 duration-300 shadow-lg"
              >
                <h2 className="text-lg font-semibold mb-2">
                  Day {session.day}
                </h2>
                {session.category && (
                  <p className="text-sm mb-1 text-pink-300 font-medium uppercase">
                    {session.category}
                  </p>
                )}
                <p className="text-sm text-white/90">{session.topic}</p>
              </motion.div>
            ))}
            /
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
