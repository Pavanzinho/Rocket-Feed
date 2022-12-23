import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import {ThemeProvider} from 'styled-components';
import GlobalStyles from "./styles/global";
import {defaultTheme} from "./styles/theme"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>  
      <Home/>
    </ThemeProvider>
    
  </React.StrictMode>
)
