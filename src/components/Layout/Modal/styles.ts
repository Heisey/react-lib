
import Styled from 'styled-components'

export const Modal = Styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  position: relative;
  

  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: ${props => props.theme.modal.overlay};
    z-index: -1;
  }

  .body {
    /* opacity: 1; */
    min-width: 200px;
    min-height: 200px;
    background-color: ${props => props.theme.modal.background};
    position: relative;

    .close {
      position: absolute;
      right: 15px;
      top: 5px;
      fill: ${props => props.theme.modal.close};
      stroke: ${props => props.theme.modal.close};
    }

    .content {
      border: 1px solid black;
      padding: 1rem;
      min-height: 150px;
      min-width: 220px;
    }
  }
`