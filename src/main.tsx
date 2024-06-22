import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './styles/GlobalStyles.ts'
import { ProductsProvider } from './context/ProductsContext.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles/>
     <ProductsProvider>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>,
)
