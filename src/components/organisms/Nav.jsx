import React from "react";
import styled from "styled-components"
import { NavList, Button, Line } from "../atoms"
import { Profile, Logo } from "../organisms"
import { navDataList, navNoticeList } from "../../data/dummy"

export default function Nav() {
    return (
        <Wrap>
            <div>
                <Logo/>
                <NavList data={navNoticeList}/>
                <Line mt="10" mb="10"/>
                <NavList data={navDataList}/>
            </div>
            <div>
                <Button lr="20"> + Create shipment</Button>
                <Line mt="20"/>
                <Profile/> 
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    height: 100vh;    
    background-color: var(--light-color);
    box-shadow: 2px 2px 2px #94949426;
`