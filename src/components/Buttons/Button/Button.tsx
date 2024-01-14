
import * as React from 'react'

import * as I from './Props'
import * as Styles from './styles'

const Button: React.FC<I.Button> = (props) => {

  return (
    <Styles.Button>
      {props.children}
    </Styles.Button>
  )
}

export const Component = Button

