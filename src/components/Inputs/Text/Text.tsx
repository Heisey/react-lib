
import * as React from 'react'

import * as I from './props'
import * as Styles from './styles'

const Text: React.FC<I.Text> = (props) => {
  
  return (
    <Styles.Text 
      { ...props } 
      type='text'
      isValid={props.isValid!}
      showValidation={props.showValidation!}
    />
  )
}

Text.defaultProps = {
  placeholder: 'Enter text',
  isValid: true,
  showValidation: true
}

export const Component = Text