
import * as React from 'react'

import * as Core from 'core'

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttontheme?: Core.I.ButtonThemes
  className?: string
}