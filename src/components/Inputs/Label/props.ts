
import * as React from 'react'

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  required?: boolean
  input: React.ReactNode
  field?: string
}