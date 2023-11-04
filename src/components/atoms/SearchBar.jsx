import React, { useState } from "react";
import styled from "styled-components";
import { TbSearch } from "react-icons/tb";

export default function SearchBar() {
  return (
    <Wrap>
      <Input type="text" placeholder="Search by tracking number" />
      <TbSearch className="searchIcon" />
    </Wrap>
  );
}

// input focus시에 아이콘 없어지도록

const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 3rem;
  background-color: pink;

  .searchIcon {
    position: absolute;
    font-size: 20px;
    left: 20px;
  }
`;

const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  color: var(--dark-color);
  left: 0;

  &:focus {
    outline: none;
    border: 1.75px solid var(--main-color);
  }

  &::placeholder {
    padding-left: 30px;
  }
`;
