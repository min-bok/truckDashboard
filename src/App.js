import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "../src/pages"

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}