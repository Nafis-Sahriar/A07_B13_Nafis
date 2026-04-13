import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";
import FriendDetails from "../Pages/FriendDetailsPage/FriendDetails";


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
          },
          {
            path: 'friend/:friendId',
            element: <FriendDetails></FriendDetails>
          }
      ],
      errorElement: <h1>404 Not Found</h1>
  }

]);