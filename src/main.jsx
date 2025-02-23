import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import PageRouter from './pages/PageLayout.jsx';
import {ThemeProvider} from "./context.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider> 
        <PageRouter />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
