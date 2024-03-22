
import Styled from 'styled-components'

import * as Core from 'core'

interface Props {
  color: Core.I.TypographyThemes
}

export const Title = Styled.h1<Props>`
  color: ${props => props.theme.typography[props.color]}
`