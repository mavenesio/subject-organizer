import React from 'react';
import { FileDrop } from 'react-file-drop';

const FileUpload = ({setSubjects}) => {
  const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 };

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
    <div>
      <div style={styles}>
        <FileDrop
          onDrop={(files, event) => loadFile(files[0])}
        >
          Drop some files here!
        </FileDrop>
      </div>
    </div>
  );
};

export default FileUpload