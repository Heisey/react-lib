
import * as React from 'react'

import * as Text from 'components/Typography/Text'
import * as I from './props'
import * as Styles from './styles'

const Label: React.FC<I.Label> = (props) => {

  return (
    <Styles.Label { ...props}>
      <Text.Component>{props.field}{props.required && <span>&#42;</span>}</Text.Component>:
      {props.input}
    </Styles.Label>
  )
}

Label.defaultProps = {
  required: false,
  field: 'Enter Field'
}

export const Component = Label