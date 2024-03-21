
import * as React from 'react'

import * as I from './props'
import * as Styles from './styles'

const Text: React.FC<I.Title> = (props) => {

  return (
    <Styles.Title as={props.as}>
      {props.children}
    </Styles.Title>
  )
}

Text.defaultProps = {
  as: 'h1'
}

export const Component = Text