import { sum } from 'ramda';

const APPROVED_SUBJECT_COLOR = 'green';
const AVAILABLE_SUBJECT_COLOR = 'orange';
const NOT_AVAILABLE_SUBJECT_COLOR = 'red';

const getSubjectByCode = (subjects, code) => subjects.find(subject=> ((subject.code === (code.id || code))))
const isSubjectApproved = (subject) => (subject.grade || 0) >= 4

const getNodeColor = (subjects, subject) => { 
  //If subject is approved, then green
  if(isSubjectApproved(subject)) return APPROVED_SUBJECT_COLOR;

  //If subject not approved and have no corrrelatives, then orange
  if(subject?.correlatives.lenght === 0) return AVAILABLE_SUBJECT_COLOR

  //If subject not approved but have all correlatives approved, then orange
  if (subject.correlatives.every( correlative => subjects.find(subject => subject.code === correlative).grade >=4)) {
    return AVAILABLE_SUBJECT_COLOR;
  }
  
  return NOT_AVAILABLE_SUBJECT_COLOR;
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

export {
  getLineColor,
  getLinks,
  getNodes,
}