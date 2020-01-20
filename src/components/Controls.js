import React, { useContext, useState } from "react";
import { MainContext } from "./Main";
import {
  Switch,
  Slider,
  ButtonGroup,
  Checkbox,
  Modal,
  InlineLoader
} from "./elements";
import Loader from "./Loader";

import styled from "styled-components";

const Controls = () => {
  const { state, dispatch } = useContext(MainContext);
  let [modalActive, setModal] = useState(false);

  const changeCheckbox = newValue => {
    dispatch({ type: "UPDATE_COLOR", data: newValue });
  };

  const changePerspective = newValue => {
    dispatch({ type: "UPDATE_PERSPECTIVE", data: newValue });
  };

  const changeBubbleCount = newValue => {
    dispatch({ type: "UPDATE_BUBBLE_COUNT", data: newValue });
  };

  const changeLoaderCase = newValue => {
    setModal(!modalActive);
    dispatch({ type: "UPDATE_LOADER_CASE", data: newValue });
  };

  let { inline, withPerspective, bubbleCount, isGreen } = state;

  return (
    <Card>
      <Modal active={modalActive} exit={() => setModal(false)}>
        {inline ? <InlineLoader /> : <Loader />}
      </Modal>
      <Text>CONTROLS</Text>
      <Switch checked={withPerspective} setChecked={changePerspective} />

      <Text size="16px" noMargin>
        Number of bubbles
      </Text>
      <Slider value={bubbleCount} setValue={changeBubbleCount} />

      <Text size="16px">Bubble color</Text>
      <Checkbox checked={isGreen} setChecked={changeCheckbox} />

      <div className="is-divider" />

      <Text size="16px">Imitate Use Cases</Text>
      <ButtonGroup
        onLoaderClick={() => changeLoaderCase(false)}
        onInlineClick={() => changeLoaderCase(true)}
      />
    </Card>
  );
};

const Card = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 100%;
  padding: 5%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);

  @media (max-width: 768px) {
    margin-left: 0%;
  }
`;

const Text = styled.div`
  font-size: ${props => (props.size ? props.size : "32px")};
  font-weight: 700;
  line-height: 1;
  color: #757575;
  margin-bottom: ${props => (props.noMargin ? "0%" : "5%")};
`;

export default Controls;
