import React, { useState } from 'react';
import './styles.css';

const fontSize = 14;
const radius = 25;

const Node = (props) => {
  const [clicked, setSlicked] = useState(false);
  const { node } = props;

    const sizes = {
        radius: radius,
        textSize: fontSize,
        textX: radius * 1.5,
        textY: radius / 2,
    };

    return (
      <>
        <g 
          className="node-pointer"
          >
          <circle
            fill={node.color}
            stroke="black"
            strokeWidth={2}
            r={sizes.radius}
            onClick={()=> setSlicked(!clicked)} 
          />
          <text
            fontSize="8"
            textAnchor="middle"
            stroke="black"
            onClick={()=> setSlicked(!clicked)} 
          >
            {node.id}
          </text>
        </g>  
        {
          (clicked) ? (
            <g>
              <text
                className="node-description"
                x={sizes.radius + 7}
                y={sizes.radius / 2}
              >
                {node.name}
              </text>
            </g>
          ) : (null)

        }
      </>
    );
};

export default Node;
