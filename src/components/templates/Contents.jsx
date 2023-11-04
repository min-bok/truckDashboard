import React from "react";
import { SearchBar } from "../atoms";
import styled from "styled-components";

export default function Contents() {
  return (
    <Cont>
      <Wrap>
        <SearchBar />
      </Wrap>
    </Cont>
  );
}

const Cont = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  padding: 20px 30px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
