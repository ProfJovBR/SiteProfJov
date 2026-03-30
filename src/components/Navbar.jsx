import Container from './Container'
import { navLinks } from '../data/projects'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-obsidian/80 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-bold text-white shadow-soft-glow">
            DM
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-slate-300">PORTFÓLIO</p>
            <p className="text-lg font-bold text-white">DevJove</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
