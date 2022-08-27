import { useState } from "react"
import { Alert, Snackbar, Slide } from "@mui/material"

export const useToast = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState("success")

  const showCommon = (message, severity) => {
    setOpen(true)
    setMessage(message)
    setSeverity(severity)
  }

  const showSuccess = (message) => showCommon(message, "success")
  const showInfo = (message) => showCommon(message, "info")
  const showWarning = (message) => showCommon(message, "warning")
  const showError = (message) => showCommon(message, "error")

  const onClose = () => {
    setOpen(false)
    setMessage("")
  }

  const anchorOrigin = {
    horizontal: "center",
    vertical: "bottom"
  }

  const renderToast = () => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        TransitionComponent={Slide}
      >
        <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    )
  }

  return {
    renderToast,
    showSuccess,
    showInfo,
    showWarning,
    showError
  }
}
