import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "./App"

test("Can enter some input text and reverse it", () => {
  render(<App />)
  userEvent.type(screen.getByLabelText("Input Text"), "Hello")
  userEvent.click(screen.getByRole("button", { name: "Reverse" }))
  expect(screen.getByText("olleH")).toBeInTheDocument()
})

test("Can reset the form", () => {
  render(<App />)
  userEvent.type(screen.getByLabelText("Input Text"), "Hello")
  userEvent.click(screen.getByRole("button", { name: "Reverse" }))
  expect(screen.getByText("olleH")).toBeInTheDocument()
  userEvent.click(screen.getByRole("button", { name: "Reset" }))
  expect(screen.queryByText("olleH")).not.toBeInTheDocument()
})
