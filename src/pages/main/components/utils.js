
import { sum } from 'ramda';

const isSubjectApproved = (subject) => (subject.grade || 0) >= 4

const getProgress = (subjects) => {
  const total = sum(subjects.map(subject => subject.credits));
  const completed = sum(subjects.filter(subject => isSubjectApproved(subject)).map(subject => subject.credits));
  return (Math.round((completed/total) * 100))
}

const getAverage = (subjects) => {
  const aprobadas = subjects.filter(subject => isSubjectApproved(subject)).map(subject => subject.grade);
  return (Math.round((sum(aprobadas)/aprobadas.length)))
}


export {
  getProgress,
  getAverage,
}