
import Styled from 'styled-components'

import * as Core from 'core'

interface Props {
  color: Core.I.TypographyThemes
}

export const Text = Styled.p<Props>`
  color: ${props => props.theme.typography[props.color]}
`