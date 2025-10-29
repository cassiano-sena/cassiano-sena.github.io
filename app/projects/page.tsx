"use client";

import Bottombar from "../components/bottombar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsPage({ lang }: { lang: "pt" | "en" }) {
  const isPt = lang === "pt";

  return (
    <main className="bg-transparent min-h-screen text-white">
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6 text-accent"
        >
          {isPt ? "Meus Projetos" : "My Projects"}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          {/* {isPt
            ? "Aqui estão alguns dos projetos que desenvolvi recentemente:"
            : "Here are some of the projects I’ve developed recently:"} */}
        </motion.p>

        {/* Cards de projetos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-xl w-72 text-left shadow-lg hover:shadow-xl transition">
            <div className="top-4 right-6 text-xs text-gray-600">
              STATUS: <span className="text-green-500 font-bold">{isPt ? "Em Desenvolvimento" : "In Development"}</span>
            <h3 className="text-xl font-bold mb-3 text-accent text-white">
              {isPt ? "Castlesage" : "Castlesage"}
            </h3>
            </div>
            {/* Imagem */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden border-2 border-red-600 mb-4">
              <Image
                src="/Meet_the_Team.png"
                alt="Castlesage photo"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* Descrição */}
            <p className="text-gray-400 mb-3 text-sm leading-relaxed">
              {isPt
                ? "Castlesage é um jogo MOBA voxelizado onde jogadores se agrupam em equipes, coletam recursos e disputam objetivos até conseguir invadir a base inimiga e destruir seu totem."
                : "Castlesage is a voxel-based MOBA where players team up, collect resources, and fight for objectives until they invade the enemy base and destroy their totem."}
            </p>

            <a href="#" className="text-accent font-medium hover:underline text-sm">
              {isPt ? "Ver mais" : "View more"}
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-xl w-72 text-left shadow-lg hover:shadow-xl transition">
            <div className="top-4 right-6 text-xs text-gray-600">
              STATUS: <span className="text-red-500 font-bold">{isPt ? "Descontinuado" : "Discontinued"}</span>
            <h3 className="text-xl font-bold mb-3 text-accent text-white">
              {isPt ? "eTransporte" : "eTransport"}
            </h3>
            </div>
            {/* Imagem */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden border-2 border-red-600 mb-4">
              <Image
                src="/eTransporte.jpg"
                alt="eTransport photo"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <p className="text-gray-400 mb-3 text-sm leading-relaxed">
              {isPt
                ? "eTransporte é um protótipo baseado na web feito em PHP, projetado para agilizar as atividades diárias de transporte dos estudantes. Ele possui funcionalidades de grupo, onde os usuários podem participar e colaborar. Dentro dos grupos, os participantes podem acompanhar os horários, posições e rotas dos ônibus, além de se comunicar com outros membros."
                : " eTransporte is a web-based PHP prototype designed to streamline students' daily transportation activities. It features group functionality where users can join and collaborate. Within groups, participants can track bus schedules, positions, and routes, as well as communicate with other members."}
            </p>
            <a href="#" className="text-accent font-medium hover:underline text-sm">
              {isPt ? "Ver mais" : "View more"}
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-xl w-72 text-left shadow-lg hover:shadow-xl transition">
            <div className="top-4 right-6 text-xs text-gray-600">
              STATUS: <span className="text-red-500 font-bold">{isPt ? "Descontinuado" : "Discontinued"}</span>
            <h3 className="text-xl font-bold mb-3 text-accent text-white">
              {isPt ? "DUELS TBRPG" : "DUELS TBRPG"}
            </h3>
            </div>
            {/* Imagem */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden border-2 border-red-600 mb-4">
              <Image
                src="/duels.jpg"
                alt="DUELS photo"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <p className="text-gray-400 mb-3 text-sm leading-relaxed">
              {isPt
                ? "Duels é um jogo rpg baseado em turnos onde você escolhe seu personagem para batalhar e ficar mais forte."
                : "Duels is a turn-based rpg game where you choose your character to battle and become stronger."}
            </p>
            <a href="#" className="text-accent font-medium hover:underline text-sm">
              {isPt ? "Ver mais" : "View more"}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
