import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  const { currentTheme } = useContext(ThemeContext); // this only works because of the AppThemeWrapper()

  return (
    <ThemeProvider theme={currentTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
