import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import Home from '../pages/home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp/>
  }
])
