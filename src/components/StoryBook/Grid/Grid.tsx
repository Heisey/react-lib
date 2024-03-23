
import * as React from 'react'

import * as I from './props'

 const Grid: React.FC<I.Grid> = (props) => {

  return (
    <div { ...props }>
      {props.children}
    </div>
  )
 }

 Grid.defaultProps = {
  numberOfColumns: 4
 }

 export const Component = Grid