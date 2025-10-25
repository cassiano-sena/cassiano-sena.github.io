"use client";

import Bottombar from "../components/bottombar";
import { motion } from "framer-motion";

export default function SkillsPage({ lang }: { lang: "pt" | "en" }) {
  const isPt = lang === "pt";

  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6 text-accent"
        >
          {isPt ? "Skills" : "Skills"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          {isPt
            ? "Aqui estão algumas das tecnologias e ferramentas que utilizo:"
            : "Here are some of the technologies and tools I use:"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          {[
            ["PHP", "php"],
            ["Java", "java"],
            ["JavaScript", "javascript"],
            ["C++", "cplusplus"],
            ["Flutter", "flutter"],
            ["Kotlin", "kotlin"],
            ["C#", "csharp"],
            ["Python", "python"],
            ["MySQL", "mysql"],
            ["Android Studio", "androidstudio"],
          ].map(([name, icon]) => (
            <span
              key={name}
              className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
                alt={name}
                className="w-5 h-5"
              />
              {name}
            </span>
          ))}
        </motion.div>
      </section>

      <Bottombar />
    </main>
  );
}
