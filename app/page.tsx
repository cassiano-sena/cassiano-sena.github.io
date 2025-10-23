import Navbar from './components/navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold">Cassiano Sena</h1>
        <p className="mt-4 text-gray-600">Desenvolvedor • IA • Portfólio</p>
      </section>
    </main>
  )
}
