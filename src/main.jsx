import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, Router} from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { router } from './Router/Router.jsx';
import ActionProvider from './Contexts/ActionContext.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActionProvider>
      <RouterProvider router={router} />
    </ActionProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
