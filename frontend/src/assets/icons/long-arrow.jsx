import React from "react";

export default function LongArrow() {
    return (
        <svg
        id="arrowSvg"
        width="110"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="10"
          x2="100"
          y2="10"
          stroke="#9d0208"
          stroke-width="2"
        />
        <polygon points="100,5 105,10 100,15" fill="#9d0208" />
      </svg>
    )
}