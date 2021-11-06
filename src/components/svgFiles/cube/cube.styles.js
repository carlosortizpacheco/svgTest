import styled from 'styled-components'

import { animationCube } from '../../../styles/animations/animations'



export const SvgCube = styled.svg `
  width: 100%;
  transform: translateX(-5%) translateY(-35%);
  position: absolute;

 > g {
   > polygon {
    fill: none;
    stroke: #02CAE1;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:10;
    stroke-dasharray: 400px;
    stroke-dashoffset: 400px;
    animation: ${animationCube} 3.2s linear forwards;
   }

   > polyline {
    fill: none;
    stroke: #02CAE1;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit:10;
    stroke-dasharray: 200px;
    stroke-dashoffset: 200px;
    animation: ${animationCube} 3.2s linear forwards;
   }
 }

`