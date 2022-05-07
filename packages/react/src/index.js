import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { App } from './app'

const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100vh;
  }
  body {
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 20px 0;
    padding: 24px 15px;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: inherit;
  }
`
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
const render = () => {
  const root = createRoot(document.getElementById('main'))

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path=":id" element={<App />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )
}

render()
