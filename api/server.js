const express = require("express")
const morgan = require("morgan");
const db = require("./db")
const routes = require('./routes')
const app = express()
const models = require('./models')

// Configs
app.use(morgan("dev"))
app.use(express.json()) //Para los GET no hace falta pero para los POST sí :)
app.use(express.urlencoded({ extended: false })); //Para que funcionen los formularios del front

app.get("/", (req, res, next) => {
  res.send("ok")
})

//Routes
/* app.use("/api", routes) */

// Error Middleware
app.use((error, req, res, next) =>{
  console.log(red("Ha ocurrido un error y entré al error middleware:"))
  console.log(error)
  res.sendStatus(500)
})

const deployServer = async () =>{
  try {
    await db.sync({ force: true })
    const port = 3002
    app.listen(port, () =>{
      console.log(`Server running on http://localhost/${port}`)
    })  
  } catch(error) {
    console.log(error)
  }
}

deployServer()