
const APPROVED_SUBJECT_COLOR = 'green';
const AVAILABLE_SUBJECT_COLOR = 'orange';
const NOT_AVAILABLE_SUBJECT_COLOR = 'red';


const getNodeColor = (subjects, subject) => {
  if(subject.grade >= 4){
    return APPROVED_SUBJECT_COLOR
  }
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
  const passSource = subjects.find(subject=> ((subject.code === source.id) || (subject.code === source))).grade >= 4;
  const targetSource = subjects.find(subject=> ((subject.code === target.id) || subject.code === target)).grade >= 4;
  if (passSource && targetSource ) {
    return APPROVED_SUBJECT_COLOR;
  };
  if ((passSource ^ targetSource)) {
    return AVAILABLE_SUBJECT_COLOR;
  };
  return NOT_AVAILABLE_SUBJECT_COLOR;
}

export {
  getNodeColor,
  getLineColor,
}