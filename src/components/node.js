import React from 'react';

const fontSize = 14;
const radius = 15;

const Node = ({ node }) => {

    const sizes = {
        radius: radius,
        textSize: fontSize,
        textX: radius * 1.5,
        textY: radius / 2,
    };

    return (
      <>
        <g>
          <circle fill={node.color} stroke="black" r={sizes.radius} />
          <text fontSize="8" textAnchor="middle" stroke="black">
            {node.id}
          </text>
        </g>  
        <g>
          <text x={sizes.radius + 7} y={sizes.radius / 2}>
            {node.name}
          </text>
        </g>
      </>
    );
};

export default Node;
