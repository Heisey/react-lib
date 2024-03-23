
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

  modal: {
    overlay: string
    background: string
    close: string
  }

  typography: {
    [Core_Keys.typographyThemes.DANGER]: string
    [Core_Keys.typographyThemes.DARK]: string,
    [Core_Keys.typographyThemes.INFO]: string,
    [Core_Keys.typographyThemes.LIGHT]: string,
    [Core_Keys.typographyThemes.WARNING]: string
  }
}