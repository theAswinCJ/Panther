const express = require("express");
const app = express();
const cors = require("cors");

let sketch = require("sketch-file");
const port = 5000;

app.use(cors("*"));

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

app.get("/", (req, res) => {
  console.log("Started localserver Execution");

  // MODE 1 -> CREATE A SKETCH FILE
  // NO NEED TO RUN IN SERVER. CAN BE DONE IN BROWSER ITSELF

  // MODE 2 -> READ A FILE
  if (req.query.mode === "2") {
    let readpath = req.query.pathFromRoot;
    sketch
      .readSketchFile(readpath)
      .then(readFile => {
        res.send(readFile);
        console.log("SUCCESS, FILE FOUND in ", readpath);
      })
      .catch(err => {
        console.log("ERROR DETAILS -> ", err);
      });
  }

  // MODE 3 -> WRITE A FILE
  else if (req.query.mode === "3") {
    let fileToWrite = req.query.fileToWrite; // IS THIS THE WAY TO GET THE FILE FROM POST ?????
    let writePath = req.query.pathFromRoot;
    if (isEmpty(fileToWrite)) {
      console.log("WRITE FAILED. INVALID FILE RECEIVED ->", fileToWrite);
    } else {
      console.log("ENTERED WRITE CONDITION. Writing -> ", fileToWrite);
      sketch
        .writeSketchFile(fileToWrite, writePath)
        .then(result => {
          console.log(
            "SUCCESS, FILE Written in ",
            writePath,
            "RESULT->",
            result
          );
        })
        .catch(err => {
          console.log("ERROR DETAILS -> ", err);
        });
    }
  }

  // MODE 4 -> GENERATE FILE ID
  // NO NEED TO RUN IN SERVER. CAN BE DONE IN BROWSER ITSELF
  console.log("Finished localserver Execution");
});

app.post("/", (req, res) => {
  console.log("Started POST Execution");

  console.log(req);

  // // MODE 3 -> WRITE A FILE
  // let fileToWrite = req.body.fileToWrite; // IS THIS THE WAY TO GET THE FILE FROM POST ?????
  // let writePath = req.body.pathFromRoot;
  // if (isEmpty(fileToWrite)) {
  //   console.log("WRITE FAILED. INVALID FILE RECEIVED ->", fileToWrite);
  // } else {
  //   console.log("ENTERED WRITE CONDITION. Writing -> ", fileToWrite);
  //   sketch
  //     .writeSketchFile(fileToWrite, writePath)
  //     .then(result => {
  //       res.send(result);
  //       console.log("SUCCESS, FILE Written in ", writePath, "RESULT->", result);
  //     })
  //     .catch(err => {
  //       console.log("ERROR DETAILS -> ", err);
  //     });
  // }

  console.log("Finished POST Execution");
});

app.listen(port, () =>
  console.log(
    `RiafyTools Sketch File Handler in Local Server listening on port ${port}!`
  )
);
