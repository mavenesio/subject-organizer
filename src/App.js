import React, { useState } from 'react';
import NetworkGraph from './components/NetworkGraph';
import { getProgress, getAverage } from './components/utils';
import FileUpload from './components/FileUpload';
import './App.css';


const subjs = [
  { grade: 5, code: 'CBC',  correlatives: []},
  { grade: 7, code: '61.03',correlatives: ['CBC']},
  { grade: 6, code: '61.08',correlatives: ['CBC']},
  { grade: 8, code: '75.40',correlatives: ['CBC']},
  { grade: 0, code: '61.07',correlatives: ['CBC']},
  { grade: 4, code: '75.03',correlatives: ['75.40']},
  { grade: 5, code: '75.41',correlatives: ['75.40']},
  { grade: 4, code: '61.09',correlatives: ['61.03','61.08']},
  { grade: 4, code: '71.12',correlatives: ['CBC']},
  { grade: 8, code: '75.06',correlatives: ['75.03','75.41']},
  { grade: 8, code: '75.07',correlatives: ['75.41']},
  { grade: 0, code: '71.13',correlatives: ['71.12']},
  { grade: 8, code: '75.09',correlatives: ['75.06','75.07']},
  { grade: 8, code: '75.42',correlatives: ['75.03','75.41']},
  { grade: 0, code: '71.14',correlatives: ['61.03','61.07','61.08']},
  { grade: 6, code: '75.10',correlatives: ['75.09']},
  { grade: 5, code: '75.15',correlatives: ['75.09']},
  { grade: 0, code: '71.15',correlatives: ['61.09','71.14']},
  { grade: 0, code: '71.16',correlatives: ['71.12','71.14']},
  { grade: 6, code: '75.17',correlatives: ['75.10']},
  { grade: 9, code: '75.18',correlatives: ['71.13','71.16','75.17']}];
const aa =[
  { grade: 5, code: 'CBC',  correlatives: []},
  { grade: 7, code: '61.03',correlatives: ['CBC']},
  { grade: 6, code: '61.08',correlatives: ['CBC']},
  { grade: 8, code: '75.40',correlatives: ['CBC']},
  { grade: 0, code: '61.07',correlatives: ['CBC']},
  { grade: 4, code: '75.03',correlatives: ['75.40']},
  { grade: 5, code: '75.41',correlatives: ['75.40']},
  { grade: 4, code: '61.09',correlatives: ['61.03','61.08']},
  { grade: 4, code: '71.12',correlatives: ['CBC']},
  { grade: 8, code: '75.06',correlatives: ['75.03','75.41']},
  { grade: 8, code: '75.07',correlatives: ['75.41']},
  { grade: 0, code: '71.13',correlatives: ['71.12']},
  { grade: 8, code: '75.09',correlatives: ['75.06','75.07']},
    { grade: 8, code: '75.42',correlatives: ['75.03','75.41']},
  { grade: 0, code: '71.14',correlatives: ['61.03','61.07','61.08']},
  { grade: 6, code: '75.10',correlatives: ['75.09']},
  { grade: 5, code: '75.15',correlatives: ['75.09']},
  { grade: 0, code: '71.15',correlatives: ['61.09','71.14']},
  { grade: 0, code: '71.16',correlatives: ['71.12','71.14']},
  { grade: 6, code: '75.17',correlatives: ['75.10']},
  { grade: 9, code: '75.18',correlatives: ['71.13','71.16','75.17']}]

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