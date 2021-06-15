
import React, { useContext, useState, useEffect } from 'react';
import NetworkGraph from './components/network-graph';
import FileUpload from './components/file-upload';
import Header from './components/header/header';
import SubjectsContext from '../../context/subjects/subjectsContext';
import { slide as Menu} from 'react-burger-menu';
import './styles.css'

const Main = () => {
  const {
    hasSubjects,
    selectedSubject,
    setSelectedSubject
  } = useContext(SubjectsContext);
  const [areMenusOpen, setAreMenusOpen] = useState(false);
  
  useEffect(() => {
    if(selectedSubject){
      setAreMenusOpen(true);
    }
  }, [selectedSubject]);

  return (
    <div
      className="main-container"
      id="outer-container"
    >
      <Menu
        isOpen={areMenusOpen}
        onClose={ () => {setAreMenusOpen(false);setSelectedSubject(null)} }
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
        width={ '50vw' }
        pushRotate
      >
        <div className="menu-items">
          {
            selectedSubject ? (
              <div className="menu-item">
                <h3 className="menu-item-title">
                  {`[${selectedSubject.code}]${selectedSubject.name}`}
                </h3>
              </div>
            ) : null
          }
        </div>
      </Menu>
        <Header />
        <div
          className="body-container"
          id="page-wrap"
        >
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
