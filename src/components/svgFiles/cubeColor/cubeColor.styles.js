import styled from 'styled-components'

import { animationCubeColor } from '../../../styles/animations/animations'

export const SvgCubeColor = styled.svg `
  width: 100%;
  transform: translateX(-5%) translateY(-35%);
  position: absolute;

  > g {
    > g {
      > polygon:nth-child(1) {
        fill:#F7E6BA;
        animation: ${animationCubeColor} 3s linear forwards;
        animation-delay: 2s;
        opacity: 0;
      }

      > polygon:nth-child(2) {
        fill:#021855;
        animation: ${animationCubeColor} 4s linear forwards;
        animation-delay: 2.1s;
        opacity: 0;
      }

      > polygon:nth-child(3) {
        fill:#FC3C25;
        animation: ${animationCubeColor} 3s linear forwards;
        animation-delay: 2.2s;
        opacity: 0;
      }
    }
  }

`
