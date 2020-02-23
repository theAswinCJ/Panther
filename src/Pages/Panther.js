import React, { useState } from "react";
import axios from "axios";
import { createNewSketchFile, generateId } from "sketch-file";

function Panther() {
  // VERIFY IF IMPORTS WORK
  // console.log("SketchFile readSketchFile", readSketchFile);
  // console.log("SketchFile writeSketchFile", writeSketchFile);
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

  // createNewSketchFile(version) ; MODE 1 -> No need server side help
  // readSketchFile(filePath); MODE 2
  // writeSketchFile(sketchFileToWrite, filePath); MODE 3
  // generateId(); MODE 4 -> No need server side help
  -------------------------------------------------------------------------------------------*/

  // CREATE NEW FILE -> WORKS
  let newPanther = createNewSketchFile(62);

  let hardcodePanther;

  // // READ A FILE
  // let readpath = "./panther.sketch";
  // let newFile = readSketchFile(readpath);
  // console.log("SketchFile panther", newFile);

  // let [fileReadFromServer, setFileReadFromServer] = useState();

  const getFile = async () => {
    let readFile = (
      await axios.get("http://localhost:5000/", {
        params: {
          mode: 2,
          pathFromRoot: "./src/SketchFiles/panther.sketch"
        }
      })
    ).data;
    console.log("ServerOutput READ", readFile);
    alert(readFile);
  };

  const writeFile = async () => {
    let writeFileStatus = (
      await axios.post("http://localhost:5000/", {
        mode: 3,
        pathFromRoot: "./src/SketchFiles/Written/new.sketch",
        fileToWrite: newPanther
      })
    ).data;
    console.log("ServerOutput WRITE", writeFileStatus);
  };

  // getFile();
  writeFile();
  // if (fileReadFromServer) writeFile(fileReadFromServer);

  // writeFile(newPanther);
  // WRITE A FILE
  // let writepath = "./Newpanther2";
  // writeSketchFile(newPanther, writepath);
  // console.log("SketchFile panther written");

  // GENERATE ID
  // let newid = generateId();
  return (
    <div className="Panther" style={{ width: "0px", height: "0px" }}>
      <h1>Panther is Born</h1>
    </div>
  );
}

export default Panther;
