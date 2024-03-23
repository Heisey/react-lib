
import * as React from 'react'

export interface Icon extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  viewBox?: string
  className?: string
  size?: string
}