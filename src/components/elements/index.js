import React from "react";
import Loader from "../Loader";
import styled from "styled-components";
export const Checkbox = props => (
  <ControlElement>
    <input
      className="is-checkradio  is-warning"
      id="exampleRadioInline2"
      type="radio"
      name="exampleRadioInline"
      checked={!props.checked}
      onChange={() => {
        props.setChecked(false);
      }}
    />
    <label htmlFor="exampleRadioInline2">Orange</label>
    <input
      className="is-checkradio"
      id="exampleRadioInline1"
      type="radio"
      name="exampleRadioInline"
      checked={props.checked}
      onChange={() => {
        props.setChecked(true);
      }}
    />
    <label htmlFor="exampleRadioInline1">Green</label>
  </ControlElement>
);

export const Slider = props => (
  <ControlElement>
    <input
      className="slider is-fullwidth has-output is-medium"
      step="1"
      min="0"
      max="100"
      value={props.value}
      type="range"
      onChange={e => {
        props.setValue(e.target.value);
      }}
    />

    <SliderNumber>{props.value}</SliderNumber>
  </ControlElement>
);

export const Switch = props => (
  <ControlElement onClick={() => props.setChecked(!props.checked)}>
    <input
      id="switchColorSuccess"
      type="checkbox"
      name="switchColorSuccess"
      className="switch"
      checked={props.checked}
      onChange={e => {
        e.preventDefault();
      }}
    />
    <label htmlFor="switchExample">with Perspective</label>
  </ControlElement>
);

export const ButtonGroup = props => (
  <ButtonWrapper>
    <button onClick={props.onLoaderClick} className="button is-primary">
      Loader
    </button>
    <button onClick={props.onInlineClick} className="button is-dark">
      Inline
    </button>
  </ButtonWrapper>
);

export const Modal = props => (
  <div className={`modal ${props.active ? "is-active" : ""}`}>
    <ModalBackground className="modal-background" onClick={props.exit} />
    <ModalContent className="modal-content">{props.children}</ModalContent>
  </div>
);

export const InlineLoader = props => (
  <InlineWrapper>
    <Loader small />
    <InlineText>Flexy is searching for the right candidate</InlineText>
  </InlineWrapper>
);

const ControlElement = styled.div`
  margin-bottom: 10%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SliderNumber = styled.output`
  z-index: 0 !important;
`;

const ModalBackground = styled.div`
  background-color: rgba(35, 35, 35, 1) !important;
`;

const ModalContent = styled.div`
  font-size: 30px;
  text-align: center;
`;

const InlineWrapper = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  background-color: #4fadb5;
`;

const InlineText = styled.div`
  font-weight: 100;
  margin: auto;
  color: white;
`;
