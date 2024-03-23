
import * as React from 'react'

import * as FA from 'assets/FA'

import * as I from './props'
import * as Styles from './styles'

const Modal: React.FC<I.Modal> = (props) => {

  if (!props.open) return null

  return (
    <Styles.Modal>
      <div className='body'>
        <FA.Close className='close' size='20px' onClick={props.onClose} />

        <div className='content'>
          {props.children}
        </div>
      </div>
    </Styles.Modal>
  )
}

Modal.defaultProps = {
  open: false
}
export const Component = Modal