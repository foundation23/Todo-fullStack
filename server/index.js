
import cors from 'cors'
import sequelize from './db.js'
import express from 'express'
import {Todo, List} from './models/models.js'
import router from './routes/index.js'
import errorHandler from './middlewire/ErrorHandlingMiddleware.js'
import bodyParser from 'body-parser'

const PORT = 5000;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(bodyParser.json());
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log("server work"))
    } catch (e) {
        console.log(e)
    }
}

start()