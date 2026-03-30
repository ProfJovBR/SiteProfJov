function InfoPanel({ title, children }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)]">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default InfoPanel
