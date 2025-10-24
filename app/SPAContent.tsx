"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";
import ContactPage from "./contact/page";
import Navbar from "./components/navbar"; // <-- importa sua Navbar

export default function SPAContent() {
  const [page, setPage] = useState<
    "home" | "about" | "projects" | "skills" | "contact"
  >("home");

  // Função para renderizar a página correta
  const renderPage = () => {
    switch (page) {
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "skills":
        return <SkillsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-6 text-accent"
            >
            Cassiano Dev
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            >
            projetos, habilidades, contato.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
            >
            
            </motion.div>
        </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      {/* Navbar fixa no topo */}
      <NavbarWrapper onNavigate={setPage} currentPage={page} />

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">{renderPage()}</main>
    </div>
  );
}

function NavbarWrapper({
  onNavigate,
  currentPage,
}: {
  onNavigate: (page: "home" | "about" | "projects" | "skills" | "contact") => void;
  currentPage: string;
}) {
  const menuItems = [
    { name: "Início", page: "home" },
    { name: "Projetos", page: "projects" },
    { name: "Sobre", page: "about" },
    { name: "Skills", page: "skills" },
    { name: "Contato", page: "contact" },
  ] as const;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-white">Cassiano Dev</span>
        <ul className="flex gap-6 text-gray-400">
          {menuItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => onNavigate(item.page)}
                className={`transition hover:text-white ${
                  currentPage === item.page ? "text-white font-medium" : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
