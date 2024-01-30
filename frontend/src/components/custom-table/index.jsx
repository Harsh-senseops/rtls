import * as React from "react";
import Table from "@mui/joy/Table";
import { identifyCapsAndGiveSpace } from "../../utils/utility";
import RightArrow from "../../assets/icons/rigth-arrow";
import LeftArrow from "../../assets/icons/left-arrow";
import "./index.css";

export default function CustomTable({ vdemData,onClick }) {
  const [data, setData] = React.useState(null);
  const [from, setFrom] = React.useState(0);
  const [to, setTo] = React.useState(10);

  React.useEffect(() => {
    if (vdemData) {
      const tempArray = [...vdemData];
      const sliced = tempArray.slice(from, to);
      setData(sliced);
    }
  }, [vdemData, from, to]);

  const goNext = () => {
    if (to < vdemData.length) {
      setFrom((prev) => prev + 10);
      setTo((prev) => prev + 10);
    }
  };

  const goPrev = () => {
    if (from > 0) {
      setFrom((prev) => prev - 10);
      setTo((prev) => prev - 10);
    }
  };

  return (
    <div className="custom-table-container" >
      <Table borderAxis="both" variant="outlined">
        <thead>
          <tr >
            {data && data[0]?.keys.map((headers) => (
              <th
                style={{
                  whiteSpace: "normal",
                 fontSize:"1.2rem",
                 fontWeight:"bold",
                 background:"#ffeedd63",
                 color:"whitesmoke",
                 backdropFilter:"blur(100px)",
            
                }}
                key={headers}
              >
                {identifyCapsAndGiveSpace(headers)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((val, index) => (
              <tr key={index}>
                {val.values.map((defectList, defectIndex) => {
                  if (val.keys[defectIndex] === "photo") {
                    return (
                      <td key={defectIndex} style={{ color: "white", fontSize: "1.3rem",}}>
                        <button>Open Image</button>
                      </td>
                    );
                  }
                  return (
                    <td key={defectIndex} style={{ color: "white", fontSize: "0.9rem", }}>
                      {defectList.toUpperCase()}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </Table>
      <br />
      <div className="table-footer">
        <div className={`arrow-icons ${from === 0 ? 'disabled' : ''}`} onClick={goPrev}>
          <LeftArrow size="1em" color="white" />
        </div>
        <div className={`arrow-icons ${to >= vdemData.length ? 'disabled' : ''}`} onClick={goNext}>
          <RightArrow size="1em" color="white" />
        </div>
        <div className={`arrow-icons`} onClick={onClick}>
          <div>Close</div>
        </div>
       {/* <div><h1>VIN MBJTYKM1SPJ117794</h1></div> */}
      </div>
    </div>
  );
}
