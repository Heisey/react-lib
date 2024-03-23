
import * as React from 'react'

import * as I from './props'

const Icon: React.FC<I.Icon> = (props) => {

  return (
    <svg { ...props } height='auto' width={props.size}>
      {props.children}
    </svg>
  )
}

Icon.defaultProps = {
  viewBox: '0 0 576 512',
  size: '30px'
}

export const Component = Icon