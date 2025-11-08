import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from './components/RootLayout'
import Home from "./Dashboard/Home"
import AddTransaction from "./Transactions/addTransaction"


import './App.css'

function App() {

  const RouterObj = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path:'',
        element:<Home />
      },
      {
        path:'addTransaction',
        element:<AddTransaction />
      }
    ]
  }])

  return (
    <div>
        <RouterProvider router={RouterObj} /> 
    </div>
    
  )
}

export default App
