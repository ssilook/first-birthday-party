import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import Type1 from '@/pages/Type1'
import Type2 from '@/pages/Type2'

const router = createBrowserRouter([
    {
      path: '/first-birthday-party',
      element: <DefaultLayout />
    },
    {
      element: <DefaultLayout />,
      // errorElement: <ErrorPageFull />,
      children: [
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
    /* {
      path: '*',
      element: <NotFound />
    } */
  ])
  
  export default function Router () {
    return <RouterProvider router={router} />
  }