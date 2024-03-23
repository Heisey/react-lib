
import Styled from 'styled-components'

interface Props {
  numberOfColumns: number
}

export const Grid = Styled.div<Props>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.numberOfColumns}, auto)`};
  row-gap: 1rem;
  column-gap: 1rem;
`