import { keyframes } from 'styled-components'


export const animationCube = keyframes `

  to {
    stroke-dashoffset: 0px;
    opacity: 0;
  }

`

export const animationMandarina = keyframes `

  0% {
    transform: translateX(130%) translateY(-500px);
  }

  90% {
    opacity: 1;
    transform: translateX(130%) translateY(0%);
  }

  100% {
    opacity: 0;
    transform: translateX(130%) translateY(0%);
  }

`

export const animationCubeColor = keyframes `

  0% {
    opacity: 0;
    
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;

  }
`

export const animationMandarinaMitad = keyframes `

  from {
    opacity: 0;
  }

  to {
    
    opacity: 1;
  }
`

export const animationLetter1 = keyframes `

  from {
    opacity: 0;
    transform: translateX(235%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const animationLetter2 = keyframes `

  from {
    opacity: 0;
    transform: translateX(210%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`


export const animationLetter3 = keyframes `

  from {
    opacity: 0;
    transform: translateX(90%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const animationLetter4 = keyframes `

  from {
    opacity: 0;
    transform: translateX(-10%);
  }

  to {
    opacity: 1;
    transform: translateX(90%);
  }
`

export const animationLetter5 = keyframes `

  from {
    opacity: 0;
    transform: translateX(-110%);
  }

  to {
    opacity: 1;
    transform: translateX(100%);
  }
`

export const animationLetter6 = keyframes `

  from {
    opacity: 0;
    transform: translateX(-470%);
  }

  to {
    opacity: 1;
    transform: translateX(240%);
  }
`

export const animationLetter7 = keyframes `

  from {
    opacity: 0;
    transform: translateX(-200%);
  }

  to {
    opacity: 1;
    transform: translateX(80%);
  }
`

export const animationLetter8 = keyframes `

from {
  opacity: 0;
  transform: translateX(-350%);
}

to {
  opacity: 1;
  transform: translateX(90%);
}
`

export const animationTagline = keyframes `
 
  0% {
    opacity: 0;
    transform: translateX(68%) translateY(100%);
  }

  90% {
    opacity: 0.2;
  }

  100% {
    transform: translateX(68%) translateY(210%);
    opacity: 1;
  }

`