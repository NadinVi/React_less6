import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { theme } from './theme'
import { Router } from './router/router'

function App() {

  return (

    <ThemeProvider theme={theme}>
      <Router/>
      <CssBaseline/>
    </ThemeProvider>

  )
}

export default App
