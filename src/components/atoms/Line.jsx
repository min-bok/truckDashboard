import React from "react";
import styled from "styled-components";

export default function Line({mt, mb}) {
    return (
        <Hr mt={mt ? mt : 0} mb={mb ? mb : 0}/>
    )
}

const Hr = styled.hr`
    width: 100%; 
    margin: ${({mt, mb}) => `${mt}px 0 ${mb}px 0`};
    height: 1px;
    background-color: var(--bg-color);
`