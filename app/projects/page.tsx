"use client";

import Bottombar from "../components/bottombar";
import { motion } from "framer-motion";

export default function ProjectsPage({ lang }: { lang: "pt" | "en" }) {
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
          {isPt ? "Meus Projetos" : "My Projects"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          {isPt
            ? "Aqui estão alguns dos projetos que desenvolvi recentemente:"
            : "Here are some of the projects I’ve developed recently:"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-xl w-64 text-left">
            <h3 className="text-xl font-bold mb-2 text-accent">
              {isPt ? "Projeto 1" : "Project 1"}
            </h3>
            <p className="text-gray-400 mb-2">
              {isPt
                ? "Descrição breve do projeto."
                : "Brief description of the project."}
            </p>
            <a href="#" className="text-accent font-medium hover:underline">
              {isPt ? "Ver mais" : "View more"}
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-xl w-64 text-left">
            <h3 className="text-xl font-bold mb-2 text-accent">
              {isPt ? "Projeto 2" : "Project 2"}
            </h3>
            <p className="text-gray-400 mb-2">
              {isPt
                ? "Descrição breve do projeto."
                : "Brief description of the project."}
            </p>
            <a href="#" className="text-accent font-medium hover:underline">
              {isPt ? "Ver mais" : "View more"}
            </a>
          </div>
        </motion.div>
      </section>

      <Bottombar />
    </main>
  );
}
