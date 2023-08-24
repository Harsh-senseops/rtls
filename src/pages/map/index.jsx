import { useEffect, useState } from "react";
import React from "react";
import { XYPlot, XAxis, YAxis, CustomSVGSeries } from "react-vis";
import backgroundImage from "../../assets/image.png";
import "./index.css"

const xTickValues = Array.from({ length: 10 }, (_, index) => index + 1);
const yTickValues = Array.from({ length: 10 }, (_, index) => index + 1);

export default function Maps({ imageArray }) {
  const initialData = Array.from({ length: 10 }, () => ({ x: 0, y: 0 }));
  const [data, setData] = useState(initialData);
  const xyPlotRef = React.useRef(null);
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (xyPlotRef.current) {
        const parentWidth = xyPlotRef.current.offsetWidth;
        const calculatedHeight = Math.floor((parentWidth * 450) / 1000); // Maintain aspect ratio
        setDimensions({ width: parentWidth, height: calculatedHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map((point, i) => ({
        x: generateRandomNumber(),
        y: generateRandomNumber(),
        customComponent: (row, positionInPixels) => {
          return <image width={20} height={20} href={imageArray[i]} />;
        },
      }));
      setData(newData);
    }, 2000);
    // console.log(data)
    return () => clearInterval(interval);
  }, [data]);
  return (
      <div ref={xyPlotRef} className="map-container">
        <img
          src={backgroundImage}
          alt="image"
          style={{
            position: "absolute",
            left: "10px",
            width: dimensions.width-20,
            height: dimensions.height,
            borderRadius:"10px"
          }}
        />
        <XYPlot
          width={dimensions.width-40}
          height={dimensions.height}
        >
          <XAxis hideTicks tickValues={xTickValues} />
          <YAxis hideTicks tickValues={yTickValues} />
          <CustomSVGSeries
            data={data}
          />
        </XYPlot>
      </div>
  );
}
