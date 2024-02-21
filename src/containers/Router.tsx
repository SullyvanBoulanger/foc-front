import { api } from '@utils/api';
import React, { ReactElement } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { useUser } from '@utils/UserProvider';
import CardDetailsPage from './card-details/CardDetailsPage';
import LoginPage from './Login';
import MyCollectionPage from './my-collection/MyCollectionPage';
import RegisterPage from './Register';

const logoutRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

const loggedRouter = createBrowserRouter([
  {
    path: '/',
    element: <MyCollectionPage />,
  },
  {
    path: '/card/:id',
    element: <CardDetailsPage />,
    loader: async ({ params }) => (await api.get(`/card/${params.id}`)).data,
  },
  {
    path: '/my_collection',
    element: <MyCollectionPage />,
  },
]);

export default function Router(): ReactElement {
  const { isLogged } = useUser();

  return (
    <React.StrictMode>
      <RouterProvider router={isLogged ? loggedRouter : logoutRouter} />
    </React.StrictMode>
  );
}
