//import React from "react";
//import Thermometer from "react-thermometer-component";

import Thermometer from 'react-thermometer-ecotropy'

// ---------------------------- STYLE ----------------------------
const chartStyle = {
  // height: 280,
  resize: "80%",
  overflow: false,
  left: "0px",
  top: "5px",
  //innerHeight: "80%",
  //innerWidth: "80%",
  position: "flex",
  height: "70%",
  //width: "5%",
  fontSize: "12px"
};

const titulo = {
  fontSize: "150%",
  color: "#000",
  marginTop: "0px",
};

const Thermometer2 = ({ id = 1, value = 20, title = "Termometro 2" }) => {
  return (
    <div style={chartStyle}>
      <center>
        <b>
          <p style={titulo}> {title}</p>
        </b>
        <Thermometer
          theme="light"
          value={value}
          max="50"
          steps="3"
          format="°C"
          size="large"
          tooltipValue="true"
        />
      </center>

    </div>
  );
};

export default Thermometer2;