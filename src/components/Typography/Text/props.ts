
import * as React from 'react'

export interface Text extends React.PropsWithChildren {
  as: 'p' | 'span'
}