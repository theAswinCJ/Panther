import React from "react";
import {
  readSketchFile,
  writeSketchFile,
  createNewSketchFile,
  generateId
} from "sketch-file";

function Panther() {
  // VERIFY IF IMPORTS WORK
  // console.log("SketchFile readSketchFile", readSketchFile);
  // console.log("SketchFile writeSketchFile", writeSketchFile);
  // console.log("SketchFile createNewSketchFile", createNewSketchFile);
  // console.log("SketchFile generateId", generateId);

  /*-------------------------------------------------------------------------------------------
                        DOCUMENTATION
  // readSketchFile(filePath); 1 parameter
  // writeSketchFile(sketchFileToWrite, filePath); 2 parameters
  // createNewSketchFile(version) ; 1 parameter
  // generateId(); 0 parameters from what i saw
  -------------------------------------------------------------------------------------------*/

  // CREATE NEW FILE -> WORKS
  let newPanther = createNewSketchFile(62);

  // READ A FILE
  // let readpath = "./panther.sketch";
  // let newFile = readSketchFile(readpath);
  // console.log("SketchFile panther", newFile);

  // WRITE A FILE
  let writepath = "./Newpanther2";
  writeSketchFile(newPanther, writepath);
  console.log("SketchFile panther written");

  // GENERATE ID
  // let newid = generateId();
  return (
    <div className="Panther" style={{ width: "0px", height: "0px" }}>
      <h1>Panther is Born</h1>
    </div>
  );
}

export default Panther;
