import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import contactRouter from './routes/contact.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
const allowedOrigins = [frontendUrl, 'http://127.0.0.1:5173']

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error(`Origem não permitida pelo CORS: ${origin}`))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
)
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  return res.status(200).json({ success: true, message: 'API online.' })
})

app.use('/api', contactRouter)

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Rota não encontrada: ${req.method} ${req.originalUrl}`,
  })
})

app.use((error, _req, res, _next) => {
  console.error('[server] erro não tratado:', error)

  if (error?.message?.includes('CORS')) {
    return res.status(403).json({
      success: false,
      message: 'Origem não permitida para esta API.',
    })
  }

  return res.status(500).json({
    success: false,
    message: 'Erro interno do servidor.',
  })
})

app.listen(port, () => {
  console.log(`[server] rodando em http://localhost:${port}`)
})
