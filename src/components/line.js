import React, { useMemo } from 'react';
import { getLineColor } from './utils';

const Line = ({ link, subjects, ...restProps }) => {
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