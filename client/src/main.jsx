/*
@Author : Asaduzzaman Asad
@date : 2025/05/20
@description :  An E-commerce website built with React, featuring a modern design, product listings, and a user-friendly interface.
@version : 1.0.0
@license : MIT License
@repository : https://github.com/Asaduzzaman04/Urban-Edge

*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </StrictMode>
)
