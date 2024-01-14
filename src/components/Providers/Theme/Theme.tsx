
import * as React from 'react'
import * as Styled from 'styled-components'

import * as I from './Props'

const Theme: React.FC<I.Theme> = (props) => {

  return (
    <Styled.ThemeProvider theme={props.theme}>

    </Styled.ThemeProvider>
  )
}

Theme.defaultProps = {
  theme: {}
}