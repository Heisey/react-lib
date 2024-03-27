
import * as React from 'react'

import * as Styles from './styles'

interface BlockProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Block: React.FC<BlockProps> = (props) => {

  return (
    <Styles.Block 
      { ...props }
    />
  )
}

Block.defaultProps = {
  rows: 10
}

export const Component = Block