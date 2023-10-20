import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout/RootLayout";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { Photos } from "../pages/Photos/Photos";
import { Posts } from "../pages/Posts/Posts";
import { Comments } from "../pages/Comments/Comments";
import { Users } from "../pages/Users/Users";
import { photosLoader } from "../pages/Photos/photosLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Photos />,
        loader: photosLoader,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'comments',
        element: <Comments />,
      },
      {
        path: 'users',
        element: <Users />,
      },

    ]
  }
]);


const Router = () => <RouterProvider router={router} />

export { Router };
