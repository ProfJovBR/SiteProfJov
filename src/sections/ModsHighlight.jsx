import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionIntro from '../components/SectionIntro'
import { featuredMods } from '../data/projects'

function ModsHighlight() {
  return (
    <section id="mods" className="pb-20 sm:pb-24">
      <Container>
        <SectionIntro
          eyebrow="Especialidade: Modding & Systems"
          title="Destaques com presença mais chamativa para reforçar experiência em mods e sistemas."
          description="Dois projetos em foco com composição horizontal, mais brilho e ênfase visual em comparação aos demais blocos."
        />

        <div className="mt-10 space-y-6">
          {featuredMods.map((mod, index) => (
            <motion.article
              key={mod.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid gap-6 overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(135deg,rgba(17,21,34,0.98),rgba(11,15,25,0.98))] p-6 shadow-[0_30px_65px_-36px_rgba(0,0,0,0.95)] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className={`relative min-h-[18rem] overflow-hidden rounded-[28px] bg-gradient-to-br ${mod.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_30%),linear-gradient(180deg,rgba(10,13,22,0.08),rgba(10,13,22,0.46))]" />
                <div className="absolute inset-5 rounded-[24px] border border-white/10 bg-[#0b1020]/60 p-5 backdrop-blur-sm">
                  <div className="grid h-full gap-4">
                    <div className="rounded-[20px] border border-white/8 bg-white/[0.04] p-4">
                      <div className="mb-3 h-3 w-24 rounded-full bg-white/10" />
                      <div className="h-28 rounded-[18px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-[18px] border border-white/8 bg-white/[0.04]" />
                      <div className="rounded-[18px] border border-white/8 bg-white/[0.04]" />
                      <div className="rounded-[18px] border border-white/8 bg-white/[0.04]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                  Projeto em destaque
                </span>
                <h3 className="mt-5 text-3xl font-bold text-white">{mod.title}</h3>
                <p className="mt-3 text-lg font-medium text-violet-200">{mod.subtitle}</p>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">{mod.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {mod.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="rounded-full bg-[linear-gradient(135deg,#8b5cf6,#38bdf8)] px-6 py-3 text-sm font-semibold text-white shadow-soft-glow"
                  >
                    {mod.primaryAction}
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    {mod.secondaryAction}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ModsHighlight
