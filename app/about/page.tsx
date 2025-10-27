"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage({ lang }: { lang: "pt" | "en" }) {
  const t = {
    pt: {
      title: "███ ARQUIVO DO SUJEITO: CASSIANO ███",
      name: "Cassiano de Sena Crispim",
      occupation: "Desenvolvedor Full Stack",
      gender: "Masculino",
      age: "[RESTRITO]",
      height: "1.75 m",
      eyeColor: "Indefinido",
      likes: "Chá, Resolver Problemas",
      dislikes: "Ruído",
      location: "[SIGILOSO]",
      fileCreated: "23.10.2025",
      accessLevel: "ÔMEGA",
      fileStatus: "CLASSIFICADO",
      accessProjects: "Acessar Projetos",
      contactAgent: "Contatar Agente",
    },
    en: {
      title: "███ SUBJECT FILE: CASSIANO ███",
      name: "Cassiano de Sena Crispim",
      occupation: "Full Stack Developer",
      gender: "Male",
      age: "[REDACTED]",
      height: "1.75 m",
      eyeColor: "Undefined",
      likes: "Tea, Problem Solving",
      dislikes: "Noise",
      location: "Porto Belo",
      fileCreated: "10.23.2025",
      accessLevel: "OMEGA",
      fileStatus: "CLASSIFIED",
      accessProjects: "Access Projects",
      contactAgent: "Contact Agent",
    },
  }[lang];

  return (
    <main className="about-page bg-gray-950 min-h-screen text-white font-mono relative overflow-hidden">
      {/* Fundo digital */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_80%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_29px,rgba(255,255,255,0.05)_30px)] opacity-10 pointer-events-none"></div>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen p-10">
        {/* FICHA PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gray-900/70 border border-gray-700 rounded-2xl shadow-lg p-10 w-full max-w-5xl backdrop-blur-sm relative"
        >
          <div className="absolute top-4 right-6 text-xs text-gray-600">
            {/* FILE STATUS: <span className="text-red-500 font-bold">{t.fileStatus}</span> */}
          </div>

          {/* TÍTULO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-8 text-red-500 tracking-widest about-glitch"
            data-text={t.title}
          >
            {t.title}
          </motion.h1>

          {/* FOTO + INFO BÁSICA */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-10">
            {/* FOTO */}
            <div className="relative w-48 h-48 rounded-lg overflow-hidden border-4 border-red-600 shadow-[0_0_25px_rgba(255,0,0,0.3)] mx-auto md:mx-0">
              <Image
                src="/cassiano.jpg"
                alt="Cassiano photo"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* INFO BÁSICA */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              <Info label={lang === "pt" ? "Nome" : "Name"} value={t.name} />
              <Info label={lang === "pt" ? "Ocupação" : "Occupation"} value={t.occupation} />
              <Info label={lang === "pt" ? "Gênero" : "Gender"} value={t.gender} />
              <Info label={lang === "pt" ? "Idade" : "Age"} value={t.age} red />
              <Info label={lang === "pt" ? "Altura" : "Height"} value={t.height} />
              <Info label={lang === "pt" ? "Cor dos Olhos" : "Eye Color"} value={t.eyeColor} />
            </div>
          </div>

          {/* DETALHES EXTRAS */}
          <div className="grid grid-cols-2 gap-8">
            <Info label={lang === "pt" ? "Gosta de" : "Likes"} value={t.likes} />
            <Info label={lang === "pt" ? "Não gosta de" : "Dislikes"} value={t.dislikes} />
            <div className="col-span-2">
              <Info label={lang === "pt" ? "Localização Atual" : "Current Location"} value={t.location} red />
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-4 text-gray-500 text-sm tracking-wide">
            FILE CREATED: <span className="text-gray-300">{t.fileCreated}</span> — ACCESS LEVEL:{" "}
            <span className="text-red-500">{t.accessLevel}</span>
          </div>
        </motion.div>

        {/* BOTÕES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex gap-6 z-10"
        >
          <a
            href="/projects"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl text-white font-bold uppercase tracking-widest transition shadow-md"
          >
            {t.accessProjects}
          </a>
          <a
            href="/contact"
            className="border border-red-600 hover:bg-red-800 px-8 py-3 rounded-xl text-gray-200 uppercase tracking-widest transition"
          >
            {t.contactAgent}
          </a>
        </motion.div>
      </section>

      {/* EFEITO GLITCH */}
      <style jsx>{`
        .about-page .about-glitch {
          position: relative;
          display: inline-block;
        }

        .about-page .about-glitch::before,
        .about-page .about-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: inherit;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .about-page .about-glitch::before {
          color: #00ffff;
          transform: translate(-2px, -2px);
          text-shadow: 2px 0 #00ffff;
          animation: glitchTop 2s infinite linear alternate-reverse;
        }

        .about-page .about-glitch::after {
          color: #ff00ff;
          transform: translate(2px, 2px);
          text-shadow: -2px 0 #ff00ff;
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
        }

        @keyframes glitchTop {
          0% {
            clip-path: inset(0 0 80% 0);
          }
          40% {
            clip-path: inset(30% 0 40% 0);
          }
          80% {
            clip-path: inset(10% 0 70% 0);
          }
          100% {
            clip-path: inset(0 0 80% 0);
          }
        }

        @keyframes glitchBottom {
          0% {
            clip-path: inset(80% 0 0 0);
          }
          40% {
            clip-path: inset(50% 0 30% 0);
          }
          80% {
            clip-path: inset(20% 0 60% 0);
          }
          100% {
            clip-path: inset(80% 0 0 0);
          }
        }
      `}</style>
    </main>
  );
}

/* COMPONENTE INFO */
function Info({
  label,
  value,
  red = false,
}: {
  label: string;
  value: string;
  red?: boolean;
}) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{label}:</p>
      <p
        className={`text-lg font-semibold ${
          red ? "text-red-500" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
