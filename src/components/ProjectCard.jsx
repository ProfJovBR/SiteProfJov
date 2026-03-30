import { motion } from 'framer-motion'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(19,24,37,0.96),rgba(13,17,28,0.96))] shadow-[0_30px_60px_-34px_rgba(0,0,0,0.95)]"
    >
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_32%),linear-gradient(180deg,rgba(8,10,17,0.05),rgba(8,10,17,0.4))]" />
        <div className="absolute inset-x-6 top-6 rounded-2xl border border-white/10 bg-[#0c1120]/70 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
              {project.preview.label}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(45,212,255,0.9)]" />
          </div>
          <div className="mt-4 space-y-2">
            {project.preview.lines.map((line) => (
              <div key={line} className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
          {project.category}
        </span>
        <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0b0f19] transition hover:bg-slate-100"
          >
            {project.detailsLabel}
          </button>
          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
          >
            {project.repoLabel}
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
