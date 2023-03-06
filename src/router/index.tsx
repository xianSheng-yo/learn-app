import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root, { loader as rootLoader } from '../page/Root'
import D3 from '../page/D3'
import ErrorPage from './error-page'
import Home from '../page/Home'
import Sortable from '../page/Sortable'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/d3',
        element: <D3 />
      },
      {
        path: '/sortable',
        element: <Sortable />
      }
    ]
  }
])
