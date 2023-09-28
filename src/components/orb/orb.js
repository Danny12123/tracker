import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
    const {width, height} = useWindowSize();
    console.log(width, height);

    const moveOrb = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width}px, ${height/1.5}px);
    }
    100% {
      transform: translate(0, 0);
    }
  `;
    const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -35vh; /* Adjusted this value for centering */
    margin-top: -35vh; /* Adjusted this value for centering */
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(300px);
    animation: ${moveOrb} 15s alternate linear infinite; /* Increased the animation duration */
    `;
  return (
    <OrbStyled></OrbStyled>
  )
}

export default Orb;