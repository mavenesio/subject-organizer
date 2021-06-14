import React, { useEffect, useState, useContext}from 'react';
import SubjectsContext from '../../../../context/subjects/subjectsContext';
import { getData, getOptions } from './networkUtils';
import Graph from "react-vis-network-graph";


const NetworkGraph = () => {
  const [data, setData] = useState(undefined);
  const { subjects } = useContext(SubjectsContext);
  useEffect(() => {
    setData(getData(subjects))
  }, [subjects]);

  const events = {
    select: ({ nodes, edges }) => {
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
      alert("Selected node: " + nodes);
    },
  }
  
  return (
    <>
      {
        data ? (
          <Graph
            graph={data}
            options={getOptions()}
            events={events}
            style={{ height: "100%", width: "100%" }} />
        ) : (null)
      }
    </>
  )
}

export default NetworkGraph;