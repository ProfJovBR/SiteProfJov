import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import Container from '../components/Container'
import InfoPanel from '../components/InfoPanel'
import SectionIntro from '../components/SectionIntro'
import { sendContactMessage } from '../lib/contactApi'

const contactItems = [
  { label: 'email', value: 'contato@devmaster.studio' },
  { label: 'linkedin', value: 'linkedin.com/in/devmaster' },
  { label: 'github', value: 'github.com/devmaster' },
]

const initialForm = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
}

function validateForm(values) {
  const errors = {}

  if (!values.nome.trim()) {
    errors.nome = 'Informe seu nome.'
  }

  if (!values.email.trim()) {
    errors.email = 'Informe seu email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Informe um email válido.'
  }

  if (!values.assunto.trim()) {
    errors.assunto = 'Informe o assunto.'
  }

  if (!values.mensagem.trim()) {
    errors.mensagem = 'Escreva sua mensagem.'
  } else if (values.mensagem.trim().length < 12) {
    errors.mensagem = 'A mensagem deve ter no mínimo 12 caracteres.'
  }

  return errors
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const statusClasses = useMemo(() => {
    if (status.type === 'success') {
      return 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100'
    }

    if (status.type === 'error') {
      return 'border-rose-400/20 bg-rose-400/10 text-rose-100'
    }

    return ''
  }, [status.type])

  function handleChange(event) {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => {
      if (!current[name]) {
        return current
      }

      const nextErrors = { ...current }
      delete nextErrors[name]
      return nextErrors
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const nextErrors = validateForm(form)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: 'error', message: 'Revise os campos destacados antes de enviar.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })
    setErrors({})

    try {
      const response = await sendContactMessage({
        nome: form.nome.trim(),
        email: form.email.trim(),
        assunto: form.assunto.trim(),
        mensagem: form.mensagem.trim(),
      })

      setForm(initialForm)
      setStatus({ type: 'success', message: response.message || 'Mensagem enviada com sucesso.' })
    } catch (error) {
      setErrors(error?.details || {})
      setStatus({
        type: 'error',
        message: error?.message || 'Não foi possível enviar sua mensagem agora. Tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function inputClass(fieldName) {
    return `w-full rounded-2xl border bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30 ${
      errors[fieldName] ? 'border-rose-400/40' : 'border-white/8'
    }`
  }

  return (
    <section id="contato" className="pb-20 sm:pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro
              eyebrow="Diga Olá"
              title="Vamos conversar sobre interfaces, sistemas, apps e mods com acabamento profissional."
              description="O bloco de contato mantém a mesma estética do restante do layout, com informações diretas e formulário bem definido."
            />

            <div className="mt-8 space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base font-medium text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5">
              <InfoPanel title="Box informativo">
                <p className="text-sm leading-7 text-slate-300">
                  Resposta focada, briefing claro e organização do escopo para que o projeto avance com direção
                  visual e técnica desde a primeira conversa.
                </p>
              </InfoPanel>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(20,24,36,0.96),rgba(11,15,25,0.98))] p-6 shadow-[0_30px_60px_-38px_rgba(0,0,0,0.95)] sm:p-8"
          >
            {status.message && (
              <div className={`mb-5 rounded-2xl border px-4 py-3 text-sm ${statusClasses}`}>
                {status.message}
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Nome</span>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={inputClass('nome')}
                  disabled={isSubmitting}
                />
                {errors.nome && <span className="mt-2 block text-sm text-rose-200">{errors.nome}</span>}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@dominio.com"
                  className={inputClass('email')}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="mt-2 block text-sm text-rose-200">{errors.email}</span>}
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Assunto</span>
              <input
                type="text"
                name="assunto"
                value={form.assunto}
                onChange={handleChange}
                placeholder="Vamos falar sobre..."
                className={inputClass('assunto')}
                disabled={isSubmitting}
              />
              {errors.assunto && <span className="mt-2 block text-sm text-rose-200">{errors.assunto}</span>}
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Mensagem</span>
              <textarea
                rows="6"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Descreva seu projeto, objetivo ou ideia."
                className={`w-full rounded-[24px] border bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30 ${
                  errors.mensagem ? 'border-rose-400/40' : 'border-white/8'
                }`}
                disabled={isSubmitting}
              />
              {errors.mensagem && <span className="mt-2 block text-sm text-rose-200">{errors.mensagem}</span>}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,#8b5cf6,#38bdf8)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}

export default Contact
