import { createBrowserRouter } from 'react-router-dom';

import BasicLayout from '@/layouts/BasicLayout';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

export const router = createBrowserRouter([
  {
    element: <BasicLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects/:slug', element: <ProjectDetail /> },
      { path: '/en', element: <Home /> },
      { path: '/en/projects/:slug', element: <ProjectDetail /> },
    ],
  },
]);
