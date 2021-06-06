import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FileDrop } from 'react-file-drop';
import './FileUpload.css';
import 'react-toastify/dist/ReactToastify.css';


const checkCorrelatives = (subjects) => {
  const codes = subjects.map(subject => subject.code);
  subjects.forEach( (subject, index) => {
    if (subject.correlatives.length > 0 && !subject.correlatives.every(correlative => codes.includes(correlative))){
      throw new Error(
        `Some of theses correlatives doesn't exist \"${subject.correlatives.join(' - ')}\". They are in line number ${index}`
      );
    }
  })
}

const FileUpload = ({setSubjects}) => {
  const [parsedSubject, setParsedSubject] = useState();

  useEffect(() => {
    if(parsedSubject){
      try {
        checkCorrelatives(parsedSubject);
        toast.error('The file was parsed correctly');
        setSubjects(parsedSubject);
      }catch (err) {
        toast.error(err.message);
      }
    }
  }, [parsedSubject]);

  const loadFile = (file) => {
    try {
      var reader = new FileReader();
      reader.onload = function(e) {
        var contents = e.target.result;
        const subjects = [];
        contents.split("\n").forEach( (line, index) => {
          const parsedLine = line.split(",");
          subjects.push({
            code: parsedLine[0].trim(),
            grade: parseInt(parsedLine[1]),
            credits: parseInt(parsedLine[2]),
            name: parsedLine[3],
            correlatives: parsedLine[4] ? parsedLine[4].split("-").map(x => x.trim()) : [],
          })
        })
        setParsedSubject(subjects)
      };
      reader.readAsText(file);
    } catch (e){
      console.log('aaaa', e);
    }
  }

  return (
    <div className="container">
      <FileDrop
         className="fileDrop"
        onDrop={(files, event) => loadFile(files[0])}
      >
        Drop file here
      </FileDrop>
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
};

export default FileUpload