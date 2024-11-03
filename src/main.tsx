import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import About from './components/About/About'
import Error from './components/Error/Error'
import "./util/i18next"
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      },
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
