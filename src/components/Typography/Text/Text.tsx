
import * as React from 'react'

import * as I from './props'
import * as Styles from './styles'

const Text: React.FC<I.Text> = (props) => {

  return  (
    <Styles.Text as={props.as}>
      {props.children}
    </Styles.Text>
  )
}

Text.defaultProps = {
  as: 'p'
}

export const Component = Text