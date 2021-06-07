
import React, { useState } from 'react';
import NetworkGraph from '../../components/network-graph';
import { getProgress, getAverage } from '../../components/utils';
import FileUpload from '../../components/file-upload';
import LogOut from '../auth/components/log-out/logOut'

import './main.css';

const Main = () => {
  const [subjects, setSubjects] = useState([]);
  return (
    <div className="app-container">
      <LogOut />
      {
        subjects.length > 0 ? (
          <>
            <div className="card side-column">
              <div className="header-card">
                <div className="header-title">
                  {`${getProgress(subjects)} %`}
                </div>
                <div className="header-subtitle">
                  Progreso
                </div>
              </div>
              <div className="header-card">
                <div className="header-title">
                  {`${getAverage(subjects)}`}
                </div>
                <div  className="header-subtitle">
                  Promedio
                </div>
              </div>
            </div> 
            <div className="card network">
              <NetworkGraph subjects={subjects} />
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
  
export default Main;