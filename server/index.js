const express = require("express")
const path = require('path')

const PORT = process.env.PORT ?? 3030
const BUILD_FOLDER = path.resolve(__dirname, "..", "build")

const main = () => {
  const app = express()
  app.use(express.static(BUILD_FOLDER))
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
}

main()
