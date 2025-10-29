import SPAContent from "./SPAContent";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cassiano Dev",
  description: "Portfolio de Cassiano de Sena",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-background text-text flex flex-col overflow-x-hidden overflow-y-auto">
        <SPAContent />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
