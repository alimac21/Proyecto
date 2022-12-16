import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import personRoutes from './routes/person.routes'
import medicoRoutes from './routes/medico.routes'
import enfermeraRoutes from './routes/enfermera.routes'
import phistoriaRoures  from './routes/phistoria.routes'
import historiamRoutres from './routes/historiam.routes'
import alergiaRoutes from './routes/alergia.routes'
import alergiapRoutes from './routes/alergiap.routes'
import enfermedadRoutes from './routes/enfermedad.routes'
import enfermedadpRoutes from './routes/enfermedadp.routes'
import analisisRoutes from './routes/analisis.routes'
import tquimsangRoutes from './routes/tquimsang.routes'
import quimsangRoutes from './routes/quimsang.routes'
import analisisQRoutes from './routes/analisisQ.routes'
import coprouroRoutes from './routes/coprouro.routes'
import analisisCRoutes from './routes/analisisC.routes'
import tcoprouroRoutes from './routes/tcoprouro.routes'


const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes)
app.use(personRoutes)
app.use(medicoRoutes)
app.use(enfermeraRoutes)
app.use(phistoriaRoures)
app.use(historiamRoutres)
app.use(alergiaRoutes)
app.use(alergiapRoutes)
app.use(enfermedadRoutes)
app.use(enfermedadpRoutes)
app.use(analisisRoutes)
app.use(tquimsangRoutes)
app.use(quimsangRoutes)
app.use(analisisQRoutes)
app.use(coprouroRoutes)
app.use(analisisCRoutes)
app.use(tcoprouroRoutes)



export default app;