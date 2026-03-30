import { Router } from 'express'
import { getResendClient } from '../lib/resend.js'

const router = Router()
const MIN_MESSAGE_LENGTH = 12

function normalizeField(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function validateContactPayload(payload) {
  const nome = normalizeField(payload.nome)
  const email = normalizeField(payload.email)
  const assunto = normalizeField(payload.assunto)
  const mensagem = normalizeField(payload.mensagem)
  const errors = {}

  if (!nome) {
    errors.nome = 'Informe seu nome.'
  }

  if (!email) {
    errors.email = 'Informe seu email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Informe um email válido.'
  }

  if (!assunto) {
    errors.assunto = 'Informe o assunto.'
  }

  if (!mensagem) {
    errors.mensagem = 'Escreva sua mensagem.'
  } else if (mensagem.length < MIN_MESSAGE_LENGTH) {
    errors.mensagem = `A mensagem deve ter no mínimo ${MIN_MESSAGE_LENGTH} caracteres.`
  }

  return {
    isValid: Object.keys(errors).length === 0,
    data: { nome, email, assunto, mensagem },
    errors,
  }
}

router.post('/contact', async (req, res) => {
  console.log('[contact] body recebido:', req.body)

  const validation = validateContactPayload(req.body ?? {})

  if (!validation.isValid) {
    const responseBody = {
      success: false,
      message: 'Dados inválidos.',
      details: validation.errors,
    }

    console.log('[contact] resposta final enviada:', responseBody)
    return res.status(400).json(responseBody)
  }

  try {
    const resend = getResendClient()
    const { nome, email, assunto, mensagem } = validation.data
    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.CONTACT_FROM_EMAIL

    if (!to || !from) {
      throw new Error('CONTACT_TO_EMAIL e CONTACT_FROM_EMAIL precisam estar configurados.')
    }

    const safeNome = escapeHtml(nome)
    const safeEmail = escapeHtml(email)
    const safeAssunto = escapeHtml(assunto)
    const safeMensagem = escapeHtml(mensagem)

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfólio] Novo contato de ${nome}`,
      text: [
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Assunto: ${assunto}`,
        '',
        'Mensagem:',
        mensagem,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">Novo contato pelo portfólio</h2>
          <p><strong>Nome:</strong> ${safeNome}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Assunto informado:</strong> ${safeAssunto}</p>
          <div style="margin-top: 24px; padding: 16px; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0;">
            <p style="margin-top: 0;"><strong>Mensagem</strong></p>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${safeMensagem}</p>
          </div>
        </div>
      `,
    })

    console.log('[contact] envio concluído com sucesso para:', to)

    const responseBody = {
      success: true,
      message: 'Email enviado com sucesso.',
    }

    console.log('[contact] resposta final enviada:', responseBody)
    return res.status(200).json(responseBody)
  } catch (error) {
    console.error('[contact] falha ao enviar email:', error)

    const responseBody = {
      success: false,
      message: 'Falha ao enviar email.',
    }

    console.log('[contact] resposta final enviada:', responseBody)
    return res.status(500).json(responseBody)
  }
})

export default router
