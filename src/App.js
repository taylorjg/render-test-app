import { createTheme, Container, CssBaseline, ThemeProvider } from "@mui/material"
import { Main } from "./Main"
import { Version } from "./Verson"

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ mt: '2rem' }}>
        <Main />
        <Version />
      </Container>
    </ThemeProvider>)
}

export default App
