import ReactECharts from "echarts-for-react";

import moment from "moment";
import GetPuertoEs from "../../../helpers/GetPuertoES.helpers";
import GetRegistros from "../../../helpers/GetRegistros.helpers";


const { DateTime } = require("luxon");
const Thermometer4 = ({ puertoES = 1 }) => {
    const dataRegPuertoEs = GetRegistros(
      puertoES,
      Number(moment().subtract(2, "days").unix()),
      Number(moment().unix())
    );

    let ejeX = [];
    dataRegPuertoEs.forEach((item) =>
      ejeX.push(
        DateTime.fromSeconds(Number(item.FechaHoraRegistro)).toFormat(
          "dd-MM-yy HH:mm:ss"
        )
      )
    );
    let valorX = [];
    dataRegPuertoEs.forEach((item) => valorX.push(Number([item.Valor])));

  // let ultimaPosX = valorX.length - 1;  // busco el ultimo valor registrado
        //value: Number(valorX[ultimaPosX]),

    const dataPuertoES = GetPuertoEs(puertoES);
    console.log(" xxxxxx Datos Puerto ES xxxxx");
    console.log(dataPuertoES);
      // -------------------- Style --------------------
    const chartStyle = {
      // height: 280,
      resize: "95%",
      overflow: true,
      position: "relative",
      height: "90%",
      width: "95%",
    
    };
      // ------------------ OPTIONS ---------------------
     const options = {
       
      };

//-------------------------------------------------------------------------
  return <ReactECharts option={options} style={chartStyle} >
    
    </ReactECharts>;
};

export default Thermometer4;
