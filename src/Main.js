import { useState } from "react"
import { Button, Chip, TextField } from "@mui/material"
import { StyledButtonRow, StyledFormLayout } from "./Main.styles"

export const Main = () => {
  const [inputText, setinputText] = useState("")
  const [reversedText, setReversedText] = useState()

  const onChangeInput = event => {
    const value = event.target.value
    setinputText(value)
  }

  const onReverse = () => {
    setReversedText(Array.from(inputText).reverse().join(""))
    setinputText("")
  }

  const onReset = () => {
    setinputText("")
    setReversedText()
  }

  return (
    <form>
      <StyledFormLayout>
        <TextField
          sx={{ w: "20rem" }}
          id="standard-basic"
          label="Input"
          variant="standard"
          value={inputText}
          onChange={onChangeInput}
        />
        <StyledButtonRow>
          <Button variant="contained" size="small" onClick={onReverse}>Reverse</Button>
          <Button variant="contained" size="small" color="error" onClick={onReset}>Reset</Button>
        </StyledButtonRow>
        {reversedText && (
          <Chip label={reversedText} variant="outlined" />
        )}
      </StyledFormLayout>
    </form>
  )
}
