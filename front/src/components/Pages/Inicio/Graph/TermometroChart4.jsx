import ReactECharts from "echarts-for-react";

import moment from "moment";
//import { graphic } from 'echarts'
import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
import GetRegistros from "../../helpers/GetRegistros.helpers";


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
      position: "flex",
      height: "100%",
      // innerWidth:"80%",
      // width: "90%",
    
    };
      // ------------------ OPTIONS ---------------------
     const options = {
        xAxis: {
          data: ['A']
        },
        yAxis: {},
        series: [
          {
            data: [10],
            type: 'bar',
            stack: 'x',
            color:"LightGreen	"
          },
          {
            data: [12],
            type: 'bar',
            stack: 'x',
            color:"green"
          },
          {
            data: [15],
            type: 'bar',
            stack: 'x',
            color:"yellow"
          },
          {
            data: [17],
            type: 'bar',
            stack: 'x',
            color:"orange"
          },
          {
            data: [21],
            type: 'bar',
            stack: 'x',
            color:"OrangeRed"
          },
          {
            data: [25],
            type: 'bar',
            stack: 'x',
            color:"red"
          }

        ]
      };

//-------------------------------------------------------------------------
  return <ReactECharts option={options} style={chartStyle} >
    
    </ReactECharts>;
};

export default Thermometer4;
