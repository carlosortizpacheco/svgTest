import styled from 'styled-components'

import {
  animationTagline
} from '../../../styles/animations/animations'



export const SvgTagline = styled.svg `
  width: 65%;
  animation: ${animationTagline} 1.5s linear forwards;
  animation-delay: 9.5s;
  opacity: 0;
  

  > g:nth-child(1) {
    > g {
      > path {
        fill:#02CAE1;
      }
    }
  }


  > g:nth-child(2) {
    > path {
      fill:#FFFFFF;
    }
  }

`
