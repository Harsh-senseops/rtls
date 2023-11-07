import React from "react";

export default function PlantIcon({color,size}) {
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        aria-hidden="true"
        focusable="false"
        data-prefix="fad"
        data-icon="angle-double-right"
        role="img"
        className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
        viewBox="0 0 576 512"
        fill={color || "inherit"}
      >
        <path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z" />
      </svg>
    )
}