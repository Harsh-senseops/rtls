import React, { useState } from "react";
import NavBar from "../../../components/nav-bar";
import "./index.css";
import CheckIcon from "../../../assets/icons/check-icon";
import Footer from "../../../components/footer";
import { useSubscription } from "urql";
import { GET_LATEST_VIN_TAG_ID } from "../../../api/queries";
import ErrorIcon from "../../../assets/icons/error-icon";
import WaitingIcon from "../../../assets/scanner.gif";
// import WaitingIcon from "../../../assets/icons/waiting";
let TAG_ERROR_CODE = {
  message: "Different TAG ID Are Scanning Without Mapping VIN Number",
  code: "222",
};
let VIN_ERROR_CODE = {
  message: "Different VIN ID Are Scanning Without Mapping TAG",
  code: "333",
};
let SUCCESS_CODE = {
  message: "Successfully Mapped VIN & TAG",
  code: "999",
};
let EMPTY_CODE = {
  message: "Waiting for scanning...",
  code: "0",
};
export default function AttachDetach() {
  let [latestVINTag, resLatesVinTag] = useSubscription({
    query: GET_LATEST_VIN_TAG_ID,
  });
  let [message, setMessage] = useState(null);
  let [tagVIn, setTagVin] = React.useState(null);
  React.useEffect(() => {
    if (latestVINTag.data) {
      setTimeout(() => {}, 5000);
      setTagVin({
        tagid: latestVINTag.data?.allAttachDetachTemps?.nodes[0].tagId,
        vinId: latestVINTag.data?.allAttachDetachTemps?.nodes[0].vinId,
        message: latestVINTag.data?.allAttachDetachTemps?.nodes[0].errorcode,
      });
      if (
        latestVINTag.data?.allAttachDetachTemps?.nodes[0].errorcode ===
        SUCCESS_CODE.code
      ) {
        setMessage({
          message: SUCCESS_CODE.message,
          isError: false,
          icon: <CheckIcon size="6em" color="#73E93B8C" />,
        });
      }
      if (
        latestVINTag.data?.allAttachDetachTemps?.nodes[0].errorcode ===
        TAG_ERROR_CODE.code
      ) {
        setMessage({
          message: TAG_ERROR_CODE.message,
          isError: true,
          icon: <ErrorIcon size="6em" color="#FF6969" />,
        });
      }
      if (
        latestVINTag.data?.allAttachDetachTemps?.nodes[0].errorcode ===
        VIN_ERROR_CODE.code
      ) {
        setMessage({
          message: VIN_ERROR_CODE.message,
          isError: true,
          icon: <ErrorIcon size="6em" color="#FF6969" />,
        });
      }
      if (
        latestVINTag.data?.allAttachDetachTemps?.nodes[0].errorcode ===
        EMPTY_CODE.code
      ) {
        setMessage({
          message: EMPTY_CODE.message,
          isError: true,
          icon:<div class="loader">
          <span></span>
      </div>,
        });
      }
    }
  }, [latestVINTag.data]);
  return (
    <>
      <NavBar />
      <main>
        <div className="ad-header">
          <h1
          className="bg-theme"
            style={{
              width: "100%",
              textAlign: "center",
              margin: "0px",
              marginBottom: "1em",
              // background: "#2a9d8f",
              borderRadius: "4px",
            }}
          >
            TAG And VIN Live Mapping Screen
          </h1>
        </div>
        <div className="ad-id-container">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              height: "40vh",
            }}
          >
            <div
              className="ad-id"
              id="tag"
              style={{
                background: tagVIn
                  ? tagVIn?.tagid
                    ? "#4d8f31"
                    : "#495057"
                  : "#4d8f31",
              }}
            >
              <span style={{ fontSize: "4rem" }}>TAG ID</span>
              <div
                style={{ width: "100%", borderBottom: "2px solid #ffffffa6" }}
              ></div>
              <div className="ad-a-id">
                <span>{tagVIn ? tagVIn?.tagid : ""}</span>
              </div>
            </div>
            <div
              className="ad-id"
              id="vin"
              style={{
                background: tagVIn
                  ? tagVIn?.vinId
                    ? "#4d8f31"
                    : "#495057"
                  : "#4d8f31",
              }}
            >
              <span style={{ fontSize: "4rem" }}>VIN ID</span>
              <div
                style={{ width: "100%", borderBottom: "2px solid #ffffffa6" }}
              ></div>
              <div className="ad-a-id">
                <span>{tagVIn ? tagVIn?.vinId : ""}</span>
              </div>
            </div>
          </div>
          <div className="ad-msg-container">
            {message ? message.icon : ""}
            <div className="ad-msg">
              {message && (
                <h1 style={{ textAlign: "center" }}>{message?.message}</h1>
              )}
              <h3></h3>
            </div>
          </div>
        </div>
        <div className="alert-modal"></div>
        <Footer />
      </main>
    </>
  );
}
