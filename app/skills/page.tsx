"use client";

import AudioPlayer from "../components/audio";
import Bottombar from "../components/bottombar";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      {/* <Navbar /> */}

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6 text-accent"
        >
          Skills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          Aqui estão algumas das tecnologias e ferramentas que utilizo:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-5 h-5" />PHP</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-5 h-5" />Java</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5" />JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-5 h-5" />C++</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="w-5 h-5" />Flutter</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-5 h-5" />Kotlin</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" className="w-5 h-5" />C#</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-5 h-5" />Python</span>
          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-5 h-5" />MySQL</span>

          <span className="bg-gray-800 px-4 py-2 rounded-xl text-accent font-medium flex items-center gap-2">          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" className="w-5 h-5" />Android Studio</span>
        
        </motion.div>
      </section>
      <Bottombar/>
    </main>
  );
}
