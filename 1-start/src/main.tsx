import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { UserContextProvider } from './components/context/user.context.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './components/pages/Error/Error.tsx';
import { Layout } from './components/Layout/Home/Layout.tsx';
import { Login } from './components/pages/Login/Login.tsx';
import { Movie } from './components/pages/Movie/Movie.tsx';
import { Favorites } from './components/pages/Favorites/Favorites.tsx';
import { Home } from './components/pages/Home/Home.tsx';
import dataFilms from './data/dataFilm.ts';
import { FavoritesProvider } from './components/context/favorites.context.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'movie/:id', element: <Movie dataFilms={dataFilms} /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '*', element: <Error /> },
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
