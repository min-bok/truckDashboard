import React from "react";
import styled from "styled-components"

export default function Profile() {
    return (
        <Wrap>
            <img src="" alt="" />
            <div>
                <h3>Jacques Cherrier</h3>
                <p>Manager</p>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    height: 100px;
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
        height: 35px; 

        h3 {
            color: var(--dark-color);
            font-size: var(--regular-size);
            font-weight: var(--medium-weight);
        }

        p {
            color: var(--text-color);
            font-size: var(--small-size);
        }
    }
`