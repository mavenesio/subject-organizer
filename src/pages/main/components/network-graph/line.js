import React, { useMemo, useContext } from 'react';
import { getLineColor } from './networkUtils';
import SubjectsContext from '../../../../context/subjects/subjectsContext';

const Line = ({ link, ...restProps }) => {
  const { subjects } = useContext(SubjectsContext);

  const memoizedValue = useMemo(() => getLineColor(subjects, link), []);
  return (
    <line
      {...restProps}
      strokeWidth={2}
      stroke={memoizedValue}
    />
  )
}
export default Line;