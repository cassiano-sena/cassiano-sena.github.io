import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cassiano Dev",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-background text-text flex flex-col">
        <header className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-accent">Cassiano Dev</h1>
          <nav className="space-x-6 text-sm">
            <Link href="/" className="hover:text-accent transition">Início</Link>
            <Link href="/about" className="hover:text-accent transition">Sobre</Link>
            <Link href="/projects" className="hover:text-accent transition">Projetos</Link>
            <Link href="/skills" className="hover:text-accent transition">Skills</Link>
            <Link href="/contact" className="hover:text-accent transition">Contato</Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
