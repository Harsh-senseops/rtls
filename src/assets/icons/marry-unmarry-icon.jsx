import React from "react";

export default function MarryUnMarryIcon({size,color}){
    return(
        <svg
        viewBox="0 0 36 36"
        version="1.1"
        height={size}
        fill={color || "inherit"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>disconnect-solid</title>
        <path
          d="M12,6a6.21,6.21,0,0,0-6.21,5H2v2H5.83A6.23,6.23,0,0,0,12,18H17V6Z"
          class="clr-i-solid clr-i-solid-path-1"
        ></path>
        <path
          d="M33.79,23H30.14a6.25,6.25,0,0,0-6.21-5H19v2H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v4H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v2h4.94a6.23,6.23,0,0,0,6.22-5h3.64Z"
          class="clr-i-solid clr-i-solid-path-2"
        ></path>
        <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
      </svg>
    )
}