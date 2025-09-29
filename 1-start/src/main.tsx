import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { UserContextProvider } from './components/context/user.context.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error as ErrorPage } from './components/pages/Error/Error.tsx';
import { Layout } from './components/Layout/Home/Layout.tsx';
import { Login } from './components/pages/Login/Login.tsx';
import { Movie } from './components/pages/Movie/Movie.tsx';
import { Favorites } from './components/pages/Favorites/Favorites.tsx';
import { Home } from './components/pages/Home/Home.tsx';
import { FavoritesProvider } from './components/context/favorites.context.tsx';
import axios from 'axios';
import { GetDetails, Search } from './helpers/API.ts';
import { mapApiToFilmDetails } from './helpers/details.mappers.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      {
        path: 'movie/:id',
        element: <Movie />,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${GetDetails}/${params.id}`);
          console.log(params.id);
          console.log(data);
          
          return mapApiToFilmDetails(data);
        },
        errorElement: <ErrorPage />,
      },
      { path: '/favorites', element: <Favorites /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </FavoritesProvider>
  </StrictMode>
);
