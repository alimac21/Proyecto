import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import personRoutes from './routes/person.routes'
import medicoRoutes from './routes/medico.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes)
app.use(personRoutes)
app.use(medicoRoutes)

export default app;