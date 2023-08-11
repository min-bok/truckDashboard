import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components"

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Test>
        <p>sdfsddf</p>
      </Test>
    </>
  );
}

const Test = styled.div`
  background-color: var(--main-color)
`

