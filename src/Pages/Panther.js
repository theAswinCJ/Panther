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

  // readSketchFile(filePath); 1 parameter
  // writeSketchFile(sketchFileToWrite, filePath); 2 parameters
  // createNewSketchFile(version) ; 1 parameter
  // generateId(); 0 parameters from what i saw

  return (
    <div className="Panther" style={{ width: "0px", height: "0px" }}>
      <h1>Panther is Born</h1>
    </div>
  );
}

export default Panther;
