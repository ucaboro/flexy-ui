import React, { useReducer } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import Controls from "./Controls";
import { reducer, initialState } from "../reducer";

export const MainContext = React.createContext();

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContentWrapper className="columns">
      <MainContext.Provider value={{ state, dispatch }}>
        <div className="column is-4">
          <Controls />
        </div>
        <div className="column">
          <Loader />
        </div>
      </MainContext.Provider>
    </ContentWrapper>
  );
};
export default Main;

const ContentWrapper = styled.div`
  margin-top: 5%;
`;
