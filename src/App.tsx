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
        <Route path="/personal/" element={<Home />} />
        <Route path="/personal/work/" element={<Work />} />
        <Route path="/personal/other/" element={<Other />} />
        <Route path="/personal/music/" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;
