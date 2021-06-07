
import React, { useState } from 'react';
import NetworkGraph from './components/network-graph';
import { getProgress, getAverage } from './components/utils';
import FileUpload from './components/file-upload';
import Header from './components/header/header'

import './styles.css';

const Main = () => {
  const [subjects, setSubjects] = useState([]);
  return (
    <div className="main-container">
      <Header
        progress={(subjects.length) > 0 ? getProgress(subjects) : undefined}
        average={(subjects.length) > 0 ? getAverage(subjects) : undefined}
      />
      <div className="card">
        {
          subjects.length > 0 ? ( 
            <NetworkGraph subjects={subjects} />
          ) : (
            <FileUpload setSubjects={setSubjects}/>
          )
        }
      </div>
    </div>
  )
}
  
export default Main;