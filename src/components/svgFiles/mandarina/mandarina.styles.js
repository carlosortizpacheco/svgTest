import styled from 'styled-components'

import { animationMandarina } from '../../../styles/animations/animations'



export const SvgMandarina = styled.svg `
  width: 23%;
  opacity: 0;
  animation: ${animationMandarina} 3s linear forwards;
  animation-delay: 3s;
  position: absolute;
  
  > g {
    
    > path {
      fill:#02CAE1;
    }
    
    > circle:nth-child(2) {
      fill:#FC3C25;
    }
    
    > circle:nth-child(3) {
      fill:#F7E6BA;
    }
  }
  
  `