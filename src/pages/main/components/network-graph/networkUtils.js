import { sum } from 'ramda';

const APPROVED_SUBJECT_COLOR = 'green';
const AVAILABLE_SUBJECT_COLOR = 'orange';
const NOT_AVAILABLE_SUBJECT_COLOR = 'red';

const getSubjectByCode = (subjects, code) => subjects.find(subject=> ((subject.code === (code.id || code))))
const isSubjectApproved = (subject) => (subject.grade || 0) >= 4

const getNodeColor = (subjects, subject) => {
  
  if(isSubjectApproved(subject)) return APPROVED_SUBJECT_COLOR;

  if(subject?.correlatives.lenght === 0){
    return AVAILABLE_SUBJECT_COLOR
  }

  const correlativasAprobadas = subject.correlatives.every(
    correlative => subjects.find(
      crudSubjet => crudSubjet.code === correlative).grade >=4
  )
  return correlativasAprobadas  ? AVAILABLE_SUBJECT_COLOR : NOT_AVAILABLE_SUBJECT_COLOR
}

const getLineColor = (subjects, { source, target }) => {
  const passSource = isSubjectApproved(getSubjectByCode(subjects, source))
  const passtarget = isSubjectApproved(getSubjectByCode(subjects, target));

  if (passSource && passtarget ) return APPROVED_SUBJECT_COLOR;
  if ((passSource !== passtarget)) return AVAILABLE_SUBJECT_COLOR;
  return NOT_AVAILABLE_SUBJECT_COLOR;
}


const getNodes = (subjects) => (
  subjects.map(subject => ({
      id: subject.code,
      name: subject.name,
      color: getNodeColor(subjects, subject),
      pass: isSubjectApproved(subject),
    })
  )
)

const getLinks = (subjects) => (
  subjects.reduce((links, subject) => {
    const newLinks = subject.correlatives.map(correlative => ({
        source: subject.code,
        target: correlative,
    }))
    return [...links, ...newLinks];
  },[])
)

//Metrics
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
  getLineColor,
  getProgress,
  getAverage,
  getLinks,
  getNodes,
}