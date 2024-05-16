import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import { Root } from "../routes/Root";
import { ProfileForId } from "../routes/ProfileForId";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [{ path: "/:id", element: <ProfileForId /> }],
      },
      {
        path: "/login",
        element: <div>Login page!</div>,
      },
    ],
  },
]);
