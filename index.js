import express from 'express'
import db from './models/index.js'
import chalk from 'chalk'
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {res.send('Hello world!')})

app.listen(PORT, async ()=>{
  try {
    await db.sequelize.authenticate()
    await db.sequelize.sync({alter: true})
    console.log(chalk.bgGreen(`Server running on port: ${PORT}`))
  } catch (error) {console.log(chalk.bgRed(error))}
})