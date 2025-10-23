'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-900 text-white">
      <Link href="/">Início</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  )
}
