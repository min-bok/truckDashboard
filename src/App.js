import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../src/pages";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// 디자인 참고
// https://dribbble.com/shots/21727865-Wayels-Courier-System-Dashboard
