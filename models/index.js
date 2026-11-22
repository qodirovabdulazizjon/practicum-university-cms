import { Sequelize } from'sequelize'
import 'dotenv/config'

const DB_URL = process.env.DB_URL

const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  logging: false,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

export default db