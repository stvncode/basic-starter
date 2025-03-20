import { App } from "@/App"
import { Dashboard } from "@/pages"
import Error404 from "@/pages/404"
import { createBrowserRouter } from "react-router-dom"

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ])
