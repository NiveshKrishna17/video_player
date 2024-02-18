import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, VideoPlayer } from "./Pages";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/videoPlayer" element={<VideoPlayer />} />
      </Routes>
    </Fragment>
  );
}

export default App;
