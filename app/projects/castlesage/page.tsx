"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/app/components/backbutton";

export default function CastlesagePage({
  lang="pt",
  onNavigate,
}: {
  lang: "pt" | "en";
  onNavigate: (page: "projects") => void;
}) {
  const t = {
    pt: {
      title: "Castlesage",
      description: `
        Castlesage é um jogo MOBA voxelizado onde equipes coletam recursos,
        disputam objetivos e lutam para destruir o totem inimigo.

        O projeto está em desenvolvimento, com foco em um sistema de progressão
        leve e batalhas táticas entre times.
      `,
    },
    en: {
      title: "Castlesage",
      description: `
        Castlesage is a voxel-based MOBA where teams collect resources,
        fight for objectives, and aim to destroy the enemy totem.

        The project is under development, focusing on a light progression system
        and tactical team-based combat.
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
        <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden border-2 border-accent shadow-lg">
          <Image
            src="/Meet_the_Team.png"
            alt="Castlesage Screenshot"
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
