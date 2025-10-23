import type { Metadata } from "next";
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
            <a href="/" className="hover:text-accent transition">Início</a>
            <a href="/about" className="hover:text-accent transition">Sobre</a>
            <a href="/projects" className="hover:text-accent transition">Projetos</a>
            <a href="/skills" className="hover:text-accent transition">Skills</a>
            <a href="/contact" className="hover:text-accent transition">Contato</a>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
