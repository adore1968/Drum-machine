import React from "react";
import DrumPads from "./DrumPads";
import DrumPreview from "./DrumPreview";

function DrumMachine() {
  return (
    <div
      id="drum-machine"
      className="bg-white d-flex flex-wrap justify-content-between align-items-center col-6 rounded"
    >
      <DrumPads />
      <DrumPreview />
    </div>
  );
}

export default DrumMachine;
