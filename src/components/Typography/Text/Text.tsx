
import * as React from 'react'

import * as Core from 'core'

import * as I from './props'
import * as Styles from './styles'

const Text: React.FC<I.Text> = (props) => {

  return  (
    <Styles.Text 
      as={props.as}
      textColor={props.theme!}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Styles.Text>
  )
}

Text.defaultProps = {
  as: 'p',
  theme: Core.keys.typographyThemes.DEFAULT
}

export const Component = Text