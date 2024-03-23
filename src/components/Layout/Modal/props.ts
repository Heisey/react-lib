
import * as React from 'react'

export interface Modal extends React.PropsWithChildren {
  open?: boolean
  onClose?: () => void
}