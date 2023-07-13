import { createBrowserRouter } from "react-router-dom";
import IssueList from "./page/IssueList";
import IssueDetail from "./page/IssueDetail";
import NotFound from "./page/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueList />,
  },
  {
    path: "/issue/:id",
    element: <IssueDetail />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
