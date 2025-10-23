"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-950 text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold mb-4"
      >
        Cassiano Dev
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-400 text-lg"
      >
        ...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-10 flex gap-4"
      >
        <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-white font-medium transition">
          Ver Projetos
        </button>
        <button className="border border-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl text-gray-300 transition">
          Sobre mim
        </button>
      </motion.div>
    </section>
  );
}
