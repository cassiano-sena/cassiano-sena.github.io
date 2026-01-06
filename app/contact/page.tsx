"use client";

import AudioPlayer from "../components/audio";
import Bottombar from "../components/bottombar";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

export default function ContactPage({ lang }: { lang: "pt" | "en" }) {
  const isPt = lang === "pt";

  return (
    <main className="bg-transparent min-h-screen text-white">
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
            href="mailto:contato109772@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-red-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            <img src="/envelope.svg" alt="Email" className="w-8 h-8" />
            <div className="text-black">
              {isPt ? "Email" : "Email"}
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/cassiano-sena"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-red-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
            <div className="text-black">
              GitHub
            </div>
          </a>

          {/* WhatsApp */}
          {/* <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-red-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
            <div className="text-black">
              WhatsApp
            </div>
          </a> */}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cassiano-de-sena-crispim-0a84a4213/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-red-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" className="w-8 h-8" />
            <div className="text-black">
              LinkedIn
            </div>
          </a>

        </motion.div>
      </section>
    </main>
  );
}
