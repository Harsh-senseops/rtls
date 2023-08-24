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
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;
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
      <div className="map-container">
        <img
          src={backgroundImage}
          alt="image"
          style={{
            position: "absolute",
            left: "10px",
            width: "98%",
            height: "94%",
            borderRadius:"10px"
          }}
        />
        <XYPlot
          style={{ backgroundImage: backgroundImage }}
          width={1000}
          height={450}
          stroke="red"
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
