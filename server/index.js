const express = require("express")
const log = require("loglevel")
const morgan = require("morgan")
const path = require("path")

const PORT = process.env.PORT ?? 3030
const BUILD_FOLDER = path.resolve(__dirname, "..", "build")

const main = () => {
  log.setLevel("info")
  const app = express()
  app.use(morgan("dev"))
  app.use(express.static(BUILD_FOLDER))
  app.listen(PORT, () => log.info(`Listening on port ${PORT}`))
}

main()
