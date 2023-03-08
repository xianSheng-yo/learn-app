import React, { Suspense, lazy } from 'react'

export const lazyComponent = <
  T extends Promise<any>,
  U extends React.ComponentType<any>
>(
  importFunc: () => T,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunc)
  return (props: React.ComponentProps<U>): JSX.Element => {
    return (
      <Suspense fallback={fallback || <h2>加载中....</h2>}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }
}
