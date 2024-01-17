
import * as React from 'react'
import * as Styled from 'styled-components'

import * as Core from 'core'

import * as I from './Props'

const Theme: React.FC<I.Theme> = (props) => {

  return (
    <Styled.ThemeProvider theme={props.theme!}>
      {props.children}
    </Styled.ThemeProvider>
  )
}

Theme.defaultProps = {
  theme: Core.config.themes.dark
}

export const Component = Theme