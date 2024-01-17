
import * as React from 'react'

import * as Core from 'core'

import * as I from './Props'
import * as Styles from './styles'

const Button: React.FC<I.Button> = (props) => {
  
  return (
    <Styles.Button {...props} buttontheme={props.buttontheme!}>
      {props.children}
    </Styles.Button>
  )
}

Button.defaultProps = {
  buttontheme: Core.keys.buttonThemes.INFO
}

export const Component = Button

