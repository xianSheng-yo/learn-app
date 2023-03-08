import React from 'react'
import { lazyComponent } from '../../router/lazyComponent'
import { RouteObject } from 'react-router-dom'

const D3 = lazyComponent(() => import('./d3'))

const d3Router: RouteObject = {
  path: '/d3',
  element: <D3 />
}

export default d3Router
