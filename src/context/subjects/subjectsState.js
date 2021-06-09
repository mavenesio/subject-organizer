import React, {useReducer} from 'react';

import {
  SET_SUBJECTS,
  SET_NODE_DISTANCE,
  SET_ZOOM_DEPTH,
  CHANGE_ENABLE_DRAG,
  CHANGE_PULL_IN,
} from '../../types';
import SubjectsReducer from './subjectsReducer';
import SubjectsContext from './subjectsContext';

const SubjectsState = ({children}) => {

    const initialState = {
        subjects: [],
        hasSubjects: false,
        progress: '-',
        average: '-',
        nodeDistance: 800,
        zoomDepth: 10000,
        enableDrag: true,
        pullIn: false,
    };

    const [state, dispatch] = useReducer(SubjectsReducer, initialState);

    const setSubjects = subjects => {
      dispatch({
          type:SET_SUBJECTS,
          payload: subjects
      })
    };
    const setNodeDistance = nodeDistance => {
        dispatch({
            type:SET_NODE_DISTANCE,
            payload: nodeDistance
        })
    };
    const setZoomDepth = zoomDepth => {
        dispatch({
            type:SET_ZOOM_DEPTH,
            payload: zoomDepth
        })
    };
    const changeEnableDrag = () => {
        dispatch({
            type:CHANGE_ENABLE_DRAG,
            payload: !state.enableDrag
        })
    };
    const changePullIn = () => {
        dispatch({
            type:CHANGE_PULL_IN,
        })
    };
    return (
        <SubjectsContext.Provider
            value={{
              subjects: state.subjects,
              hasSubjects: state.hasSubjects,
              progress: state.progress,
              average: state.average,
              nodeDistance: state.nodeDistance,
              zoomDepth: state.zoomDepth,
              enableDrag: state.enableDrag,
              pullIn: state.pullIn,
              setSubjects,
              setNodeDistance,
              setZoomDepth,
              changeEnableDrag,
              changePullIn,
            }}
        >
            {children}
        </SubjectsContext.Provider>

    )


}
export default SubjectsState;