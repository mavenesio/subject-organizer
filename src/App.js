import React, { useState } from 'react';
import NetworkGraph from './components/network-graph';
import { getProgress, getAverage } from './components/network-graph/utils';
import FileUpload from './components/file-upload';
import './App.css';

const App = () => {
  const [subjects, setSubjects] = useState([]);
  return (
    <div className="app-container">
      {
        subjects.length > 0 ? (
          <>
            <div className="card network">
              <NetworkGraph subjects={subjects} />
            </div>
            <div className="card side-column">
              <h1>
                {`Progreso ${getProgress(subjects)} %`}
              </h1>
              <h1>
                {`Promedio ${getAverage(subjects)}`}
              </h1>
            </div>  
          </>
        ) : (
          <div className="card upload">
            <FileUpload 
              setSubjects={setSubjects}
            />
          </div>
        )
      }
    </div>
  )
}
  
export default App;