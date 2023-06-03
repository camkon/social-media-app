import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import postRoutes from './routes/posts.js'

const app = express()

app.use('/posts', postRoutes)













app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://camkon:camkon20@cluster0.lzpvzje.mongodb.net/' //already done by the extention
const PORT = process.env.PORT || 5000 //later when on env

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(`Error : ${error.message}`))
