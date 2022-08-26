const bodyParser = require("body-parser")
const express = require("express")
const log = require("loglevel")
const morgan = require("morgan")
const path = require("path")

const PORT = process.env.PORT ?? 3030
const BUILD_FOLDER = path.resolve(__dirname, "..", "build")

const postReverse = (req, res) => {
  const inputText = req.body.inputText
  const outputText = Array.from(inputText).reverse().join("")
  log.info("[postReverse]", { inputText, outputText })
  res.json({ outputString: outputText })
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
