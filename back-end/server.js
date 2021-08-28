const express = require("express");
const morgan = require("morgan");
const https = require("https");
const fs = require("fs");
const path = require("path");
const db = require("./db");
const routes = require("./routes");
const cors = require("cors");
const app = express();

// Configs
app.use(morgan("short"));
app.use(express.json()); //Para los GET no hace falta pero para los POST sí :)
app.use(express.urlencoded({ extended: false })); //Para que funcionen los formularios del front
app.use(cors());
app.options("/", cors()); // Para que funcionen los méotodos OPTIONS en el cross-origin

// Logging
app.use(
  morgan("combined", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);

// Https
const key = fs.readFileSync(__dirname + "/certs/privkey.pem");
const cert = fs.readFileSync(__dirname + "/certs/fullchain.pem");
const httpsOptions = { key, cert };
const server = https.createServer(httpsOptions, app);

//Routes
app.use("/api", routes);

// Error Middleware
app.use((error, req, res, next) => {
  console.log("Ha ocurrido un error y entré al error middleware:");
  console.log(error);
  res.sendStatus(500);
});

const startServer = async () => {
  try {
    await db.sync({ force: false });
    const port = 443;
    server.listen(port, () => {
      console.log(`Server running on https://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
