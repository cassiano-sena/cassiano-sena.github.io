import Navbar from "../components/navbar";
import Hero from "../components/hero";

export default function ProjectsPage() {
  return (
    <main className="bg-gray-950 min-h-screen">
    <Navbar />
    <Hero />
    <section className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">Meus Projetos</h1>
      <p className="text-gray-400">Aqui estarão meus projetos e estudos.</p>
    </section>
    </main>
  );
}