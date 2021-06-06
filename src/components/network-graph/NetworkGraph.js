import React, { useEffect, useState }from 'react';
import Graph from 'react-graph-network';
import Node from './node';
import Line from './line';
import { getNodes, getLinks } from './networkUtils';

const NetworkGraph = ({ subjects }) => {
  const [data, setData] = useState(undefined);
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