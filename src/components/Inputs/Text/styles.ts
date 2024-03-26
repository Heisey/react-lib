
import Styled from 'styled-components'

import * as Core from 'core'

interface Props {
  isValid: boolean
  showValidation: boolean
}

const border = (args: Props, theme: Core.I.Theme) => {
  const fixed = '2px solid'
  if (!args.showValidation) return `${fixed} transparent`
  else if (!args.isValid) return `${fixed} ${theme.inputs.inValid}`
  return `${fixed} ${theme.inputs.valid}`
}

export const Text = Styled.input<Props>`
  outline: none;
  border: none;
  position: relative;
  border-bottom: ${props => border(props, props.theme)};
`