import React from "react";
import {
  readSketchFile,
  writeSketchFile,
  createNewSketchFile,
  generateId
} from "sketch-file";

function Panther() {
  console.log("SketchFile readSketchFile", readSketchFile);
  console.log("SketchFile writeSketchFile", writeSketchFile);
  console.log("SketchFile createNewSketchFile", createNewSketchFile);
  console.log("SketchFile generateId", generateId);

  return (
    <div className="Panther" style={{ width: "0px", height: "0px" }}>
      <h1>Panther is Born</h1>
    </div>
  );
}

export default Panther;
