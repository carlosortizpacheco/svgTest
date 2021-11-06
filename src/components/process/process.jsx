import React from 'react'

import {
  ProcessContainer,
  TitleProcess,
  CircleOrange,
  CircleOrange2,
  CircleOrange3,
  TitleTrigger
} from './process.styles'


function Process() {



  return (
    <ProcessContainer>
      <TitleProcess>PROCESO</TitleProcess>
      <CircleOrange></CircleOrange>
      <CircleOrange2></CircleOrange2>
      <TitleTrigger>DETONADOR</TitleTrigger>
      <CircleOrange3></CircleOrange3>
    </ProcessContainer>
  );
}

export default Process;
