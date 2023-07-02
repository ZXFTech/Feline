import Blog from "@/components/Blog";
import { BlogList } from "@/components/Blog/BlogList";
import Edit from "@/components/Blog/Edit";
import Login from "@/components/Login";
import NeuTest from "@/components/NeuTest";
import Index from "@/page/Index";
import Interview from "@/page/Interview";
import LandingPage from "@/page/LandingPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "blog/list",
        element: <BlogList />,
      },
      {
        path: "blog/detail/:id",
        element: <Blog />,
      },
      {
        path: "blog/edit/:id",
        element: <Edit />,
      },
      {
        path: "blog/new",
        element: <Edit />,
      },
      {
        path: "neu/test",
        element: <NeuTest />,
      },
      {
        path: "login",
        element: <Login />,
      },
      { path: "interview", element: <Interview /> },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index />,
//     children: [
//       {
//         path: "/",
//         element: <LandingPage />,
//       },
//       {
//         path: "blog/list",
//         element: <BlogList />,
//       },
//       {
//         path: "blog/detail/:id",
//         element: <Blog />,
//       },
//       {
//         path: "blog/edit/:id",
//         element: <Edit />,
//       },
//       {
//         path: "blog/new",
//         element: <Edit />,
//       },
//       {
//         path: "neu/test",
//         element: <NeuTest />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);
