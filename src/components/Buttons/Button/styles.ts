
import Styled from 'styled-components'

import * as Core from 'core'

interface Props {
  buttontheme: Core.I.ButtonThemes
  variant: Core.I.ButtonVariants
}

const backgroundColor = (theme: Core.I.Theme, args: Props) => {
  if (args.variant !== Core.keys.buttonVaraints.SOLID) return 'transparent'
  return theme.button[args.buttontheme].bg
}

const border = (theme: Core.I.Theme, args: Props) => {
  if (args.variant !== Core.keys.buttonVaraints.OUTLINE) return 'transparent'
  return `2px solid ${theme.button[args.buttontheme].bg}`
} 

const color = (theme: Core.I.Theme, args: Props) => {
  if (args.variant !== Core.keys.buttonVaraints.SOLID) return theme.button[args.buttontheme].bg
  return theme.button[args.buttontheme].fg
}

export const Button = Styled.button<Props>`
  background-color: ${args => backgroundColor(args.theme, args)};
  color: ${args => color(args.theme, args)};
  border: ${args => border(args.theme, args)};
  border-radius: ${args => args.theme.button.radius};
  box-shadow: ${args => args.theme.button.boxShadow};
  padding: ${args => `${args.theme.button.paddingY} ${args.theme.button.paddingX}`};
  outline: none;
  cursor: pointer;
`