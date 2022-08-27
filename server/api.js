const express = require('express')
const log = require("loglevel")

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const configureApiRouter = db => {

  const postReverse = async (req, res) => {
    try {
      await delay(500)
      const inputText = req.body.inputText
      const outputText = Array.from(inputText).reverse().join("")
      log.info("[postReverse]", { inputText, outputText })
      await db.createApiCallsRecord(inputText, outputText)
      res.json({ outputText })
    } catch (error) {
      log.error("[postReverse]", "error.message:", error.message)
      log.info("[postReverse]", "error:", error)
      throw error
    }
  }

  const apiRouter = express.Router()
  apiRouter.post("/reverse", postReverse)

  return apiRouter
}

module.exports = configureApiRouter
