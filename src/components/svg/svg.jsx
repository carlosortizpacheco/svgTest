import React from 'react'

import {
  Container,
  SvgClock,
  SvgCart,
  SvgCommunication
} from './svg.styles'


function Svg() {
  return (
    <Container>
      <SvgClock version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 512 512" xmlSpace="preserve">
        <path d="M272,76.43c99.17,0,179.57,80.4,179.57,179.57S371.17,435.57,272,435.57"/>
        <line x1="273.3" y1="236.71" x2="305.89" y2="154.71" />
        <line x1="140.95" y1="259.56" x2="113.13" y2="261.13" />
        <line x1="411.78" y1="261.13" x2="439.59" y2="259.56" />
        <line x1="284.7" y1="271.29" x2="382.8" y2="319.74" />
        <circle cx="273.3" cy="256" r="19.29"/>
        <path d="M272,435.57c-99.17,0-179.57-80.4-179.57-179.57S172.83,76.43,272,76.43"/>
      </SvgClock>
      <SvgCart version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/SvgCart" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512" xmlSpace="preserve">
        <circle cx="209.27" cy="351.3" r="26.24"/>
        <circle cx="322.57" cy="351.3" r="26.24"/>
        <circle cx="117.07" cy="151.42" r="16.97"/>
        <path d="M248,300.55h-43.71v-62.79h26.03c9.77,0,17.69,7.92,17.69,17.69V300.55z"/>
        <path d="M135.1,149.22h14.71l29.39,152.56l188.02-0.06c0,0,14.71,1.87,14.7-14.7l0-103.41H161.96"/>
        <path d="M376.94,346.07H172.53c-10.44,0-19.65-7.44-21.21-17.76c-1.45-9.61,1.33-26.54,27.88-26.54"/>
        <path d="M352.81,300.55h-41.44V198.4h25.95c8.56,0,15.49,6.94,15.49,15.49V300.55z"/>
        <path d="M300.81,300.55h-41.44v-89.3h25.95c8.56,0,15.49,6.94,15.49,15.49V300.55z"/>
      </SvgCart>
      <SvgCommunication version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512" xmlSpace="preserve">
        <path d="M273.42,174.43h151.14c6.78,0,12.27,5.49,12.27,12.27v76.95c0,9.01-7.32,16.31-16.32,16.28l-62.25-0.16
          l-25.78,21.46c-2.94,2.44-7.41,0.53-7.67-3.28l-1.28-18.68h-60.11v-94.84C263.42,178.91,267.9,174.43,273.42,174.43z"/>
        <g>
          <path d="M302.17,236.15c0,67.1-50.8,161.3-113.5,161.3s-113.5-94.2-113.5-161.3s50.8-121.6,113.5-121.6
            S302.17,168.95,302.17,236.15z"/>
          <path d="M125.87,288.75h125.5c0,0-8.6,61.1-62.7,62C134.47,351.55,125.87,288.75,125.87,288.75z"/>
        </g>
      </SvgCommunication>
    </Container>
  );
}

export default Svg;
