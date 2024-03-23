
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as I from './props'

const Router: React.FC<I.Router> = (props) => {

  return (
    <ReactRouter.BrowserRouter>
      {props.children}
    </ReactRouter.BrowserRouter>
  )
}

export const Component = Router