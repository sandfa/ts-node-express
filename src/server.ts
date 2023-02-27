import express, { Express } from 'express'
require('dotenv').config()

const app: Express = express()

app.use(express.json())

const firstRouter = require('./routes/firstRouter')
app.use('/v1/helloworld', firstRouter)

app.listen(process.env.PORT, () => { console.log('Server running! http://localhost:' + process.env.PORT)})
