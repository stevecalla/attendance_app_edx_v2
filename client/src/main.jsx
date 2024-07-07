import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import Attendance from './pages/Attendance.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/matchup',
        element: <Matchup />
      }, 
      {
        path: '/matchup/:id',
        element: <Vote />
      },
      {
        path: '/attendance-app',
        element: <Attendance/>
      },
      {
        path: '/*',
        element: <NotFound />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
