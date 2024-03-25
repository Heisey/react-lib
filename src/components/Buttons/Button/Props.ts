
import * as React from 'react'

import * as Core from 'core'

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Core.I.ButtonVariants
  buttontheme?: Core.I.ButtonThemes
  className?: string
}