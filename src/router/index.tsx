import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root, { loader as rootLoader } from '../page/Root'
const ErrorPage = lazyComponent(() => import('./error-page'))
import d3Router from '../page/D3'
import homeRouter from '../page/Home'
import sortableRouter from '../page/Sortable'
// import pixiRouter from '../page/Pixi'
import { lazyComponent } from './lazyComponent'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [homeRouter, d3Router, /* pixiRouter, */ sortableRouter]
  }
])
