
import * as React from 'react'

import * as Styles from './styles'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = (props) => {

  return <Styles.Image { ...props } />
}

export const Component = Image