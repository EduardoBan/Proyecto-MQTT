import "../Grid/styles.css";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { CanvasRenderer } from "echarts/renderers";
import { GaugeChart } from "echarts/charts";
import * as echarts from "echarts/core";

import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
import  GetUltimoRegistro  from "../../helpers/GetUltimoRegistro.helpers";

const { DateTime } = require("luxon");

echarts.use([GaugeChart, CanvasRenderer]);
let valorX = 0;

const GaugueEchart1 = ({ puertoES = 5 }) => {

  let dataUltimoReg =JSON.stringify(GetUltimoRegistro(puertoES));

  if (dataUltimoReg.length > 2){
    
    valorX=JSON.parse(dataUltimoReg);
    // console.log('---------------------------------------');
    // console.log(`---Gauge dataRegPuertoEs---, ${puertoES}, ${valorX.Valor}`);
    // console.log(dataUltimoReg);
    // console.log('---------------------------------------');
  }



  //let ejeX = [];
  // dataRegPuertoEs.forEach((item) =>
  //   ejeX.push([
  //     moment.parseZone(item.FechaHoraRegistro).format("DD-MM-YY HH:mm"),
  //   ])
  // );

  // let valorX = [];
  // dataRegPuertoEs.forEach((item) => valorX.push(Number([item.Valor])));


  // let ultimaPosX = valorX.length - 1;

  const dataPuertoES = GetPuertoEs(puertoES);

  // let valor0 = String(dataRegPuertoEs['Valor']);
 
  // console.log('------------------------');
  // console.log("--Gaugue dataPuertoES--");
  // console.log(dataPuertoES);
  // console.log('------------------------');
  // if ((dataPuertoES.Valor != null) && (dataPuertoES != null)) {
  // console.log("--Valor dataRegPuertoEs--");
  // console.log(dataPuertoES);
  // }
  // ---------------------------- STYLE ----------------------------
  const chartStyle = {
    resize: "80%",
    overflow: false,
    left: "center",
    innerHeight: "90%",
    innerWidth: "90%",
    position: "static",
    height: "90%",
    width: "90%",

  };
  //-------------------------------------------------------------------

  //----------------------------OPTIONS------------------------------
  const options = {
    title: {
      text: dataPuertoES.Nombre,
      left: "center",
    },
    tooltip : {
      formatter: "{b} <br/> {c} "+ String(dataPuertoES.Unidad)
     
  },
    series: [
      {
        type: "gauge",
        startAngle: 200,
        endAngle: -20,
        splitNumber: 4,
        radius: "95%",
        top: "auto",
        center: ["53%", "65%"],

        min: Number(dataPuertoES.EscalaEjeMin),

        max: Number(dataPuertoES.EscalaEjeMax),
        //max: Number(Math.max(...valorX) * 1.1).toFixed(2),

        progress: {
          width: 5,
          show: true,
          // overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#464646",
            color: "rgba(0, 69, 245, 0.3)",
          },
        },
        data: [
          {
            // value:19,
            value: Number(valorX.Valor), 
            // DateTime.fromSeconds(Number(item.FechaHoraRegistro)).toFormat("dd-MM-yy HH:mm:ss")
            // name:String(valorX.FechaHoraCreacion),
            name:String( DateTime.fromSeconds(Number(valorX.FechaHoraCreacion)).toFormat("dd-MM-yy HH:mm:ss")),
            title: {
              offsetCenter: ['0%', '50%']
            },
            // data:[{value: 0.5, name: 'gas'}]
            //value: (valorX.Valor)*1.0,
          },
        ],
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 15,
            color: [
              [0.165, "#1E90FF"],  // zona bajo cero
              [0.75, "#00C853"],
              [1, "#FC0000"],
            ],
          },
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          length: 22,
          lineStyle: {
            width: 0,
            color: "#999",
          },
        },
        axisLabel: {
          show: true,
          distance: 10,
          textStyle: {
            color: function (value, index) {
              return (value = 0 ? "green" : "red");
            },
          },

          //    color: "#999",
          fontSize: 12,
        },
        pointer: {
          //icon:'path://M 12 0 l 8 9 h -6 v 15 h -4 v -15 h -6 Z',
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '70%',
          width: 15,
          offsetCenter: [0, '0'],

        },
        anchor: {
          show: true,
          showAbove: true,
          size: 10,
          itemStyle: {
            borderWidth: 3,
          },
        },
        detail: {
          show: true,
          valueAnimation: true,
          fontSize: 14,
          offsetCenter: [0, "25%"],
          formatter: "{value}",
          //  formatter: ejeX[ultimaPosX],
          color: "inherit",
        },
      },
    ],
  };

  //-----------------------------------------------------------

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      // theme={'theme_name'}
      style={chartStyle}
    />
  );
};
export default GaugueEchart1;


