import React from 'react';
import NetworkGraph from './components/NetworkGraph';
import { sum } from 'ramda';
import './App.css';


const subjects = [
  { grade: 5,  code: 'CBC',   name: 'Ciclo Báscio Común', credits:8, correlatives:['61.03']},
  { grade: 7,  code: '61.03', name: 'Análisis Matemático II A', credits:8, correlatives:['CBC']},
  { grade: 6,  code: '61.08', name: 'Álgebra II A', credits:8, correlatives:['CBC']},
  { grade: 8,  code: '75.40', name: 'Algoritmos y Programación I', 		credits:6, correlatives:['CBC']},
  { grade: 0,  code: '61.07', name: 'Matemática Discreta',	credits:6, correlatives:['CBC']},
  { grade: 4,  code: '75.03', name: 'Organización del Computador ', 		credits:8, correlatives:['75.40']},
  { grade: 5,  code: '75.41', name: 'Algoritmos y Programación III', 	credits:6, correlatives:['75.40']},
  { grade: 4,  code: '61.09', name: 'Probabilidad y Estadística B', 		credits:6, correlatives:['61.03','61.08']},
  { grade: 4,  code: '71.12', name: 'Estructura de las Organizaciones', 	credits:6, correlatives:['CBC']},
  { grade: 8,  code: '75.06', name: 'Organización de Datos',credits:6, correlatives:['75.03','75.41']},
  { grade: 8,  code: '75.07', name: 'Algoritmos y Programación III', 	credits:6, correlatives:['75.41']},
  { grade: 0,  code: '71.13', name: 'Información en las Organizaciones', credits:6, correlatives:['71.12']},
  { grade: 8,  code: '75.09', name: 'Análisis de la Información', 		credits:6, correlatives:['75.06','75.07']},
  { grade: 8,  code: '75.42', name: 'Taller de Programación I',credits:4, correlatives:['75.03','75.41']},
  { grade: 0,  code: '71.14', name: 'Modelos y Optimización I',credits:6, correlatives:['61.03','61.07','61.08']},
  { grade: 6,  code: '75.10', name: 'Técnicas de Diseño',	credits:6, correlatives:['75.09']},
  { grade: 5,  code: '75.15', name: 'Base de Datos',		credits:6, correlatives:['75.09']},
  { grade: 0,  code: '71.15', name: 'Modelos y Optimización II', 		credits:6, correlatives:['61.09','71.14']},
  { grade: 0,  code: '71.16', name: 'Administración de Proyectos',		credits:6, correlatives:['71.12','71.14']},
  { grade: 6,  code: '75.17', name: 'Implantación de Sistemas',credits:6, correlatives:['75.10']},
  { grade: 9,  code: '75.18', name: 'Proyectos Informáticos',credits:6, correlatives:['71.13','71.16','75.17']}
];


const getProgress = () => {
  const total = sum(subjects.map(subject => subject.credits));
  const completed = sum(subjects.filter(subject => subject.grade >= 4).map(subject => subject.credits));
  console.log(completed);
  console.log(total);
  return (Math.round((completed/total) * 100))
}

const getAverage = () => {
  const aprobadas = subjects.filter(subject => subject.grade >= 4).map(subject => subject.grade);
  return (Math.round((sum(aprobadas)/aprobadas.length)))
}
const App = () => (
  <div className="app-container">
    <div className="card network">
      <NetworkGraph subjects={subjects} />
    </div>
    <div className="card sidecolumn">
      <h1>
        {`Progreso ${getProgress()} %`}
      </h1>
      <h1>
        {`Promedio ${getAverage()}`}
      </h1>
    </div>
  </div>
);

export default App;