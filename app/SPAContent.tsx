"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";
import ContactPage from "./contact/page";

export default function SPAContent() {
  const [page, setPage] = useState<
    "home" | "about" | "projects" | "skills" | "contact"
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
        return <ProjectsPage lang={lang} />;
      case "skills":
        return <SkillsPage lang={lang} />;
      case "contact":
        return <ContactPage lang={lang} />;
      default:
        return (
          <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <h1 className="text-5xl font-extrabold mb-6 text-accent">
              {t.homeTitle}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              {t.homeText}
            </p>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <NavbarWrapper
        onNavigate={setPage}
        currentPage={page}
        lang={lang}
        setLang={setLang}
        t={t}
      />
      <main className="flex-1 p-6">{renderPage()}</main>
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
  onNavigate: (page: "home" | "about" | "projects" | "skills" | "contact") => void;
  currentPage: "home" | "about" | "projects" | "skills" | "contact";
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
  t: any;
}) {
  const menuItems: { name: string; page: "about" | "projects" | "skills" | "contact" }[] = [
    { name: t.projects, page: "projects" },
    { name: t.about, page: "about" },
    { name: t.skills, page: "skills" },
    { name: t.contact, page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-white">Cassiano Dev</span>
        <ul className="flex gap-6 text-gray-400 items-center">
          {menuItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() =>
                  onNavigate(item.page as "home" | "about" | "projects" | "skills" | "contact")
                }
                className={`transition hover:text-white ${
                  currentPage === item.page ? "text-white font-medium" : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="ml-4 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
            >
              {t.langButton}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
