import React from "react";
import styled from "styled-components"
import { TbSmartHome } from "react-icons/tb";

export default function NavList({ data }) {
    return (
        <div>
            {data && data.map((list, idx) => (
                <List key={idx}>
                    <StyledTbSmartHome />
                        <p>{list}</p>
                </List>
            ))}
        </div>
    )
}

const List = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 50px;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    padding: 0 20px;

    &:hover {
        background-color: #7B57DF13;
    }

    &:hover::before {
        position: absolute;
        content: "";
        width: 5px;
        height: 100%;
        left: 2px;
        background-color: var(--main-color);
    }

    p {
        color: var(--text-color);
        font-size: var(--regular-size);
        font-weight: var(--regular-weight);
    }
`

const StyledTbSmartHome = styled(TbSmartHome)`
    color: var(--text-color);
    font-size: var(--regular-size);
    font-weight: var(--regular-weight);
`