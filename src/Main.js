import { useState } from "react"
import { Button, Chip, TextField } from "@mui/material"
import { StyledButtonRow, StyledFormLayout } from "./Main.styles"
import { useStringReverser } from "./use-string-reverser"

export const Main = () => {
  const [inputText, setinputText] = useState("")
  const [reversedText, setReversedText] = useState()
  const { reverseString } = useStringReverser()

  const onChangeInput = event => {
    const value = event.target.value
    setinputText(value)
  }

  const onSubmit = async event => {
    event.preventDefault()
    const outputText = await reverseString(inputText)
    setReversedText(outputText)
    setinputText("")
  }

  const onReset = () => {
    setinputText("")
    setReversedText()
  }

  return (
    <form onSubmit={onSubmit}>
      <StyledFormLayout>
        <TextField
          sx={{ width: 250 }}
          name="inputText"
          label="Input Text"
          variant="standard"
          value={inputText}
          onChange={onChangeInput}
        />
        <StyledButtonRow>
          <Button variant="contained" size="small" type="submit">Reverse</Button>
          <Button variant="contained" size="small" color="error" onClick={onReset}>Reset</Button>
        </StyledButtonRow>
        {reversedText && (
          <Chip label={reversedText} variant="outlined" />
        )}
      </StyledFormLayout>
    </form>
  )
}
