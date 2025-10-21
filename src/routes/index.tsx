import { createHashRouter, RouterProvider, Navigate } from 'react-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import Type1 from '@/pages/Type1'
import Type2 from '@/pages/Type2'
/* import Practice from '@/pages/Practice' */

const router = createHashRouter([

    {
      element: <DefaultLayout />,
      // errorElement: <ErrorPageFull />,
      children: [
        {
          path: '/',
          element: <Navigate to='/Type1' replace />
        },
        {
          path: '/Type1',
          element: <Type1 />
        },
        {
          path: '/Type2',
          element: <Type2 />
        }
        /* {
          path: '/Practice',
          element: <Practice />
        } */
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