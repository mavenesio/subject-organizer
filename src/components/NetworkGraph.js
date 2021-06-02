import React from 'react';
import Graph from 'react-graph-network';
import Node from './node';
import Line from './line';
import { getNodeColor } from './utils';

const NetworkGraph = ({ subjects }) => {

  const nodes = subjects.map(subject => ({
      id: subject.code,
      name: subject.name,
      pass: subject.grade >= 4,
      color: getNodeColor(subjects, subject)
    })
  );

  const links = subjects.reduce((links, subject) => {
    const newLinks = subject.correlatives.map(correlative => ({
        source: subject.code,
        target: correlative,
    }))
    return [...links, ...newLinks];
  },[])

  const data = {
    nodes,
    links,
  };
  
  return (
    <Graph
      data={data}
      id="graph"
      NodeComponent={Node}
      LineComponent={(props) => <Line {...props} subjects={subjects}/>}
      nodeDistance={300}
      zoomDepth={10}
      enableDrag={true}
      pullIn={true}
    />
  )
}
export default NetworkGraph;