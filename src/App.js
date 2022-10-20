import Home from "./components/Home/Home";
import Legal from "./components/Legal/Legal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
