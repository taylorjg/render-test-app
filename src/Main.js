import { useState } from "react"
import { Button, Chip, TextField } from "@mui/material"
import { StyledButtonRow, StyledFormLayout } from "./Main.styles"
import { useStringReverser } from "./use-string-reverser"
import { useToast } from "./use-toast"

export const Main = () => {
  const [inputText, setinputText] = useState("")
  const [reversedText, setReversedText] = useState()
  const [callActive, setCallActive] = useState(false)
  const { reverseString } = useStringReverser()
  const { renderToast, showError } = useToast()

  const onChangeInput = event => {
    const value = event.target.value
    setinputText(value)
  }

  const onSubmit = async event => {
    event.preventDefault()
    try {
      setCallActive(true)
      const outputText = await reverseString(inputText)
      setReversedText(outputText)
      setinputText("")
    } catch (error) {
      showError(error.message)
    } finally {
      setCallActive(false)
    }
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
          <Button
            variant="contained"
            size="small"
            type="submit"
            disabled={callActive}
          >
            Reverse
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={onReset}
          >
            Reset
          </Button>
        </StyledButtonRow>
        {callActive && <div>CALL ACTIVE</div>}
        {reversedText && (
          <Chip label={reversedText} variant="outlined" />
        )}
      </StyledFormLayout>
      {renderToast()}
    </form>
  )
}
