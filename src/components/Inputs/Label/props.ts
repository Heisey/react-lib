
import * as React from 'react'

export interface Label extends React.HTMLAttributes<HTMLLabelElement> {
  required?: boolean
  input: React.ReactNode
  field?: string
}