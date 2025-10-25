"use client";

import AudioPlayer from "../components/audio";
import Bottombar from "../components/bottombar";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

export default function ContactPage({ lang }: { lang: "pt" | "en" }) {
  const isPt = lang === "pt";

  return (
    <main className="bg-gray-950 min-h-screen text-white">
      {/* <Navbar /> */}

      {/* Seção animada */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6 text-accent"
        >
          {isPt ? "Contato" : "Contact"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          {isPt
            ? "Você pode entrar em contato comigo através dos links abaixo:"
            : "You can reach me through the links below:"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {/* Email */}
          <a
            href="mailto:cassiano@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            <img src="/envelope.svg" alt="Email" className="w-8 h-8" />
            {isPt ? "Email" : "Email"}
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/cassiano-sena"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
            GitHub
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5547999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
            WhatsApp
          </a>
        </motion.div>
      </section>

      <Bottombar />
    </main>
  );
}
