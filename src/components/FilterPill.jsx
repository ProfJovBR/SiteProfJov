function FilterPill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] transition duration-300 ${
        active
          ? 'border-violet-400/30 bg-[linear-gradient(135deg,rgba(123,92,255,0.28),rgba(45,212,255,0.16))] text-white shadow-soft-glow'
          : 'border-white/8 bg-white/[0.03] text-slate-300 hover:border-white/15 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}

export default FilterPill
