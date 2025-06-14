//import React from "react";
import Thermometer from "react-thermometer-component";
//import { CanvasRenderer } from "echarts/renderers";

import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
import  GetUltimoRegistro  from "../../helpers/GetUltimoRegistro.helpers";


// ---------------------------- STYLE ----------------------------
const chartStyle = {
  // height: 280,
  resize: "80%",
  overflow: false,
  left: "0px",
  top: "-25px",
  //innerHeight: "80%",
  //innerWidth: "80%",
  position: "flex",
  height: "70%",
  //width: "5%",
  fontSize: "14px"
};

const titulo = {
  fontSize: "150%",
  color: "#000",
  marginTop: "0px",
};

let valorX = 0;

const Thermometer1 = ({ puertoES=1}) => {

  let dataUltimoReg =JSON.stringify(GetUltimoRegistro(puertoES));

  if (dataUltimoReg.length > 2){
    
    valorX=JSON.parse(dataUltimoReg);
    console.log('---------------------------------------');
    // eslint-disable-next-line
    console.log("---Gauge dataRegPuertoEs---"+","+ puertoES+","+valorX.Valor);
    console.log(dataUltimoReg);
    console.log('---------------------------------------');
  }
  const dataPuertoES = GetPuertoEs(puertoES);


  return (
    <div style={chartStyle}>
    <center>
      <b>
        <p style={titulo}>{dataPuertoES.Nombre}</p>
      </b>
      <Thermometer
        theme="light"
        value={Number(valorX.Valor)}
        max={Number(dataPuertoES.EscalaEjeMax)}
        steps="3"
        format= {String(dataPuertoES.Unidad)}
        size="normal"  //normal small large
        tooltipValue="true"
      />
    </center>

  </div>
  );
};
export default Thermometer1;