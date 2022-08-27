import { rest } from "msw"

const mockApiReverseHandler = (req, res, ctx) => {
  const inputText = req.body.inputText

  if (inputText === "error") {
    return res(
      ctx.status(500)
    )
  }

  const outputText = `${inputText}-returned-by-mock-handler`

  return res(
    ctx.status(200),
    ctx.json({ outputText })
  )
}

export const handlers = [
  rest.post("/api/reverse", mockApiReverseHandler),
]
