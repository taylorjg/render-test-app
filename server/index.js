const bodyParser = require("body-parser")
const express = require("express")
const log = require("loglevel")
const morgan = require("morgan")
const path = require("path")

const configurePostgres = require("./db")
const configureApiRouter = require("./api")

const PORT = process.env.PORT ?? 3030
const DATABASE_URL = process.env.DATABASE_URL
const BUILD_FOLDER = path.resolve(__dirname, "..", "build")

const main = async () => {
  log.setLevel("info")
  const db = await configurePostgres(DATABASE_URL)
  const apiRouter = configureApiRouter(db)
  const app = express()
  app.use(morgan("dev"))
  app.use(express.static(BUILD_FOLDER))
  app.use(bodyParser.json())
  app.use("/api", apiRouter)
  app.listen(PORT, () => log.info(`Listening on port ${PORT}`))
}

main()
