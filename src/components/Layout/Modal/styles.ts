
import Styled from 'styled-components'

export const Modal = Styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${props => props.theme.modal.zIndex};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${props => props.theme.modal.overlayOpacity};
    background-color: ${props => props.theme.modal.overlay};
    z-index: -1;
  }

  .body {
    /* opacity: 1; */
    min-width: 200px;
    min-height: 200px;
    background-color: ${props => props.theme.modal.background};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .close {
    position: absolute;
    right: 15px;
    top: 10px;
    fill: ${props => props.theme.modal.close};
    stroke: ${props => props.theme.modal.close};
    cursor: pointer;
  }

  .content {
    padding: 1rem;
    
  }
`