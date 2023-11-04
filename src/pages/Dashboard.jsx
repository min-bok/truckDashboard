import React from "react";
import styled from "styled-components";
import { Nav } from "../components/organisms";
import { Contents } from "../components/templates";

export default function Dashboard() {
  return (
    <Wrap>
      <Nav />
      <Contents />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
`;
