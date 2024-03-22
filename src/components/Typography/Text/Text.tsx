
import * as React from 'react'

import * as Core from 'core'

import * as I from './props'
import * as Styles from './styles'

const Text: React.FC<I.Text> = (props) => {

  return  (
    <Styles.Text 
      as={props.as}
      color={props.theme}
    >
      {props.children}
    </Styles.Text>
  )
}

Text.defaultProps = {
  as: 'p',
  theme: Core.keys.typographyThemes.DARK
}

export const Component = Text