import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import Container from '../components/Container'

const terminalSequence = [
  {
    status: 'ONLINE',
    tone: 'emerald',
    text: '$ booting system...',
  },
  {
    status: 'PROCESSING',
    tone: 'amber',
    text: '$ loading modules...',
  },
  {
    status: 'PROCESSING',
    tone: 'amber',
    text: '$ initializing mod engine...',
  },
  {
    status: 'READY',
    tone: 'cyan',
    text: '$ systems.ready = true',
  },
]

const statusStyles = {
  ONLINE: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
  PROCESSING: 'border-amber-400/20 bg-amber-400/10 text-amber-100',
  READY: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-100',
}

function Hero() {
  const [activeLine, setActiveLine] = useState(0)
  const [typedText, setTypedText] = useState('')

  const currentEntry = terminalSequence[activeLine]

  useEffect(() => {
    const fullText = currentEntry.text
    let charIndex = 0

    setTypedText('')

    const typingInterval = window.setInterval(() => {
      charIndex += 1
      setTypedText(fullText.slice(0, charIndex))

      if (charIndex >= fullText.length) {
        window.clearInterval(typingInterval)
      }
    }, 42)

    return () => window.clearInterval(typingInterval)
  }, [currentEntry])

  useEffect(() => {
    const rotationInterval = window.setInterval(() => {
      setActiveLine((current) => (current + 1) % terminalSequence.length)
    }, 2400)

    return () => window.clearInterval(rotationInterval)
  }, [])

  const visibleLines = useMemo(() => {
    return terminalSequence.map((entry, index) => {
      if (index < activeLine) {
        return entry.text
      }

      if (index === activeLine) {
        return typedText
      }

      return ''
    })
  }, [activeLine, typedText])

  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-16 sm:pb-24 lg:pb-28 lg:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.2, 0.32, 0.2],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[4%] top-[8%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(123,92,255,0.18),_transparent_62%)] blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.12, 0.2, 0.12],
            scale: [1.02, 1, 1.02],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
          className="absolute right-[8%] top-[14%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(45,212,255,0.16),_transparent_60%)] blur-3xl"
        />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100"
            >
              Engenharia digital com direção técnica
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl xl:text-[5.25rem]"
            >
              Eu construo <span className="bg-[linear-gradient(135deg,#c084fc,#67e8f9,#60a5fa)] bg-clip-text text-transparent">sistemas</span>{' '}
              que fazem coisas acontecerem.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Crio mods, apps e ferramentas com foco em performance, automação e impacto real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projetos"
                className="rounded-full bg-[linear-gradient(135deg,#8b5cf6,#38bdf8)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft-glow transition"
              >
                Explorar Projetos
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contato"
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Falar Comigo
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="relative"
          >
            <motion.div
              animate={{ opacity: [0.2, 0.32, 0.22] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,_rgba(123,92,255,0.24),_transparent_55%)] blur-3xl"
            />
            <div className="relative rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(19,24,37,0.96),rgba(11,15,25,0.98))] p-5 shadow-[0_45px_80px_-38px_rgba(0,0,0,0.96)]">
              <div className="flex items-center justify-between rounded-[24px] border border-white/8 bg-white/[0.03] px-5 py-4">
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className={`h-3 w-3 rounded-full ${
                      currentEntry.status === 'ONLINE'
                        ? 'bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.85)]'
                        : currentEntry.status === 'PROCESSING'
                          ? 'bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.78)]'
                          : 'bg-cyan-300 shadow-[0_0_14px_rgba(45,212,255,0.85)]'
                    }`}
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Status do Sistema</p>
                    <p className="text-sm font-semibold text-white">Boot sequencial em execução</p>
                  </div>
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[currentEntry.status]}`}>
                  {currentEntry.status}
                </span>
              </div>

              <div className="mt-5 rounded-[28px] border border-cyan-300/10 bg-[#0c1120] p-5 shadow-[0_0_0_1px_rgba(45,212,255,0.04),0_18px_50px_-30px_rgba(45,212,255,0.25)]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="mt-5 space-y-3 font-mono text-sm">
                  {visibleLines.map((line, index) => {
                    const isCurrent = index === activeLine
                    const hasContent = line.length > 0

                    return (
                      <motion.div
                        key={terminalSequence[index].text}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: hasContent ? 1 : 0.35, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.08 }}
                        className={`rounded-2xl border px-4 py-3 ${
                          isCurrent
                            ? 'border-cyan-400/16 bg-cyan-400/10 text-cyan-50'
                            : hasContent
                              ? 'border-white/6 bg-white/[0.03] text-slate-300'
                              : 'border-white/5 bg-white/[0.02] text-slate-600'
                        }`}
                      >
                        <span className="text-cyan-300">$</span>{' '}
                        {line.replace(/^\$\s*/, '')}
                        {isCurrent && (
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                            className="ml-1 inline-block h-4 w-[7px] bg-cyan-200 align-middle"
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Engine Focus</p>
                    <p className="mt-3 text-3xl font-bold text-white">mods + apps</p>
                    <p className="mt-2 text-sm text-slate-400">sistemas pensados para execução, escala e uso real</p>
                  </div>
                  <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Pipeline State</p>
                    <p className="mt-3 text-lg font-semibold text-white">automation engaged</p>
                    <p className="mt-2 text-sm text-slate-400">componentes vivos, fluxo técnico e entrega mais consistente</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
