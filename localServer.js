const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

let sketch = require("sketch-file");
const port = 5000;

app.use(cors("*"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: "500mb" }));

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

app.get("/", (req, res) => {
  console.log("Started READ Execution");

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

  console.log("Finished READ Execution");
});

app.post("/", (req, res) => {
  console.log("Started WRITE Execution");

  // WRITE A FILE
  let fileToWrite = req.body.fileToWrite;
  let writePath = req.body.pathFromRoot;
  if (isEmpty(fileToWrite)) {
    console.log("WRITE FAILED. INVALID FILE RECEIVED ->", fileToWrite);
    res.send("Invalid File");
  } else {
    console.log("ENTERED WRITE CONDITION. Writing -> ", fileToWrite);
    sketch
      .writeSketchFile(fileToWrite, writePath)
      .then(() => {
        res.send("Success");
        console.log("SUCCESS, FILE Written in ", writePath);
      })
      .catch(err => {
        res.send("Failed");
        console.log("ERROR DETAILS -> ", err);
      });
  }

  console.log("Finished WRITE Execution");
});

app.listen(port, () =>
  console.log(
    `RiafyTools Sketch File Handler in Local Server listening on port ${port}!`
  )
);
