function Badge({ children, tone = 'default' }) {
  const styles = {
    default: 'border-slate-800 bg-slate-900/80 text-slate-200',
    accent: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
    warm: 'border-amber-400/20 bg-amber-400/10 text-amber-100',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles[tone]}`}
    >
      {children}
    </span>
  )
}

export default Badge
