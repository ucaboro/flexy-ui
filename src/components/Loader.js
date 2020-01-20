import React, { useContext } from "react";
import logo from "../logo.png";
import { MainContext } from "./Main";
import styled, { keyframes } from "styled-components";
import { getAnimations } from "../utils/styles";

const Loader = props => {
  const { state } = useContext(MainContext);
  const BUBBLES_COUNT = Number(state.bubbleCount);

  const AnimatedBubbles = [...Array(BUBBLES_COUNT)].map((e, i) => (
    <Bubbles key={i} isGreen={state.isGreen} />
  ));
  let { small } = props;
  return (
    <>
      <Wrapper
        width={small ? 200 : 500}
        height={small ? 200 : 500}
        withPerspective={state.withPerspective}
      >
        <Img src={logo} alt="logo" width={small ? "70px" : "150px"} />
        {AnimatedBubbles}
      </Wrapper>
    </>
  );
};

const move = keyframes`
100% {
  transform: translate3d(0, 0, -1000px);
};

60%{
    transition: background-color 0.1s;
    background-color: white;
}; 
`;

const Img = styled.img`
  width: ${props => (props.width ? props.width : "150px")};
  z-index: 2;
  padding: 5%;
  border-radius: 20%;
  background: white;
`;

const Wrapper = styled.div`
  margin: ${props => (props.small ? "0 auto 0 0" : "auto")};
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: ${props => (props.withPerspective ? "500px" : "0px")};
  overflow: hidden;
`;

const Bubbles = styled.div`
  position: absolute;
  background: ${props => (props.isGreen ? "#4fadb5" : "#FF7D45")};
  opacity: 1.7;
  border-radius: 50%;
  animation: ${move} 5s infinite;
  height: 28px;
  width: 28px;

  ${getAnimations(100)}
`;
export default Loader;
