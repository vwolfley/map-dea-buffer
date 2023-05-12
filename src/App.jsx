import { useState } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";
import { MainMap } from "./components/Map/map";
import InfoDiv from "./components/InfoDiv/infoDiv"


function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <MainMap visible={true} />
      <InfoDiv />
    </div>
  );
}

export default App;
