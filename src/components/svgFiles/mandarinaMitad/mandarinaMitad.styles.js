import styled from 'styled-components'

import { animationMandarinaMitad } from '../../../styles/animations/animations'


export const SvgMandarinaMitad = styled.svg `
  width: 30%;
  height: 180%;
  position: absolute;
  transform: translateX(90%) translateY(-5%);
  
  > path:nth-child(1) {
    fill: #02CAE1;
    animation: ${animationMandarinaMitad} 1s linear forwards;
    animation-delay: 6.3s;
    opacity: 0;
  }

  > path:nth-child(2) {
    fill: #FC3C25;
    animation: ${animationMandarinaMitad} 3s linear forwards;
    animation-delay: 5.6s;
    opacity: 0;
  }

`
