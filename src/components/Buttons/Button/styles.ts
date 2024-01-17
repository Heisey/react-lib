
import Styled from 'styled-components'

import * as Core from '../../../core'

interface Props {
  buttontheme: Core.I.ButtonThemes
}

export const Button = Styled.button<Props>`
  background-color: ${args => args.theme.button[args.buttontheme].bg};
  color: ${args => args.theme.button[args.buttontheme].fg};
`