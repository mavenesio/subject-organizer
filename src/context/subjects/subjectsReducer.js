import {
  SET_SUBJECTS,
} from '../../types';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  console.log('REDUCER', action.payload)
  switch (action.type) {
    case SET_SUBJECTS: {
        return {
            ...state,
            subjects: action.payload, 
        }
    }
    default:
        break;
  }
}