
import React, { useContext } from 'react';
import LogOut from '../../../auth/components/log-out/logOut';
import SubjectsContext from '../../../../context/subjects/subjectsContext';

import './styles.css';

const Main = () =>  {

  return (
    <div className="header-container">
      <div className="header-indicators">
        <div className="header-item">
          <h1 className="header-item-title">
            {'-'}
          </h1>
          <h4 className="header-item-subtitle">
            PROGRESS
          </h4>
        </div>
        <div className="header-item">
          <h1 className="header-item-title">
            {'-'}
          </h1>
          <h4 className="header-item-subtitle">
            AVERAGE
          </h4>
        </div>
      </div>
      <LogOut />
    </div>
  )
}
  
export default Main;