import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";


export const router = createBrowserRouter(
[
  {
      path: '/',
      element: <RootLayout />,
      children: [
          {
              index: true,
              element:<Homepage />
          },
          {
            path: 'timeline',
            element: <Timeline />
          },
          {
            path: 'stats',
            element: <Stats />
          }
      ],
      errorElement: <h1>404 Not Found</h1>
  }

]);