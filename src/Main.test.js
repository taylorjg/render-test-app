import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "./App"

test("can complete the form and invoke the web service", async () => {
  render(<App />)
  userEvent.type(screen.getByLabelText("Input Text"), "hello")
  userEvent.click(screen.getByRole("button", { name: "Reverse" }))
  expect(await screen.findByText("hello-returned-by-mock-handler")).toBeInTheDocument()
})

test("can reset the form", async () => {
  render(<App />)
  userEvent.type(screen.getByLabelText("Input Text"), "hello")
  userEvent.click(screen.getByRole("button", { name: "Reverse" }))
  expect(await screen.findByText("hello-returned-by-mock-handler")).toBeInTheDocument()
  userEvent.click(screen.getByRole("button", { name: "Reset" }))
  expect(screen.queryByText("hello-returned-by-mock-handler")).not.toBeInTheDocument()
})
