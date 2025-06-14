// Grafico tipo Gaugue de 3 valores

import "../Grid/styles.css";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { CanvasRenderer } from "echarts/renderers";
import { GaugeChart } from "echarts/charts";
import * as echarts from "echarts/core";
import moment from "moment";

import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
import GetRegistros from "../../helpers/GetRegistros.helpers";
//import GetVistas from "../../helpers/GetVistas.helpers";
//import { color } from "echarts";

// const { DateTime } = require("luxon");

echarts.use([GaugeChart, CanvasRenderer]);

let valoresData = [];

const GaugueEchart3 = ({ puertoES = "5" }) => {


  let puertos = puertoES.split(',');

  let cantPtoES = puertos.length;
  let dataRegPuertoEs = new Array(cantPtoES);

  for (let index = 0; index < cantPtoES; index++) {
    dataRegPuertoEs[index] = GetRegistros(puertos[index],
      Number(moment().subtract(66, "days").unix()),
      Number(moment().subtract(58, "days").unix())
    );

  }
  let valor0 = dataRegPuertoEs[0];
  let valor1 = dataRegPuertoEs[1];
  let valor2 = dataRegPuertoEs[2];

  let valor0Final = valor0[valor0.length - 1];
  let valor1Final = valor1[valor1.length - 1];
  let valor2Final = valor2[valor2.length - 1];


  // if ((dataRegPuertoEs[0].length !== 0) && (dataRegPuertoEs[1].length !== 0) && (dataRegPuertoEs[2].length !== 0)) {
  //   console.log("*****Datos puertos ES varios*****")
  //   console.log(dataRegPuertoEs[0]);
  //   console.log(dataRegPuertoEs[1]);
  //   console.log(dataRegPuertoEs[2]);
  //   console.log("----------------------------")
  //   console.log(valor0Final);
  //   console.log(valor1Final);
  //   console.log(valor2Final);


  // }

  if ((valor0Final != null) && (valor1Final != null) && (valor2Final != null)) {

    console.log("********valores Data******");

    console.log(valor0Final['Valor']); // Output: 'Jane'
    console.log(valor1Final['Valor']); // Output: 'Jane'
    console.log(valor2Final['Valor']); // Output: 'Jane'
    valoresData.push(valor0Final['Valor']);
    valoresData.push(valor1Final['Valor']);
    valoresData.push(valor2Final['Valor']);
    console.log(valoresData);
  };

  const dataPuertoES = GetPuertoEs(puertoES);

  //----------------------------- STYLE --------------------------------
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
  //---------------------------------------------------------------------

  //------------------------------OPTIONS-------------------------------------------
  const options = {
    title: {
      text:"Puntos medicion:"+puertoES, //dataPuertoES.Nombre,
      //text: " Tensiones L1L2L3",
      left: "center",
    },
    // tooltip: {
    //   trigger: "axis",
    //   valueFormatter: (value) => value + " " + String(dataPuertoES.Unidad),
    //   axisPointer: { type: "line" },
    // },


    tooltip : {
      formatter: "{b} <br/> {c} "+ String(dataPuertoES.Unidad)
     
  },


    // graphic: [{  // Coloco etiquetas abajo con los nombres de las variables y valores
    //   type: 'group',
    //   // top:27,
    //   bottom: 25,
    //   position: 'center',

    //   bounding: 'raw',
    //   children: [{
    //     type: 'text',
    //     style: { text: 'L1:' + puertoES, fill: "black", backgroundColor: 'rgba(255,0,0,0.2)', padding: 5, borderColor: "red", borderWidth: 1, borderRadius: 3 },
    //     left: '10vmin'
    //   }, {
    //     type: 'text',
    //     style: { text: 'L2:' + puertoES, fill: "black", backgroundColor: 'rgba(0,0,255,0.2)', padding: 5, borderColor: "blue", borderWidth: 1, borderRadius: 3 },
    //     left: "90vmin"
    //   },
    //   {
    //     type: 'text',
    //     style: { text: 'L3:' + puertoES, fill: "black", backgroundColor: 'rgba(0,128,0,0.2)', padding: 5, borderColor: "green", borderWidth: 1, borderRadius: 3 },
    //     left: "170vmin"
    //   }
    //   ]
    // }],

    series: [
      {
        type: "gauge",
        startAngle: 0,
        endAngle: 360,
        splitNumber: 6,
        radius: "80%",
        center: ["55%", "55%"],  // corro el centro del grafico de vectores
        min: 0,
        max: 360,
        pointer: {
          //icon:"triangle",
          //linea con chica
          icon: 'path://M 12 0 l 8 9 h -6 v 15 h -4 v -15 h -6 Z', 
          // Flecha agujas
          //icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          //linea con flecha grande 
         // icon:'path://M 9.001 10.978 h -3.251 c -0.412 0 -0.75 -0.335 -0.75 -0.752 c 0 -0.188 0.071 -0.375 0.206 -0.518 c 1.685 -1.775 4.692 -4.945 6.069 -6.396 c 0.189 -0.2 0.452 -0.312 0.725 -0.312 c 0.274 0 0.536 0.112 0.725 0.312 c 1.377 1.451 4.385 4.621 6.068 6.396 c 0.136 0.143 0.207 0.33 0.207 0.518 c 0 0.417 -0.337 0.752 -0.75 0.752 h -3.251 v 9.02 c 0 0.531 -0.47 1.002 -1 1.002 h -3.998 c -0.53 0 -1 -0.471 -1 -1.002 Z',
          //linea con flecha grande y diente atras
         // icon: "path://M26.436 2.3 c -1.253 -3.067 -3.285 -3.067 -4.539 0 l -7.654 18.739 c -1.254 3.067 -0.212 4.359 2.327 2.884 l 2.867 -1.666 c 0.955 -0.555 1.428 -0.158 1.221 0.927 c -0.355 1.866 -0.727 5.212 -0.491 10.592 c -0.099 4.477 0.316 8.115 0.642 10.216 c 0.169 1.091 0.317 2.956 1.001 3.823 c 0.549 0.697 4.166 0.697 4.715 0 c 0.684 -0.867 0.766 -2.742 0.896 -3.838 c 0.285 -2.396 0.713 -6.558 0.747 -10.201 c 0.052 -5.459 -0.273 -8.746 -0.567 -10.574 c -0.175 -1.09 0.342 -1.5 1.297 -0.945 c 0.786 0.457 1.784 1.036 2.869 1.666 c 2.539 1.475 3.582 0.184 2.328 -2.884 L 26.436 2.3 Z",
          //Segmento
          //icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
          // flecha indicador solo
          //icon:'path://M20 1232 l0 -417 400 -400 400 -400 400 400 400 400 0 417 0 418 -214 0 -214 0 -186 -149 -185 -150 -187 150 -186 149 -214 0 -214 0 0 -418z m586 87 l214 -171 214 171 214 171 106 0 106 0 0 -303 0 -302 -320 -320 -320 -320 -320 320 -320 320 0 302 0 303 106 0 106 0 214 -171z',


          width: 15,
          length: '65%',
          offsetCenter: [0, 0]
        },
        markLine: {
          data: [
            [
              {  // Dibujo la linea para indicar el cero de referencia
                name: 'Cero',
                x: "55%",  // inicio del grafico de linea (x1,y1)   ,  (x2,y2)
                y: "55%",
                label: {
                  show: false,
                  align: 'center',
                  position: 'insideMiddleTop', //'start', 'middle', 'end', 'insideStartTop', 'insideStartBottom', 'insideMiddleTop', 'insideMiddleBottom', 'insideEndTop','insideEndBottom'.'insideMiddleBottom'
                  distance: [0, 0],
                  color: 'rgb(85, 107, 47)',
                  backgroundColor: "rgba(85, 107, 47, 0.1)",
                  padding: 5,
                  borderColor: 'rgb(85, 107, 47)',
                  borderWidth: 1,
                  borderRadius: 5,
                  formatter: `0`
                },
                lineStyle: {
                  color: "cyan",
                  width: 2,
                }
              },
              {
                x: "95%",
                y: "55%"
              }

            ]
          ]
        },
        name: ["L1", "L2", "L3"],
        //data: [valoresData[0], valoresData[1], valoresData[2]],
        data: [0, 120, 240],  // Valores de angulos que toma
        color: ["red", "blue", "green"],

        // data: [
        //   {
        //     value: 25,
        //     name: 'L1',
        //     title: {
        //       offsetCenter: ['-70%', '115%'],
        //       color: ["red"],
        //     },
        //     detail: {
        //       valueAnimation: true,
        //       offsetCenter: ['-50%', '115%'],

        //     }
        //   },
        //   {
        //     value: 149,
        //     name: 'L2',
        //     title: {
        //       offsetCenter: ['-10%', '115%']
        //     },
        //     detail: {
        //       valueAnimation: true,
        //       offsetCenter: ['10%', '115%']
        //     }
        //   },
        //   {
        //     value: 275,
        //     name: 'L3',
        //     title: {
        //       offsetCenter: ['50%', '115%']
        //     },
        //     detail: {
        //       valueAnimation: true,
        //       offsetCenter: ['70%', '115%']

        //     }
        //   }
        // ],



        tooltip: {},
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 2,
            // color:"#853",
            color: [
              [0.333, "fff"],
              [0.666, "fff"],
              [1, "fff"],
            ],
            //color: "rgba(0, 69, 245, 1)",

          },
        },
        axisTick: {
          show: true,
          width: 5,
          // color:"#853",
          color: [
            [0.333, "red"],
            [0.666, "blue"],
            [1, "green"],
          ],
        },
        detail: {

          width: 50,
          height: 14,
          fontSize: 14,
          color: 'inherit',
          borderColor: 'inherit',
          borderRadius: 20,
          borderWidth: 1,
          // show:false,
          // width: 40,
          // height: 14,
          //fontSize: 14,
          // color: '#fff',
          // backgroundColor: 'inherit',
          // borderRadius: 5,
          // formatter: '{value}%'
          //valueFormatter: (value) => value + " \n" + String(dataPuertoES.Unidad),
          // formatter: function() {
          //   return name[0] + dataPuertoES.Unidad+ "\n";
          //  },
          title: {
            offsetCenter: ['0%', '80%']
          },
          detail: {
            offsetCenter: ['0%', '95%']
          }
        },


        splitLine: {
          length: 12,
          lineStyle: {
            width: 5,
            color: "#fff",
          },
        },
      },

    ],
  };
  //-------------------------------------------------------------------------
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
export default GaugueEchart3;


