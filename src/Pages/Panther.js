import React from "react";
import axios from "axios";
import { createNewSketchFile, generateId } from "sketch-file";

function Panther() {
  // VERIFY IF IMPORTS WORK
  // console.log("SketchFile createNewSketchFile", createNewSketchFile);
  // console.log("SketchFile generateId", generateId);

  /*-------------------------------------------------------------------------------------------
                        DOCUMENTATION

  // createNewSketchFile(version) ; 1 parameter
  // readSketchFile(filePath); 1 parameter
  // writeSketchFile(sketchFileToWrite, filePath); 2 parameters
  // generateId(); 0 parameters from what i saw
  -------------------------------------------------------------------------------------------*/

  /*-------------------------------------------------------------------------------------------
                        DOCUMENTATION

  // createNewSketchFile(version) ;  No need server side help. Can be done in browser
  // readSketchFile(filePath); Requires Server. Done as a get request
  // writeSketchFile(sketchFileToWrite, filePath); Requires Server. Done as a post request
  // generateId(); No need server side help
  -------------------------------------------------------------------------------------------*/

  // CREATE NEW FILE -> WORKS IN BROWSER
  let newEmptySketchFile = createNewSketchFile(62);

  // READ A SKETCH FILE FROM ROOT PATH OF THIS PROJECT
  const getFile = async () => {
    let readFile = (
      await axios.get("http://localhost:5000/", {
        params: {
          pathFromRoot: "./src/SketchFiles/panther.sketch"
        }
      })
    ).data;
    console.log("ServerOutput READ -> ", readFile);
    return readFile;
  };

  // WRITE A SKETCH FILE TO ROOT PATH OF THIS PROJECT. GIVE THE FILE TO WRITE IN BODY
  const writeFile = async readFile => {
    let writeFileStatus = (
      await axios.post("http://localhost:5000/", {
        pathFromRoot: "./src/SketchFiles/Written/new.sketch",
        fileToWrite: readFile
      })
    ).data;
    console.log("ServerOutput WRITE -> ", writeFileStatus);
  };

  const sampleWorking = async () => {
    let readFile = await getFile();
    //Process Here
    writeFile(readFile);
  };

  // Read -> Process -> Write a Sketch File
  sampleWorking();

  // GENERATE ID
  let sketchFileID = generateId();

  return (
    <div className="Panther" style={{ width: "0px", height: "0px" }}>
      <h1>Panther is Born</h1>
    </div>
  );
}

export default Panther;
