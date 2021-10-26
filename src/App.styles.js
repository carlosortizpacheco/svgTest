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
  display: flex;
  justify-content: center;
  background-color: orange;
  width: 100%;
  height: 100vh;

`

export const SvgClock = styled.svg `
  enable-background: new 0 0 512 512;
  width: 250px;
  height: 250px;

  > path:nth-child(1) {
    fill: #F7E6BA;
    animation: ${animationFill} 2.5s linear backwards;
  }

  > line:nth-child(2),
  > line:nth-child(3),
  > line:nth-child(4),
  > line:nth-child(5) {
    fill: none;
    stroke: #021855;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }

  > line:nth-child(2) {
    stroke-dasharray: 95px;
    stroke-dashoffset: 95px;
    animation: ${animationLine} 1s linear forwards;
  }

  > line:nth-child(3) {
    stroke-dasharray: 35px;
    stroke-dashoffset: 35px;
    animation: ${animationLine} 1s linear forwards;
  }

  > line:nth-child(4) {
    stroke-dasharray: 35px;
    stroke-dashoffset: 35px;
    animation: ${animationLine} 1s linear forwards;
  }

  > line:nth-child(5) {
    stroke-dasharray: 110px;
    stroke-dashoffset: 110px;
    animation: ${animationLine} 1s linear forwards;
  }

  > circle:nth-child(6) {
    fill: #FFFFFF;
    animation: ${animationFill} 2.5s linear backwards;
  }
  
  > path:nth-child(7) {
    fill: none;
    stroke: #021855;
    stroke-width: 3;
    stroke-miterlimit: 10;
    stroke-dasharray: 780px;
    stroke-dashoffset: 780px;
    animation: ${animationLine} 2s linear forwards;
  }

`

export const SvgCart = styled.svg `
  enable-background: new 0 0 512 512;
  width: 250px;
  height: 250px;

  > circle:nth-child(1),
  > circle:nth-child(2),
  > circle:nth-child(3) {
    fill: #F7E6BA;
    animation: ${animationFill} 1s linear forwards;
  }

  > path:nth-child(4),
  > path:nth-child(7),
  > path:nth-child(8) {
    fill: #021855;
    animation: ${animationFill2} 2s linear forwards;
    transform-origin: initial;
  }

  > path:nth-child(5),
  > path:nth-child(6) {
    fill: none;
    stroke: #F7E6BA;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-dasharray: 780px;
    stroke-dashoffset: 780px;
    animation: ${animationLine} 2s linear forwards;
  }

`


export const SvgCommunication = styled.svg `
  enable-background: new 0 0 512 512;
  width: 250px;
  height: 250px;

  > path:nth-child(1) {
    fill:none;
    stroke:#F7E6BA;
    stroke-width:3;
    stroke-miterlimit:10;
    stroke-dasharray: 780px;
    stroke-dashoffset: 780px;
    animation: ${animationLine} 3s linear forwards;
  }

  > g {
    > path:nth-child(1) {
      fill:#021855;
      animation: ${animationFill} 2s linear forwards;
      transform-origin: initial;
    }

    > path:nth-child(2) {
      fill:#F7E6BA;
      animation: ${animationFill} 2s linear forwards;
      transform-origin: initial;
    }
  }


`