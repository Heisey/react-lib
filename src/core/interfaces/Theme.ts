
import * as Core_I from '.'
import * as Core_Keys from '../keys'

export interface Theme {
  name: string

  app: {
    maxWidth: string
    backgroundColor: string
  }

  button: {
    [Core_Keys.buttonThemes.PRIMARY]: Core_I.ButtonColorScheme
    [Core_Keys.buttonThemes.SECONDARY]: Core_I.ButtonColorScheme
    [Core_Keys.buttonThemes.WARNING]: Core_I.ButtonColorScheme
    [Core_Keys.buttonThemes.DANGER]: Core_I.ButtonColorScheme
    [Core_Keys.buttonThemes.INFO]: Core_I.ButtonColorScheme

    radius: string
    boxShadow: string

    paddingX: string
    paddingY: string
  }

  typography: {
    dark: string
    light: string,
    info: string,
    warning: string,
    danger: string
  }
}