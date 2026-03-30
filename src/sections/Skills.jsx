import { motion } from 'framer-motion'
import { Cpu, Monitor, Server, Wrench } from 'lucide-react'
import Container from '../components/Container'
import SectionIntro from '../components/SectionIntro'
import { skills } from '../data/projects'

const skillIcons = {
  'Front-end': Monitor,
  'Back-end': Server,
  'Mods & Systems': Cpu,
  Ferramentas: Wrench,
}

function Skills() {
  return (
    <section id="habilidades" className="pb-20 sm:pb-24">
      <Container>
        <SectionIntro
          eyebrow="Arsenal Técnico"
          title="Capacidades organizadas para construir produtos modernos, sistemas confiáveis e mods refinados."
          description="A composição abaixo mantém visual uniforme e destaca as frentes de trabalho mais recorrentes."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.title]

            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(20,24,36,0.96),rgba(13,17,28,0.98))] p-6 shadow-[0_24px_50px_-34px_rgba(0,0,0,0.85)] transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] border border-cyan-300/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.28),rgba(59,130,246,0.16))] shadow-[0_16px_34px_-22px_rgba(96,165,250,0.65)] transition group-hover:shadow-[0_20px_40px_-18px_rgba(96,165,250,0.9)]">
                    <Icon className="h-6 w-6 text-sky-200 transition group-hover:text-cyan-100" strokeWidth={1.9} />
                  </div>
                  <div className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {skill.level}%
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{skill.title}</h3>

                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    <span>Nível de domínio</span>
                    <span className="text-slate-400">avançado</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.7, delay: 0.12 + index * 0.08 }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(129,140,248,0.92),rgba(56,189,248,0.92))]"
                    />
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 transition group-hover:border-white/10"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/10 bg-cyan-300/10">
                        <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.85)]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Skills
