import React from 'react'
import { ClickToComponent } from 'click-to-react-component'
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css'
import './index.css'
// import App from './App'
import { RouterProvider } from 'react-router-dom'
// import { Inspector } from 'react-dev-inspector'

import { router } from './router'

// import reportWebVitals from './reportWebVitals'
// const isDev = process.env.NODE_ENV === 'development'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router} fallbackElement={<>loading...</>} />
    <ClickToComponent editor="vscode" />
    {/* {isDev && (
      <Inspector
        // props see docs:
        // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
        keys={['control', 'shift', 'command', 'c']}
        disableLaunchEditor={false}
      />
    )} */}
  </>
  // <App />,
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
