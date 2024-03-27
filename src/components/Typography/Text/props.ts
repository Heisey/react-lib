
import * as React from 'react'

import * as Core from 'core'

export interface Text extends React.PropsWithChildren {
  as?: 'p' | 'span'
  theme?: Core.I.TypographyThemes
  className?: string
  onClick?: () => void
}