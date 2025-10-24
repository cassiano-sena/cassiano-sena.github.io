"use client";

import AudioPlayer from "../components/audio";
import Bottombar from "../components/bottombar";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

export default function ProjectsPage() {
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
          Meus Projetos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          Aqui estão alguns dos projetos que desenvolvi recentemente:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <div className="bg-gray-800 p-6 rounded-xl w-64 text-left">
            <h3 className="text-xl font-bold mb-2 text-accent">Projeto 1</h3>
            <p className="text-gray-400 mb-2">Descrição breve do projeto.</p>
            <a href="#" className="text-accent font-medium hover:underline">Ver mais</a>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl w-64 text-left">
            <h3 className="text-xl font-bold mb-2 text-accent">Projeto 2</h3>
            <p className="text-gray-400 mb-2">Descrição breve do projeto.</p>
            <a href="#" className="text-accent font-medium hover:underline">Ver mais</a>
          </div>
        </motion.div>
      </section>
      <Bottombar/>
    </main>
  );
}
