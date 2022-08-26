import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders App", () => {
  render(<App />)
  expect(screen.getByRole("button", { name: "Reverse" })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument()
})
