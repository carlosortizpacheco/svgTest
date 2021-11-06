import styled, {keyframes} from 'styled-components'


const animationTitleProcess = keyframes `

  from {
    transform: translateY(-500%);
    
  }

  to {
    transform: translateY(-100%);
  }

`

const animationTrigger = keyframes `

  from {
    transform: translateY(-500%);
    
  }

  to {
    transform: translateY(0);
  }

`


const animationCircleOrange = keyframes `

  0% {
    transform: scale(0);
    opacity: 1;
  }

  95% {
    transform:scale(1);
  }

  100% {
    transform:scale(0);
  }


`


const animationCircleOrange2 = keyframes `
  0% {
    transform: scale(1);
    opacity: 1;
  }

  95% {
    transform: scale(8);
    opacity: 1;
  }

  100% {
    transform: scale(8);
    opacity: 0;
  }
`

const animationCircleOrange3 = keyframes `
  from {
    transform: scale(7);
    opacity: 1;
  }

  to {
    transform: scale(6);
    opacity: 1;
    background-color: transparent;
    border: 1px solid orange;
  }
`

export const ProcessContainer = styled.div `
  width: 100%;
  height: 100vh;
  background-color: #021855;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const TitleProcess = styled.h3 `
  color: white;
  font-size: 4vw;
  font-weight: bold;
  animation: ${animationTitleProcess} 1s ease-in forwards;
  position: absolute;
`


export const CircleOrange = styled.div `
  position: absolute;
  width: 5%;
  height: 10%;
  background-color: orange;
  border-radius: 50%;
  opacity: 0;
  transform: translateY(40%) scale(0.1);
  animation: ${animationCircleOrange} 2s ease-in forwards;
  animation-delay: 1s;
`


export const CircleOrange2 = styled.div `
  position: absolute;
  width: 5%;
  height: 10%;
  background-color: orange;
  border-radius: 50%;
  opacity: 0;
  transform: translateY(40%);
  animation: ${animationCircleOrange2} 1s ease-in forwards;
  animation-delay: 2s;
`


export const TitleTrigger = styled.h3 `
  position: absolute;
  color: white;
  font-size: 4.5vw;
  font-weight: bold;
  opacity: 0;
  animation: ${animationTrigger} 3s ease-in forwards;
  animation-delay: 3.5s;
`


export const CircleOrange3 = styled.div `
  position: absolute;
  width: 5%;
  height: 10%;
  background-color: orange;
  border-radius: 50%;
  opacity: 0;
  transform: translateY(40%) scale(7);
  animation: ${animationCircleOrange3} 1s ease-in forwards;
  animation-delay: 3.8s;
`