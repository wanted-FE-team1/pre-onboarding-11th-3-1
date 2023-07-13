import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '../components/common/DefaultLayout';
import IssueList from '../pages/IssueList';
import IssueDetail from '../pages/IssueDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <IssueList />,
      },
      {
        path: '/issue/:id',
        element: <IssueDetail />,
      },
    ],
  },
]);
