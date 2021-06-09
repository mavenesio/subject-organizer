
import React, { useContext } from 'react';
import NetworkGraph from './components/network-graph';
import FileUpload from './components/file-upload';
import Header from './components/header/header';
import SubjectsContext from '../../context/subjects/subjectsContext';
import './styles.css'

const Main = () => {
  const { hasSubjects } = useContext(SubjectsContext);
  return (
    <div className="main-container">
      <Header />
      <div className="body-container">
        <div className="card">
          {
            hasSubjects ? ( 
              <NetworkGraph/>
            ) : (
              <FileUpload/>
            )
          }
        </div>
      </div>
    </div>
  )
}
  
export default Main;