import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import Type1 from '@/pages/Type1'
import Type2 from '@/pages/Type2'

const router = createBrowserRouter([
    
    {
      element: <DefaultLayout />,
      // errorElement: <ErrorPageFull />,
      children: [
        {
          path: '/',
          element: <Navigate to='/first-birthday-porty/Type1' replace />
        },
        {
          path: '/first-birthday-party',
          children: [
            {
              index: true,
              element: <Navigate to='/first-birthday-party/Type1' replace />
            },
            {
              path: '/first-birthday-party/Type1',
              element: <Type1 />
            },
            {
              path: '/first-birthday-party/Type2',
              element: <Type2 />
            } 
          ]
        },
      ]
    },
    /* {
      path: '*',
      element: <NotFound />
    } */
  ])
  
  export default function Router () {
    return <RouterProvider router={router} />
  }