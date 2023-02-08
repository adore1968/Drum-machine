import React from "react";
import { useSelector } from "react-redux";

function DrumPreview() {
  const previewText = useSelector(
    (store) => store.drumMachineSlice.previewText
  );

  return (
    <div className="col-6">
      <h2 className="fs-4 text-center">{previewText}</h2>
    </div>
  );
}

export default DrumPreview;
