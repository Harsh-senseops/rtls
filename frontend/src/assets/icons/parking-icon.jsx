import React from "react";

export default function ParkingIcon({ size }) {
  return (
    <svg
      fill="#ffffff"
      viewBox="0 0 24 24"
      id="parking-circle"
      data-name="Flat Color"
      class="icon flat-color"
      stroke="#ffffff"
      stroke-width="0.72"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle
          id="primary"
          cx="12"
          cy="12"
          r="10"
          style="fill: #2ca9bc;"
        ></circle>
        <path
          id="secondary"
          d="M10,17a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h3.5a3.5,3.5,0,0,1,0,7H11v2A1,1,0,0,1,10,17Zm1-5h2.5a1.5,1.5,0,0,0,0-3H11Z"
          style="fill: #2ca9bc;"
        ></path>
      </g>
    </svg>
  );
}
