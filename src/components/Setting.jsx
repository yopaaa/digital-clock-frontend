import React, { useState, useEffect } from "react";
import axios from "axios";

const Setting = () => {
  const hostName = process.env.REACT_APP_HOST_NAME
  const [SSID, SetSSID] = useState("");
  const [PASSWORD, SetPASSWORD] = useState("");

  function ChangeCredentials(event) {
    event.preventDefault();
    const path = `${hostName}wifi/set?ssid=${SSID}&password=${PASSWORD}`;
    axios
      .post(path)
      .then((val) => {
        console.log(val);
      })
      .catch((er) => {
        console.log(er);
      });
  }
  useEffect(() => {
    document.title = "Setting";
  }, []);
  return (
    <div className="Div-container">
      <div className="Wifi-container">
        <form onSubmit={ChangeCredentials} method="post" className="formm">
          <h3>Change wifi Credentials</h3>
          <input
          className="inputt"
            type="text"
            placeholder="SSID"
            onChange={(ev) => SetSSID(ev.target.value)}
          />
          <input
          className="inputt"
            type="text"
            placeholder="PASSWORD"
            onChange={(ev) => SetPASSWORD(ev.target.value)}
          />

          <div className="Wifi-container-button">
            <button type="submit" style={{ backgroundColor: "#5177ff" }}>
              Change
            </button>
            <button type="reset" style={{ backgroundColor: "#ff5151" }}>
              Reset
            </button>
          </div>
        </form>
      </div>

      <br />
      <br />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post(`${hostName}led2`)
            .then((val) => {
              console.log(val);
            })
            .catch((er) => {
              console.log(er);
            });
        }}
        method="post"
      >
        <button className="button">Led 2</button>
      </form>

      <br />
      <br />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post(`${hostName}resetall`)
            .then((val) => {
              console.log(val);
            })
            .catch((er) => {
              console.log(er);
            });
        }}
        method="post"
      >
        <button className="button">Reset State</button>
      </form>

      <br />
      <br />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post(`${hostName}restart`)
            .then((val) => {
              console.log(val);
            })
            .catch((er) => {
              console.log(er);
            });
        }}
        method="post"
      >
        <button className="button" type="submit">Restart</button>
      </form>
    </div>
  );
};

export default Setting;
