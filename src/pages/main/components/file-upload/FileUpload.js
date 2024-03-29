import React, { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FileDrop } from 'react-file-drop';
import SubjectsContext from '../../../../context/subjects/subjectsContext';

import './FileUpload.css';
import 'react-toastify/dist/ReactToastify.css';


const checkCorrelatives = (subjects) => {
  const codes = subjects.map(subject => subject.code);
  subjects.forEach( (subject, index) => {
    if ((subject.correlatives.length > 0) && 
        (!subject.correlatives.every(correlative => codes.includes(correlative)))){
      throw new Error(
        `Some of theses correlatives doesn't exist "${subject.correlatives.join(' - ')}". They are in line number ${index}`
      );
    }
  })
}

const FileUpload = () => {
  const [subjects, setSubjects] = useState();
  const [status, setStatus] = useState('NOT_OVER');
  const subjectsContext = useContext(SubjectsContext);

  useEffect(() => {
    if(subjects){
      try {
        checkCorrelatives(subjects);
        subjectsContext.setSubjects(subjects)
      }catch (err) {
        toast.error(err.message);
      }
    }
  }, [subjects]);

  const loadFile = (file) => {
      if(file.type !== 'text/csv' || file.name.split('.').pop() !== 'csv'){
        toast.error('Failure reading the file. The extension needs to be .csv');
      } else {
        var reader = new FileReader();
        reader.onload = parseFile;
        reader.readAsText(file);
      }
  }

  const onOpenFileUploader = (e) => {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.addEventListener('change', (event) => {
      const fileList = event.target.files;
      loadFile(fileList[0])
    });
    e.preventDefault();
    fileSelector.click();
  }

  const parseFile = (e) => {
    try {
      var contents = e.target.result;
      const subjects = [];
      contents.split("\n").forEach( (line, index) => {
        const parsedLine = line.split(",");
        if(parsedLine.length !== 4 && parsedLine.length !== 5) {
          throw new Error(
            `Line number ${index + 1} has some inconsistency`
          );
        }
        subjects.push({
          code: parsedLine[0].trim(),
          grade: parseInt(parsedLine[1]),
          credits: parseInt(parsedLine[2]),
          name: parsedLine[3],
          correlatives: parsedLine[4] ? parsedLine[4].split("-").map(x => x.trim()) : [],
        })
      })
      setSubjects(subjects);
    } catch (err){
      toast.error(err.message);
    }
  }


  return (
    <div className="container">
      <FileDrop
        className={(status === "NOT_OVER") ? "file-drop" : "file-drop__over"}
        onDrop={(files) => loadFile(files[0])}
        onDragOver={() => setStatus('DRAG_OVER')}
        onDragLeave={() => setStatus('NOT_OVER')}
        onTargetClick={onOpenFileUploader}
      >
        <h4>¡ Drop file here or click me !</h4>
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