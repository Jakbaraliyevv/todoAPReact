import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/todo";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
  },
]);

export default root;
