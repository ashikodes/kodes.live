import styled, { keyframes } from 'styled-components';

const drop = keyframes`
  0% {
    top: -50%
  }
  100% {
    top: 110%
  }
`;

export const DivLines = styled.div`
  position: relative;
  height: 75%;
  margin: auto;
  width: 100%;
`;

export const DivLine = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 75%,
      #ffffff 100%
    );
    animation: ${drop} 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(1):after {
    animation-delay: 2s;
  }

  &:nth-child(3) {
    left: 100%;
  }
  &:nth-child(3):after {
    animation-delay: 2.5s;
  }
`;
