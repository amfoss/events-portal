import { AnimatePresence, motion } from "framer-motion";
import { Sessions } from "../utils/types";
export default function Schedule() {
  const sessions: Sessions[] = [
    {
      no: 1,
      category: "Introduction",
      day: 1,
      topic:
        "What makes a good software engineer, plan for the workshop, outcomes",
    },
    {
      no: 2,
      category: "Terminal Basics",
      day: 2,
      topic:
        "Setting up the development environment, basic shell commands, and how to Google effectively for solutions.",
    },
    {
      no: 3,
      category: "Advanced Terminal",
      day: 3,
      topic:
        "Advanced terminal commands and workflows to boost your productivity as a developer.",
    },
    {
      no: 4,
      category: "Git Basics",
      day: 4,
      topic:
        "Version Control System (Git) basics and essential commands for managing your code.",
    },
    {
      no: 5,
      category: "GitHub & Open Source",
      day: 5,
      topic:
        "Introduction to GitHub, GitLab and the essence of open source development.",
    },
    {
      no: 6,
      category: "Web Development Intro",
      day: 6,
      topic:
        "Introduction to Web development, HTML fundamentals, and CSS styling.",
    },
    {
      no: 7,
      category: "JavaScript & DOM",
      day: 7,
      topic:
        "Get started with JavaScript programming and Document Object Model manipulation.",
    },
    {
      no: 8,
      category: "Portfolio Project",
      day: 8,
      topic:
        "Build your own professional portfolio website and host it on Vercel.",
    },
    {
      no: 9,
      category: "APIs & Backend",
      day: 9,
      topic:
        "Understanding APIs, JSON, and introduction to different backend frameworks.",
    },
    {
      no: 10,
      category: "Flutter Setup",
      day: 10,
      topic:
        "Flutter installation, setup, and understanding the basics of mobile development.",
    },
    {
      no: 11,
      category: "Flutter Development",
      day: 11,
      topic: "Layouts, Interactivity & Navigation in Flutter.",
    },
    {
      no: 12,
      category: "Flutter Advanced",
      day: 12,
      topic: "Routing, Forms & State Management in Flutter.",
    },
    {
      no: 13,
      category: "AI Integration",
      day: 13,
      topic:
        "Integrating your first Flutter app with AI - the future of development.",
    },
    {
      no: 14,
      category: "Open Source Future",
      day: 14,
      topic:
        "From Small Fixes to Meaningful Contributions — mentorships, GSoC, Outreachy, and beyond.",
    },
  ];

  return (
    <div id="schedule" className="max-w-4xl mx-auto my-4  0 px-6 md:px-10">
      <div>
        <div className="w-fit">
          <p className="text-4xl font-bold text-white">Schedule</p>
          <div className="w-[80%] m-auto mt-1 h-1 bg-gradient-to-r  from-[#FF06E4] to-[#770297]"></div>
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
