"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton({
  onNavigate,
  label = "Voltar",
}: {
  onNavigate: (page: "projects") => void;
  label?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onNavigate("projects")}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition mt-6"
    >
      <ArrowLeft size={20} />
      {label}
    </motion.button>
  );
}
