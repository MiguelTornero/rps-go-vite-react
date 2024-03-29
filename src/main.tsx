import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Game from './routes/game'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>Error</div>
  },{
    path: "/game",
    element: <Game/>,
    errorElement: <div>Error</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
