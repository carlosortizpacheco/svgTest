import React, { useState } from 'react'

import {
  Container,
  Arriba,
  Abajo,
  Testo
} from './slider.styles'


function Slider() {
  const [ count,setCount ] = useState(0)

  const testWheel = (e) => {

    if(e.deltaY >= 0 && count < 100) {
      setCount(2+count)
    } else if (e.deltaY <= 0 && count > 0) {
      setCount(count-2)
    } else if (e.deltaY <= 0 && count === 0) {
      setCount(0)
    } else if (e.deltaY >= 0 && count <= 100) {
      setCount(100)
      console.log(count)
    } 

  }


  return (
    <Container>
      <Abajo moveHorizontal={count} onWheel={testWheel} >Abajo</Abajo>
      <Arriba moveHorizontal={count} onWheel={testWheel}>Arriba</Arriba>
      <Testo>testo </Testo>
    </Container>
  );
}

export default Slider;
