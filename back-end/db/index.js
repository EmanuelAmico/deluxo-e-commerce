require('dotenv').config()
const Sequelize = require("sequelize");

const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const hostname = process.env.DB_HOST
const port = process.env.DB_PORT
const dbName = process.env.DB_NAME

const client = new Sequelize(`postgres://${username}:${password}@${hostname}:${port}/${dbName}`, {
  logging: false,
  dialect: "postgres"
})

module.exports = client;