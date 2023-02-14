import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"

function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
