import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import Container from '../components/Container'
import FilterPill from '../components/FilterPill'
import ProjectCard from '../components/ProjectCard'
import SectionIntro from '../components/SectionIntro'
import { projectFilters, projects } from '../data/projects'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'todos') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projetos" className="pb-20 sm:pb-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Galeria de Projetos"
            title="Projetos selecionados para evidenciar produto, performance e refinamento visual."
            description="O grid abaixo segue uma apresentação premium com filtro ativo, cards completos e hover moderno sem comprometer leitura."
          />

          <div className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <FilterPill
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </FilterPill>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  )
}

export default Projects
