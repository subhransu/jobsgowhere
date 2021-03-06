import React from "react";
import styled from "styled-components";

const Col = styled.div`
  max-width: 29.75rem;
  width: 100%;
  & + & {
    margin-left: 1.375rem;
  }
`;

const StyledMain = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
`;

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => <StyledMain>{children}</StyledMain>;

Main.Col = Col;

export default Main;
