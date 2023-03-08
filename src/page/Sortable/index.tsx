import React from 'react'
import { lazyComponent } from '../../router/lazyComponent'
import { RouteObject } from 'react-router-dom'

const Sortable = lazyComponent(() => import('./sortable'))

const sortableRouter: RouteObject = {
  path: '/sortable',
  element: <Sortable />
}

export default sortableRouter
