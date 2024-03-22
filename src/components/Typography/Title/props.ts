
import * as React from 'react'

import * as Core from 'core'

export interface Title extends React.PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  theme?: Core.I.TypographyThemes
  className?: string
}