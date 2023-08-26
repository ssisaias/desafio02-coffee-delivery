import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme, darkTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeContextProvider } from './contexts/ThemeContext'

function App() {
  const getTheme = 
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          
            <Router/>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default App
