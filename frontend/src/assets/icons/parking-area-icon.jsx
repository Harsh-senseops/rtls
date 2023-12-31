import React from "react";

export default function ParkingAreaIcon({color,size}) {
    return(
        <svg
        class="svg-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        height={size}
      >
        <path
          d="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96zM544 640h-96v96c0 17.6-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32V288c0-17.6 14.4-32 32-32h192c105.8 0 192 86.2 192 192s-86.2 192-192 192z m0-256h-96v128h96c35.2 0 64-28.8 64-64s-28.8-64-64-64z"
        />
      </svg>
    )
}