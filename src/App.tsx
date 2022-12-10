import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./view/pages/Home/Home";
import Work from "./view/pages/Work";
import Music from "./view/pages/Music";
import Other from "./view/pages/Other";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/other" element={<Other />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;
