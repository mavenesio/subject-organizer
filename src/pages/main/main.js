
import React, { useContext, useState, useEffect } from 'react';
import NetworkGraph from './components/network-graph';
import FileUpload from './components/file-upload';
import Header from './components/header/header';
import SubjectsContext from '../../context/subjects/subjectsContext';
import { scaleRotate as Menu} from 'react-burger-menu';
import Switch from "react-switch";
import Slider from 'react-rangeslider'
import './styles.css'

const Main = () => {
  const {
    hasSubjects,
    changeEnableDrag,
    changePullIn,
    setNodeDistance,
    setZoomDepth,
    enableDrag,
    pullIn,
    nodeDistance,
    zoomDepth,
  } = useContext(SubjectsContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoom, setzoom] = useState(0);
  
  useEffect(() => {
    console.log(enableDrag);
  }, [enableDrag]);

  return (
    <div
      className="main-container"
      id="outer-container"
    >
      <Menu
        pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
        onStateChange={ setMenuOpen }
        pushRotate
      >
        <div className="menu-items">
          <div className="menu-item">
            <h3 className="menu-item-title">
              Enable drag
            </h3>
            <label>
              <Switch onChange={() => changeEnableDrag()} checked={enableDrag} />
            </label>
          </div>  
          <div className="menu-item">
            <h3 className="menu-item-title">
              Pull in
            </h3>
            <label>
              <Switch onChange={() => changePullIn()} checked={pullIn} />
            </label>
          </div>
          <div className="menu-item">
            <h3 className="menu-item-title">
              Zoom
            </h3>
            <label>
              <Slider
                id="1"
                className="slider-horizontal"
                value={zoomDepth}
                orientation="horizontal"
                onChange={setZoomDepth}
                min={0}
                max={10000}
              />
            </label>
          </div>
          <div className="menu-item">
            <h3 className="menu-item-title">
              Node distance
            </h3>
            <label>
              <Slider
                id="2"
                className="slider-horizontal"
                value={nodeDistance}
                orientation="horizontal"
                onChange={setNodeDistance}
                min={0}
                max={10000}
              />
            </label>
          </div>


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
