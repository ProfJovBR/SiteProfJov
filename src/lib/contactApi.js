function invalidResponseError(message, extra = {}) {
  return {
    success: false,
    message,
    ...extra,
  }
}

export async function sendContactMessage(payload) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const contentType = response.headers.get('content-type') || ''
    const isJson = contentType.includes('application/json')

    if (!isJson) {
      const fallbackText = await response.text().catch(() => '')
      throw invalidResponseError(
        'O servidor retornou uma resposta inesperada. Verifique se o backend local está ativo.',
        { details: fallbackText ? { preview: fallbackText.slice(0, 120) } : {} },
      )
    }

    const data = await response.json()

    if (!response.ok) {
      throw invalidResponseError(data.message || 'Não foi possível enviar sua mensagem agora.', {
        details: data.details || data.errors || {},
      })
    }

    return {
      success: Boolean(data.success),
      message: data.message || 'Email enviado com sucesso.',
    }
  } catch (error) {
    if (error?.message === 'Failed to fetch') {
      throw invalidResponseError(
        'Não foi possível conectar ao servidor local. Verifique se o backend está rodando na porta correta.',
      )
    }

    if (error?.success === false) {
      throw error
    }

    throw invalidResponseError('Ocorreu um erro inesperado ao enviar sua mensagem.')
  }
}
