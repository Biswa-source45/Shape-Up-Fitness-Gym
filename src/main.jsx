import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from './components/About/About.jsx';
import Services from './components/Servicepage/Services.jsx';
import Programs from './components/Programs/Programs.jsx';
import Contactus from './components/Contactus/Contactus.jsx';

const router = new createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  { 
    path : "/about",
    element : <About />
  },
  { 
    path : "/services",
    element : <Services />
  },
  {
    path : "/programs",
    element : <Programs />
  },
  {
    path : "/contact",
    element : <Contactus />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
  <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>,
)
