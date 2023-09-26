import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'
import { CartContextProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const { currentTheme } = useContext(ThemeContext); // this only works because of the AppThemeWrapper()

  return (
    <ThemeProvider theme={currentTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
        <ToastContainer position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
