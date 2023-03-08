import React from 'react'
import { lazyComponent } from '../../router/lazyComponent'
import { RouteObject } from 'react-router-dom'

const Home = lazyComponent(() => import('./home'))

const homeRouter: RouteObject = {
  index: true,
  element: <Home />
}

export default homeRouter
