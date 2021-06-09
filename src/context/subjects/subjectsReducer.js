import {
  SET_SUBJECTS,
} from '../../types';
import { sum } from 'ramda';


//Metrics
const isSubjectApproved = (subject) => (subject.grade || 0) >= 4

const getProgress = (subjects) => {
  console.log('aaaa');
  const total = sum(subjects.map(subject => subject.credits));
  const completed = sum(subjects.filter(subject => isSubjectApproved(subject)).map(subject => subject.credits));
  return (Math.round((completed/total) * 100))
}

const getAverage = (subjects) => {
  console.log('bbbbb');
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
    default:
        break;
  }
}