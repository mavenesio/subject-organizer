import React, {useReducer} from 'react';

import {
  SET_SUBJECTS,
  SET_SELECTED_SUBJECTS,
} from '../../types';
import SubjectsReducer from './subjectsReducer';
import SubjectsContext from './subjectsContext';

const SubjectsState = ({children}) => {

    const initialState = {
        subjects: [],
        hasSubjects: false,
        selectedSubject: null,
        progress: '-',
        average: '-',
    };

    const [state, dispatch] = useReducer(SubjectsReducer, initialState);

    const setSubjects = subjects => {
      dispatch({
          type:SET_SUBJECTS,
          payload: subjects
      })
    };

    const setSelectedSubject = subject => {
      dispatch({
          type:SET_SELECTED_SUBJECTS,
          payload: subject
      })
    };
    
    return (
        <SubjectsContext.Provider
            value={{
              subjects: state.subjects,
              hasSubjects: state.hasSubjects,
              progress: state.progress,
              average: state.average,
              selectedSubject: state.selectedSubject,
              setSubjects,
              setSelectedSubject,
            }}
        >
            {children}
        </SubjectsContext.Provider>

    )


}
export default SubjectsState;