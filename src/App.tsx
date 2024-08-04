import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Api";
import Loader from "./views/components/Loader";

const Home = lazy(() => import("./views/pages/Home/Home"));
const Work = lazy(() => import("./views/pages/Work"));
const Music = lazy(() => import("./views/pages/Music"));
const Other = lazy(() => import("./views/pages/Other"));
const Travel = lazy(() => import("./views/pages/Travel"));
const Notification = lazy(() => import("./views/components/Notification"));
const Quantum = lazy(() => import("./views/pages/Quantum"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/music" element={<Music />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/other" element={<Other />} />
          <Route path="/quantum" element={<Quantum />} />
        </Routes>
      </Suspense>
      <Notification />
    </div>
  );
}

export default App;
