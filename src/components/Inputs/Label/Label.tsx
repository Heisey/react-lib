
import * as React from 'react'

import * as I from './props'
import * as Styles from './styles'

const Label: React.FC<I.Label> = (props) => {

  return (
    <Styles.Label { ...props}>
      {props.children}{props.required && <span>&#42;</span>}:
    </Styles.Label>
  )
}

Label.defaultProps = {
  required: false
}

export const Component = Label