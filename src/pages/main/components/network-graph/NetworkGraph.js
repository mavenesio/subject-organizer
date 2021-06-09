import React, { useEffect, useState, useContext}from 'react';
import Graph from 'react-graph-network';
import Node from './node';
import Line from './line';
import SubjectsContext from '../../../../context/subjects/subjectsContext';
import { getNodes, getLinks } from './networkUtils';

const NetworkGraph = () => {
  const [data, setData] = useState(undefined);
  const { subjects } = useContext(SubjectsContext);
  useEffect(() => {
    setData({
      nodes: getNodes(subjects),
      links: getLinks(subjects),
    })
  }, [subjects]);
  
  return (
    <>
      {
        data ? (
          <Graph
            data={data}
            id="graph"
            NodeComponent={Node}
            LineComponent={Line}
            nodeDistance={800}
            zoomDepth={10000}
            enableDrag={true}
            pullIn={false}
          />

        ) : (null)
      }
    </>
  )
}
export default NetworkGraph;