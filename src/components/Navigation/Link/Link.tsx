
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as I from './props'

const Link: React.FC<I.Link> = (props) => {

  return (
    <ReactRouter.Link to={props.to!}>
      {props.children}
    </ReactRouter.Link>
  )
}

Link.defaultProps = {
  to: '/'
}

export const Component = Link