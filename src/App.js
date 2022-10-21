import Home from "./components/Home/Home";
import Legal from "./components/Legal/Legal";
import Themes from "./components/Themes/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="legal" element={<Legal />} />
        <Route path="template" element={<Themes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
