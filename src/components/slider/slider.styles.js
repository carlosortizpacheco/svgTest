import styled, { keyframes } from 'styled-components'

const animationLine = keyframes `

  to {
    stroke-dashoffset: 0px;
  }

`

const animationFill = keyframes `

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const animationFill2 = keyframes `

  from {
    opacity: 0;
    transform: scaleY(0);

  }

  to {
    opacity: 1;
    transform: scaleY(1);
    
  }
`


export const Container = styled.div `
  width: 100%;
  height: 100vh;
`


export const Abajo = styled.div `
  background-color: red;
  width: 100%;
  height: 100%;
  position: ${props => props.moveHorizontal === 100 ? 'block' : 'fixed'};

`


export const Arriba = styled.div `
 background-color:blue;
 position: ${props => props.moveHorizontal === 100 ? 'absolute' : 'fixed'};
 top: 0;
 left:  ${props => props.moveHorizontal ? `${props.moveHorizontal}%` : 0 };
 width: 100%;
 height: 100%;

`


export const Testo = styled.div `
  height: 500px;
  background-color: gainsboro;
`