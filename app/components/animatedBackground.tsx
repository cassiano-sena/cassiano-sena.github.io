"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Configuração de mensagens e imagens
const messages = [
  "Hello world!",
  "Welcome!",
  "Keep coding",
  "Cachorro quente é um sanduiche",
  "conhecimento>>",
  "O que é um cereal se não uma sopa?",
  "Programming = Magic",
  "G150",
  "Wishlist Castlesage on Steam",
  "",
];

const images = [
  "/cpp_icon.webp",
  "/mysql_icon.png",
  "/flutter_icon.png",
  "/sickass_skeleton.jpg",
  "/guten_morgen.jpg",
  "/bom_dia.jpeg",
];

type Particle = {
  id: number;
  type: "text" | "image";
  content: string;
  top: number;
  left: number;
  size: number;
  opacity: number;
  xAnim: number;
  yAnim: number;
  rotate: number;
};

export default function AnimatedBackground({
  page,
  maxParticles = 2,
  spawnInterval = 2000,
}: {
  page: string;
  maxParticles?: number;
  spawnInterval?: number;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [counter, setCounter] = useState(0);

  const random = (min: number, max: number) => Math.random() * (max - min) + min;

  const getGradient = () => {
    switch (page) {
      case "projects":
        return "linear-gradient(270deg, #1e3a8a, #0f172a, #1e3a8a)";
      case "about":
        return "linear-gradient(270deg, #4b5563, #111827, #4b5563)";
      case "skills":
        return "linear-gradient(270deg, #065f46, #0f172a, #065f46)";
      case "contact":
        return "linear-gradient(270deg, #7e22ce, #0f172a, #7e22ce)";
      default:
        return "linear-gradient(270deg, #111827, #1e293b, #111827)";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length >= maxParticles) return prev;

        const type: "text" | "image" = Math.random() < 0.7 ? "text" : "image";
        const content =
          type === "text"
            ? messages[Math.floor(Math.random() * messages.length)]
            : images[Math.floor(Math.random() * images.length)];

        const newParticle: Particle = {
          id: counter,
          type,
          content,
          top: random(0, 100),
          left: random(0, 100),
          size: random(1.5, 3),
          opacity: random(0.3, 0.6),
          xAnim: random(-50, 50),
          yAnim: random(-50, 50),
          rotate: random(-10, 10),
        };

        setCounter((c) => c + 1);

        return [...prev, newParticle];
      });
    }, spawnInterval);

    return () => clearInterval(interval);
  }, [counter, maxParticles, spawnInterval]);

  // Remove partículas depois de um tempo
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles((prev) => prev.filter((p, i) => i % 2 === 0 || Math.random() > 0.5));
    }, 5000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      {/* Fundo animado com gradiente */}
      <motion.div
        className="fixed inset-0 -z-10 overflow-hidden"
        animate={{
          backgroundImage: getGradient(),
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "400% 400%",
          filter: "blur(50px) brightness(0.8)",
        }}
      />

      {/* Partículas dinâmicas */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute pointer-events-none"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            fontSize: p.type === "text" ? `${p.size}rem` : undefined,
            width: p.type === "image" ? `${p.size * 2}rem` : undefined,
            height: p.type === "image" ? `${p.size * 2}rem` : undefined,
            opacity: p.opacity,
            filter: p.type === "text" ? "blur(3px)" : undefined,
          }}
          animate={{
            x: [0, p.xAnim, 0],
            y: [0, p.yAnim, 0],
            rotate: [0, p.rotate, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: random(5, 15),
            repeat: 0,
            ease: "easeInOut",
          }}
        >
          {p.type === "text" ? (
            <span className="text-white font-bold whitespace-nowrap">{p.content}</span>
          ) : (
            <img src={p.content} alt="" className="object-contain" />
          )}
        </motion.div>
      ))}
    </>
  );
}
