import { api } from '@utils/api';
import React, { ReactElement } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CardDetailsPage from './card-details/CardDetailsPage';
import LoginPage from './Login';
import RegisterPage from './Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>test</h1>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/card/:id',
    element: <CardDetailsPage />,
    loader: async ({ params }) => (await api.get(`/card/${params.id}`)).data,
  },
]);

export default function Router(): ReactElement {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
