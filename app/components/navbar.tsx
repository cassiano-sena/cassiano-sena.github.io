"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const menuItems = ["Início", "Projetos", "Sobre", "Contato"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">Cassiano Dev</h1>
        <ul className="flex gap-6 text-gray-300">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-white transition">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
