import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Api";

import Home from "./views/pages/Home/Home";
import Work from "./views/pages/Work";
import Music from "./views/pages/Music";
import Other from "./views/pages/Other";
import Travel from "./views/pages/Travel";
import Notification from "./views/components/Notification";
import Quantum from "./views/pages/Quantum";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/music" element={<Music />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/other" element={<Other />} />
        <Route path="/quantum" element={<Quantum />} />
      </Routes>
      <Notification />
    </div>
  );
}

export default App;
