"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Projetos", href: "/projects" },
    { name: "Sobre", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Nome / Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Cassiano Dev
        </Link>

        {/* Menu */}
        <ul className="flex gap-6 text-gray-400">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition hover:text-white ${
                  pathname === item.href ? "text-white font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
