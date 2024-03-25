
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

const boxShadow = (theme: Core.I.Theme, args: Props) => {
  if (args.variant === Core.keys.buttonVaraints.TEXT) return 'none'
  return theme.button.boxShadow
}

const color = (theme: Core.I.Theme, args: Props) => {
  if (args.variant !== Core.keys.buttonVaraints.SOLID) return theme.button[args.buttontheme].bg
  return theme.button[args.buttontheme].fg
}

const padding = (theme: Core.I.Theme, args: Props) => {
  if (args.variant === Core.keys.buttonVaraints.TEXT) return 0
  return `${theme.button.paddingY} ${theme.button.paddingX}`
}

export const Button = Styled.button<Props>`
  background-color: ${args => backgroundColor(args.theme, args)};
  color: ${args => color(args.theme, args)};
  border: ${args => border(args.theme, args)};
  border-radius: ${args => args.theme.button.radius};
  box-shadow: ${args => boxShadow(args.theme, args)};
  padding: ${args => padding(args.theme, args)};
  outline: none;
  cursor: pointer;
`