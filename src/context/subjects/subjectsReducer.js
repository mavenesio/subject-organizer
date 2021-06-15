import {
  SET_SUBJECTS,
  SET_SELECTED_SUBJECTS,
} from '../../types';
import { sum } from 'ramda';


//Metrics
const isSubjectApproved = (subject) => (subject.grade || 0) >= 4

const getProgress = (subjects) => {
  const total = sum(subjects.map(subject => subject.credits));
  const completed = sum(subjects.filter(subject => isSubjectApproved(subject)).map(subject => subject.credits));
  return (Math.round((completed/total) * 100))
}

const getAverage = (subjects) => {
  if (subjects.length === 0) return '-'
  const aprobadas = subjects.filter(subject => isSubjectApproved(subject)).map(subject => subject.grade);
  return (Math.round((sum(aprobadas)/aprobadas.length)))
}

// eslint-disable-next-line import/no-anonymous-default-export 
export default (state, action) => {
  switch (action.type) {
    case SET_SUBJECTS: {
      return {
        ...state,
        subjects: action.payload,
        hasSubjects: true,
        progress: getProgress(action.payload),
        average: getAverage(action.payload),
      }
    }
    case SET_SELECTED_SUBJECTS: {
      return {
        ...state,
        selectedSubject: action.payload,
      }
    }
    default:
        break;
  }
}
