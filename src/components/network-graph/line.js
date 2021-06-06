import React, { useCallback } from 'react';
import { getLineColor } from './networkUtils';

const Line = ({ link, subjects, ...restProps }) => {
  const memoizedValue = useCallback(() => getLineColor(subjects, link), [subjects, link]);
  return (
    <line
      {...restProps}
      strokeWidth={2}
      stroke={memoizedValue}
    />
  )
}
export default Line;