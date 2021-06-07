
import React from 'react';
import LogOut from '../../../auth/components/log-out/logOut';

import './styles.css';

const Main = ({progress, average}) =>  (
  <div className="header-container">
    <div className="header-indicators">
      <div className="header-item">
        <h1 className="header-item-title">
          {progress || '-'}
        </h1>
        <h4 className="header-item-subtitle">
          PROGRESS
        </h4>
      </div>
      <div className="header-item">
        <h1 className="header-item-title">
          {average || '-'}
        </h1>
        <h4 className="header-item-subtitle">
          AVERAGE
        </h4>
      </div>
    </div>
    <LogOut />
  </div>
)
  
export default Main;