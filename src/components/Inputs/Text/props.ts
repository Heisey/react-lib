
import * as React from 'react'

export interface Text extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean
  showValidation?: boolean
}