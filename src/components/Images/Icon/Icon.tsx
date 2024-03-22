
import * as React from 'react'

import * as I from './props'

const Icon: React.FC<I.Icon> = (props) => {

  return (
    <svg 
      viewBox={props.viewBox}
      className={props.className}
    >
      {props.children}
    </svg>
  )
}

Icon.defaultProps = {
  viewBox: '0 0 576 512'
}

export const Component = Icon