import Navbar from "../components/navbar";
import Hero from "../components/hero";

export default function SkillsPage() {
  return (
    <main className="bg-gray-950 min-h-screen">
    <Navbar />
    <Hero />
    <section className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <p className="text-gray-400">Aqui estarão minhas hardskills e softskills.</p>
    </section>
    </main>
  );
}