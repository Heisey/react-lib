
import * as Core_I from '../interfaces'
import * as Core_Keys from '../keys'

export const dark: Core_I.Theme = {
  name: 'dark',

  app: {
    maxWidth: '1920px'
  },
  button: {
    [Core_Keys.buttonThemes.PRIMARY]: {
      fg: 'white',
      bg: 'purple'
    },
    [Core_Keys.buttonThemes.SECONDARY]: {
      fg: 'white',
      bg: 'darkblue'
    },
    [Core_Keys.buttonThemes.WARNING]: {
      fg: 'black',
      bg: 'yellow'
    },
    [Core_Keys.buttonThemes.DANGER]: {
      fg: 'black',
      bg: 'red'
    },
    [Core_Keys.buttonThemes.INFO]: {
      fg: 'white',
      bg: 'grey'
    },
    radius: '15px',
    boxShadow: 'none',
    paddingX: '24px',
    paddingY: '8px'
  }
}