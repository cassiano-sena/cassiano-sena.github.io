import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
