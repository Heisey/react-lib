
import * as React from 'react'

import * as I from './props'
import * as Styles from './styles'

const Icon: React.FC<I.Icon> = (props) => {

  return (
    <Styles.Icon { ...props } height='auto' width={props.size}>
      {props.children}
    </Styles.Icon>
  )
}

Icon.defaultProps = {
  viewBox: '0 0 576 512',
  size: '30px'
}

export const Component = Icon