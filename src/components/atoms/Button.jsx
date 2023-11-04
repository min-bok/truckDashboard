import React from "react";
import styled from "styled-components"

export default function Button({ children, onClick, tb, lr }) {
    return (
        <Btn onClick={() => {onClick()}} tb={tb ? tb : 0} lr={lr ? lr : lr}>
            {children}
        </Btn>
    )
}

const Btn = styled.button`
    width: 240px;
    height: 50px;
    background-color: var(--main-color);
    border: none;
    border-radius: 6px;
    color: var(--light-color);
    font-size: var(--small-size);
    margin: ${({tb, lr}) => `${tb}px ${lr}px`};
    padding: 0;
`