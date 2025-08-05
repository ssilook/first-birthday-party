import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/pages/Home'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    /*
    {
      element: <PrivateRoute><DefaultLayout /></PrivateRoute>,
      errorElement: <ErrorPageFull />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    } */
  ])
  
  export default function Router () {
    return <RouterProvider router={router} />
  }