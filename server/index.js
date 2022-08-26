const bodyParser = require("body-parser")
const express = require("express")
const log = require("loglevel")
const morgan = require("morgan")
const path = require("path")

const PORT = process.env.PORT ?? 3030
const BUILD_FOLDER = path.resolve(__dirname, "..", "build")

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const postReverse = async (req, res) => {
  await delay(500)
  const inputText = req.body.inputText
  const outputText = Array.from(inputText).reverse().join("")
  log.info("[postReverse]", { inputText, outputText })
  res.json({ outputText })
}

const main = () => {
  log.setLevel("info")
  const app = express()
  app.use(morgan("dev"))
  app.use(express.static(BUILD_FOLDER))
  app.use(bodyParser.json())
  const apiRouter = express.Router()
  apiRouter.post("/reverse", postReverse)
  app.use("/api", apiRouter)
  app.listen(PORT, () => log.info(`Listening on port ${PORT}`))
}

main()
