"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";
import ContactPage from "./contact/page";
import Bottombar from "./components/bottombar";
import AnimatedBackground from "./components/animatedBackground";
import CastlesagePage from "./projects/castlesage/page";
import DuelsPage from "./projects/duels/page";
import ETransportePage from "./projects/etransporte/page";

export default function SPAContent() {
  const [page, setPage] = useState<
    "home" | "about" | "projects" | "skills" | "contact" | "castlesage" | "duels" | "etransporte"
  >("home");

  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "pt" | "en" | null;
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = {
    pt: {
      homeTitle: "Cassiano Dev",
      homeText: "Explore meus projetos, habilidades e formas de contato acima.",
      projects: "Projetos",
      about: "Sobre",
      skills: "Skills",
      contact: "Contato",
      langButton: "English",
    },
    en: {
      homeTitle: "Cassiano Dev",
      homeText: "Explore my projects, skills, and ways to get in touch above.",
      projects: "Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      langButton: "Português",
    },
  }[lang];

  const renderPage = () => {
    switch (page) {
      case "about":
        return <AboutPage lang={lang} />;
      case "projects":
        return <ProjectsPage lang={lang} onNavigate={setPage} />;
      case "skills":
        return <SkillsPage lang={lang} />;
      case "contact":
        return <ContactPage lang={lang} />;
      case "castlesage":
        return <CastlesagePage lang={lang} onNavigate={setPage} />;
      case "duels":
        return <DuelsPage lang={lang} onNavigate={setPage} />;
      case "etransporte":
        return <ETransportePage lang={lang} onNavigate={setPage} />;

      default:
        return (
          <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={lang + "-title"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-5xl font-extrabold mb-6 text-accent"
              >
                {t.homeTitle}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={lang + "-text"}
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-lg max-w-2xl leading-relaxed"
              >
                {t.homeText}
              </motion.p>
            </AnimatePresence>
          </section>
        );
    }
  };

  return (
    <div className="relative min-h-screen text-white pt-20 overflow-hidden">
      {/* 🔹 Fundo animado */}
      <AnimatedBackground page={page} />

      <NavbarWrapper
        onNavigate={setPage}
        currentPage={page}
        lang={lang}
        setLang={setLang}
        t={t}
      />

      <main className="flex-1 p-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      {/* <Bottombar /> */}
    </div>
  );
}

function NavbarWrapper({
  onNavigate,
  currentPage,
  lang,
  setLang,
  t,
}: {
  onNavigate: (page: "home" | "about" | "projects" | "skills" | "contact" | "castlesage" | "duels" | "etransporte") => void;
  currentPage: "home" | "about" | "projects" | "skills" | "contact" | "castlesage" | "duels" | "etransporte";
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
  t: any;
}) {
  const menuItems: { name: string; page: "about" | "projects" | "skills" | "contact" | "castlesage" | "duels" | "etransporte"}[] = [
    { name: t.projects, page: "projects" },
    { name: t.about, page: "about" },
    { name: t.skills, page: "skills" },
    { name: t.contact, page: "contact" },
    { name: t.castlesage, page: "castlesage" },
    { name: t.duels, page: "duels" },
    { name: t.etransporte, page: "etransporte" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate("home")}
          className="text-xl font-bold text-white focus:outline-none"
        >
          Cassiano Dev
        </motion.button>

        <ul className="flex gap-6 text-gray-400 items-center">
          {menuItems.map((item) => (
            <li key={item.page}>
              <AnimatePresence mode="wait">
                <motion.button
                  key={lang + "-" + item.page}
                  onClick={() => onNavigate(item.page)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className={`transition hover:text-white ${
                    currentPage === item.page ? "text-white font-medium" : ""
                  }`}
                >
                  {item.name}
                </motion.button>
              </AnimatePresence>
            </li>
          ))}
          <li>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="ml-4 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.25 }}
                >
                  {t.langButton}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
