import React from "react";
import styled from "styled-components"

export default function Logo() {
    return(
        <Wrap>
            <img src="" alt="" />
            <div>
                <h1>Netruck</h1>
                <p>Workspace</p>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    gap: 10px;
    padding: 0 20px;

    img {
        width: 50px;
        height: 50px;
        background-color: var(--bg-color);
        border-radius: 50%
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40px; 

        h1 {
            color: var(--main-color);
            font-size: var(--large-size);
            font-weight: var(--bold-weight);
        }

        p {
            color: var(--text-color);
            font-size: var(--small-size);
        }
    }
`