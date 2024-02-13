import React, { ReactElement } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import axios from 'axios';
import { LoginPage } from './Login';
import { RegisterPage } from './Register';
import CardDetailsPage from './card-details/card-details';

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
    loader: async ({ params }) => (await axios.get(`http://localhost:8080/api/card/${params.id}`)).data,
  },
]);

export default function Router(): ReactElement {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
