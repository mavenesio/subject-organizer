import React, { useEffect, useState }from 'react';
import Graph from 'react-graph-network';
import Node from './node';
import Line from './line';
import { getNodeColor } from './utils';




const NetworkGraph = ({ subjects }) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
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

    setData({
      nodes,
      links,
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
            LineComponent={(props) => <Line {...props} subjects={subjects}/>}
            nodeDistance={300}
            zoomDepth={10}
            enableDrag={true}
            pullIn={true}
          />

        ) : (null)
      }
    </>
  )
}
export default NetworkGraph;