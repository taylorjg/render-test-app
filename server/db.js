const log = require("loglevel")
const pgp = require('pg-promise')()

const configurePostgres = async uri => {

  const db = pgp(uri)

  const createApiCallsRecord = async (inputText, outputText) => {
    const id = await db.one(
      `
        INSERT INTO api_calls
        (input_text, output_text)
        VALUES ($1, $2)
        RETURNING id
      `,
      [
        inputText,
        outputText
      ],
      record => record.id)
    log.info("[createApiCallsRecord]", "id:", id)
    return id
  }

  return {
    createApiCallsRecord
  }
}

module.exports = configurePostgres
