import Container from '../components/Container'

function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-bold text-white">
            DM
          </span>
          <div>
            <p className="text-lg font-bold text-white">DevMaster</p>
            <p className="text-sm text-slate-400">Projetando experiências e sistemas digitais.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-400 sm:items-end">
          <p>© 2026 DevMaster. Todos os direitos reservados.</p>
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
            v1.0 portfolio
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
