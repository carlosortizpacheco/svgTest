import styled from 'styled-components'

import {
  animationLetter1,
  animationLetter2,
  animationLetter3,
  animationLetter4,
  animationLetter5,
  animationLetter6,
  animationLetter7,
  animationLetter8,
} from '../../../styles/animations/animations'

export const MandarinaText = styled.div `
  display: flex;
  position: absolute;
  transform: translateX(-2%) translateY(-22%);

  > p {
    color: white;
    font-size: 4vw;
  }


  > p:nth-child(1) {
    opacity: 0;
    animation:${animationLetter1} 2s linear forwards;
    animation-delay: 7.5s;
  }

  > p:nth-child(2) {
    opacity: 0;
    animation:${animationLetter2} 2s linear forwards;
    animation-delay: 7.5s;
  }

  > p:nth-child(3) {
    opacity: 0;
    animation:${animationLetter3} 2s linear forwards;
    animation-delay: 7.5s;
  }

  > p:nth-child(4) {
    opacity: 0;
    animation:${animationLetter4} 2s linear forwards;
    animation-delay: 7.5s;
  }

  > p:nth-child(5) {
    opacity: 0;
    animation:${animationLetter5} 2s linear forwards;
    animation-delay: 7.5s;
  }

  > p:nth-child(6) {
    opacity: 0;
    animation:${animationLetter6} 2s linear forwards;
    animation-delay: 7.5s;
  }

  > p:nth-child(7) {
    opacity: 0;
    animation:${animationLetter7} 2s linear forwards;
    animation-delay: 7.5s;
  }

  > p:nth-child(8) {
    opacity: 0;
    animation:${animationLetter8} 2s linear forwards;
    animation-delay: 7.5s;
  }
`
