import React from 'react'

import {
  Loading as LoadingContainer
} from './loading.styles'

import SvgCube from '../svgFiles/cube/cube'
import SvgCubeColor from '../svgFiles/cubeColor/cubeColor';
import SvgMandarina from '../svgFiles/mandarina/mandarina'
import SvgMandarinaMitad from '../svgFiles/mandarinaMitad/mandarinaMitad'
import SvgMandarinaText from '../svgFiles/mandarinaText/mandarinaText'
import SvgTagline from '../svgFiles/tagline/tagline'

function Loading() {

  return (
    <LoadingContainer>
      <div>
        <SvgCube />
        <SvgCubeColor />
        <SvgMandarina />
        <SvgMandarinaMitad />
        <SvgMandarinaText />
        <SvgTagline />
      </div>
    </LoadingContainer>
  );
}

export default Loading;
