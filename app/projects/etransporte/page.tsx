"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/app/components/backbutton";

export default function ETransportePage({
  lang="pt",
  onNavigate,
}: {
  lang: "pt" | "en";
  onNavigate: (page: "projects") => void;
}) {
  const t = {
    pt: {
      title: "eTransporte",
      description: `
        eTransporte foi um protótipo em PHP voltado para o gerenciamento de
        transporte estudantil, permitindo criar grupos, acompanhar rotas,
        horários e se comunicar com outros usuários.
      `,
    },
    en: {
      title: "eTransporte",
      description: `
        eTransporte was a PHP prototype focused on managing student
        transportation, allowing users to create groups, track routes,
        schedules, and communicate with others.
      `,
    },
  }[lang];

  return (
    <main className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-accent mb-6"
      >
        {t.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden border-2 border-red-500 shadow-lg">
          <Image
            src="/eTransporte.jpg"
            alt="eTransporte Screenshot"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
          {t.description}
        </p>

        <BackButton onNavigate={onNavigate} />
      </motion.div>
    </main>
  );
}
