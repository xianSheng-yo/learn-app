import React from 'react'
import { lazyComponent } from '../../router/lazyComponent'
import { RouteObject } from 'react-router-dom'

const Pixi = lazyComponent(() => import('./pixi'))

const pixiRouter: RouteObject = {
  path: '/pixi',
  element: <Pixi />
}

export default pixiRouter
