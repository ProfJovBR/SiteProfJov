export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Mods', href: '#mods' },
  { label: 'Contato', href: '#contato' },
]

export const projectFilters = ['todos', 'mods', 'apps', 'programas']

export const projects = [
  {
    id: 'hyperchat-mod',
    title: 'HyperChat Mod',
    category: 'mods',
    description:
      'Mod de comunicação contextual com canais rápidos, indicadores de evento e integração visual com interfaces de HUD avançadas.',
    technologies: ['Lua', 'React UI', 'Socket Layer'],
    detailsLabel: 'Detalhes',
    repoLabel: 'Repo',
    accent: 'from-violet-500/35 via-fuchsia-500/10 to-cyan-400/20',
    preview: {
      label: 'Mod Interface',
      lines: ['Realtime commands', 'Guild channels synced', 'Overlay latency: 18ms'],
    },
  },
  {
    id: 'taskforge',
    title: 'TaskForge',
    category: 'apps',
    description:
      'Plataforma de produtividade para organizar fluxos de trabalho, prioridades críticas e automações com interface executiva.',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    detailsLabel: 'Detalhes',
    repoLabel: 'Repo',
    accent: 'from-cyan-500/35 via-sky-500/10 to-violet-500/20',
    preview: {
      label: 'Productivity App',
      lines: ['Priority matrix', 'Team boards', 'Automation packs'],
    },
  },
  {
    id: 'renderboost-cli',
    title: 'RenderBoost CLI',
    category: 'programas',
    description:
      'CLI de performance para pipelines visuais, reduzindo tempo de render, limpando cache e padronizando presets em lote.',
    technologies: ['Node.js', 'CLI', 'Automation'],
    detailsLabel: 'Detalhes',
    repoLabel: 'Repo',
    accent: 'from-indigo-500/35 via-violet-500/10 to-blue-400/20',
    preview: {
      label: 'CLI System',
      lines: ['Batch optimize', 'Preset enforcement', 'Render queue stable'],
    },
  },
  {
    id: 'citymods-pack',
    title: 'CityMods Pack',
    category: 'mods',
    description:
      'Coleção de mods visuais e sistêmicos para servidores urbanos, focada em ambientação premium e performance sólida.',
    technologies: ['Game Config', 'Textures', 'Systems'],
    detailsLabel: 'Detalhes',
    repoLabel: 'Repo',
    accent: 'from-fuchsia-500/30 via-rose-500/10 to-orange-400/20',
    preview: {
      label: 'Urban Pack',
      lines: ['Traffic logic', 'Visual overhaul', 'Low overhead'],
    },
  },
  {
    id: 'flowtrack-analytics',
    title: 'FlowTrack Analytics',
    category: 'apps',
    description:
      'Dashboard analítico com funis de conversão, relatórios acionáveis e monitoramento elegante para times digitais.',
    technologies: ['React', 'Charts', 'Data Sync'],
    detailsLabel: 'Detalhes',
    repoLabel: 'Repo',
    accent: 'from-blue-500/35 via-cyan-500/10 to-emerald-400/20',
    preview: {
      label: 'Analytics Board',
      lines: ['Live metrics', 'Funnel insights', 'Weekly snapshots'],
    },
  },
  {
    id: 'autopatcher',
    title: 'AutoPatcher',
    category: 'programas',
    description:
      'Programa para backup, rollback e atualização segura de arquivos críticos com histórico de versões e validação prévia.',
    technologies: ['C#', '.NET', 'Patch Engine'],
    detailsLabel: 'Detalhes',
    repoLabel: 'Repo',
    accent: 'from-violet-500/35 via-indigo-500/10 to-sky-400/20',
    preview: {
      label: 'Patch Manager',
      lines: ['Safe rollback', 'Version snapshots', 'Integrity checks'],
    },
  },
]

export const featuredMods = [
  {
    id: 'hyperchat-spotlight',
    title: 'HyperChat Mod',
    subtitle: 'Comunicação tática com visual integrado ao ecossistema do servidor.',
    description:
      'Projeto pensado para comunidades que precisam de canais rápidos, comandos contextuais e feedback visual consistente dentro do jogo.',
    technologies: ['Lua', 'Realtime Channels', 'HUD Extensions'],
    primaryAction: 'Acessar Mod',
    secondaryAction: 'Documentação',
    accent: 'from-violet-600/30 to-cyan-500/10',
  },
  {
    id: 'citymods-spotlight',
    title: 'CityMods Pack',
    subtitle: 'Pacote sistêmico e visual com foco em ambientação, performance e coesão.',
    description:
      'Combina recursos gráficos, organização modular e sistemas leves para manter a cidade viva sem comprometer estabilidade.',
    technologies: ['Textures', 'System Tuning', 'Optimization Pass'],
    primaryAction: 'Acessar Mod',
    secondaryAction: 'Documentação',
    accent: 'from-fuchsia-600/30 to-blue-500/10',
  },
]

export const skills = [
  {
    title: 'Front-end',
    level: 92,
    items: ['React', 'Tailwind CSS', 'Framer Motion', 'Componentização', 'UI Responsiva'],
  },
  {
    title: 'Back-end',
    level: 86,
    items: ['Node.js', 'APIs REST', 'Autenticação', 'Bancos relacionais', 'Integrações'],
  },
  {
    title: 'Mods & Systems',
    level: 90,
    items: ['Lua scripting', 'Pipelines de patch', 'HUD systems', 'Otimização in-game', 'Pack modular'],
  },
  {
    title: 'Ferramentas',
    level: 88,
    items: ['Git & GitHub', 'CLI workflow', 'Figma/Visily', 'Debugging', 'Documentação técnica'],
  },
]
