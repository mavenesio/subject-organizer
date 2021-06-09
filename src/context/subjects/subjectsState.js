import React, {useReducer} from 'react';

import {
  SET_SUBJECTS,
} from '../../types';
import SubjectsReducer from './subjectsReducer';
import SubjectsContext from './subjectsContext';

const SubjectsState = ({children}) => {

    const initialState = {
        subjects: [],
        hasSubjects: false,
    };

    const [state, dispatch] = useReducer(SubjectsReducer, initialState);

    const setSubjects = subjects => {
        dispatch({
            type:SET_SUBJECTS,
            payload: subjects
        })
    };
    return (
        <SubjectsContext.Provider
            value={{
              subjects: state.subjects,
              hasSubjects: state.hasSubjects,
              setSubjects,
            }}
        >
            {children}
        </SubjectsContext.Provider>

    )


}
export default SubjectsState;