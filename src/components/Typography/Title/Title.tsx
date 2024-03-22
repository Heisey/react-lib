
import * as React from 'react'

import * as Core from 'core'

import * as I from './props'
import * as Styles from './styles'

const Text: React.FC<I.Title> = (props) => {

  return (
    <Styles.Title 
      as={props.as}
      color={props.theme}
      className={props.className}
    >
      {props.children}
    </Styles.Title>
  )
}

Text.defaultProps = {
  as: 'h1',
  theme: Core.keys.typographyThemes.DARK
}

export const Component = Text