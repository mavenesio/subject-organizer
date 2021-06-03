import React from 'react';
import { FileDrop } from 'react-file-drop';
import './FileUpload.css'

const FileUpload = ({setSubjects}) => {

  const loadFile = (file) => {
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      const subjects = []
      contents.split("\n").forEach( line => {
        const parsedLine = line.split(",");
        subjects.push({
          grade: parseInt(parsedLine[0]),
          code: parsedLine[1],
          name: parsedLine[2],
          credits: parseInt(parsedLine[3]),
          correlatives: parsedLine[4] ? parsedLine[4].split("-") : [],
        })
      })
      console.log(JSON.stringify(subjects, null, 4));
      setSubjects(subjects)
    };
    reader.readAsText(file);
  }

  return (
    <div className="container">
      <FileDrop
         className="fileDrop"
        onDrop={(files, event) => loadFile(files[0])}
      >
        Drop file here
      </FileDrop>
    </div>
  );
};

export default FileUpload