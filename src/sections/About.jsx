import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionIntro from '../components/SectionIntro'

const pillars = [
  {
    title: 'Interfaces',
    text: 'Design systems reutilizáveis, estados previsíveis e fluxos que reduziram retrabalho visual em entregas recorrentes.',
    meta: '+50 telas estruturadas',
  },
  {
    title: 'Otimização',
    text: 'Ajustes de render, organização de assets e automações de processo para acelerar operação e manter estabilidade.',
    meta: 'Pipelines com menos atrito',
  },
  {
    title: 'Inovação',
    text: 'Mods, apps e ferramentas com lógica aplicada a uso real, integração entre camadas e manutenção pensada desde o início.',
    meta: 'Sistemas para produção',
  },
]

const metrics = [
  { value: '+50', label: 'projetos' },
  { value: '18+', label: 'sistemas desenvolvidos' },
  { value: '30+', label: 'automações criadas' },
]

function About() {
  return (
    <section id="sobre" className="pb-20 sm:pb-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="relative"
          >
            <div className="absolute -left-5 top-6 z-10 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-soft-glow">
              10k+ horas construindo sistemas
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,28,41,0.96),rgba(12,16,27,0.98))] p-5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.92)]">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[28rem] rounded-[26px] border border-cyan-300/10 bg-[radial-gradient(circle_at_top_left,rgba(45,212,255,0.14),transparent_28%),linear-gradient(135deg,#12182a,#0b1020)] p-5 shadow-[0_0_0_1px_rgba(45,212,255,0.05),0_20px_60px_-35px_rgba(45,212,255,0.22)]"
              >
                <div className="grid h-full gap-4">
                  <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
                    <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-4">
                      <div className="mb-4 h-3 w-20 rounded-full bg-violet-400/40" />
                      <div className="space-y-3">
                        <div className="h-24 rounded-[20px] bg-[linear-gradient(135deg,rgba(139,92,246,0.5),rgba(45,212,255,0.18))]" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 rounded-[18px] bg-white/[0.04]" />
                          <div className="h-20 rounded-[18px] bg-white/[0.04]" />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-4">
                      <div className="mb-4 h-3 w-14 rounded-full bg-cyan-400/40" />
                      <div className="space-y-3">
                        <div className="h-14 rounded-[16px] bg-white/[0.04]" />
                        <div className="h-28 rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                        <div className="h-12 rounded-[16px] bg-white/[0.04]" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[26px] border border-white/8 bg-[#080d17] p-5">
                    <div className="flex h-full items-center justify-center rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(123,92,255,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
                      <div className="w-full max-w-sm rounded-[24px] border border-white/10 bg-[#0d1322] p-4 shadow-[0_22px_50px_-30px_rgba(0,0,0,0.9)]">
                        <div className="mb-4 h-5 w-24 rounded-full bg-white/[0.08]" />
                        <div className="h-44 rounded-[20px] bg-[linear-gradient(180deg,rgba(45,212,255,0.18),rgba(123,92,255,0.18))]" />
                        <div className="mt-4 grid grid-cols-3 gap-3">
                          <div className="h-10 rounded-2xl bg-white/[0.05]" />
                          <div className="h-10 rounded-2xl bg-white/[0.05]" />
                          <div className="h-10 rounded-2xl bg-white/[0.05]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <SectionIntro
              eyebrow="Engenharia aplicada"
              title="Construção real, foco técnico e resultado perceptível."
              description="Projeto interfaces, automações e sistemas com lógica de produção, manutenção previsível e impacto direto no uso final."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {metrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.75)]"
                >
                  <div className="mb-4 h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,rgba(123,92,255,0.35),rgba(45,212,255,0.18))] shadow-[0_12px_30px_-18px_rgba(123,92,255,0.6)]" />
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.text}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{pillar.meta}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
