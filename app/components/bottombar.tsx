"use client";
import { motion } from "framer-motion";
// import AudioPlayer from "./audio";

export default function Bottombar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-white font-bold">
          © 2025 Cassiano de Sena. All rights reserved.
        </div>
        <div>
          {/* <AudioPlayer /> */}
        </div>
      </div>
    </motion.nav>
  );
}
