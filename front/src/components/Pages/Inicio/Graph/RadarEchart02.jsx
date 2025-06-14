
// import "../Grid/styles.css";
// import ReactEChartsCore from "echarts-for-react/lib/core";
// import { CanvasRenderer } from "echarts/renderers";
// import { GaugeChart } from "echarts/charts";
// import * as echarts from "echarts/core";

// import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
// import GetVistas from "../../helpers/GetVistas.helpers";
// import GetUltimoRegistro from "../../helpers/GetUltimoRegistro.helpers";


// echarts.use([GaugeChart, CanvasRenderer]);
// let valorX = [];

// const RadarChart1 = ({ puertoES = "5" }) => {

//   let dataPuertoES = [];
//   let dataVistas = [];
//   let dataUltimoReg = [];
//   puertoES = puertoES.split(',')

//   console.log('-----------RADAR Datos puertos ES-------------');
//   console.log(puertoES[0] + ':' + puertoES[1] + ':' + puertoES[2]);
//   console.log('-------------------------------------------');

//   for (let index = 0; index < (puertoES.length - 1); index++) {

//     dataPuertoES[index] = GetPuertoEs(puertoES[index]);
//     dataVistas[index] = GetVistas(puertoES[index]);
//     dataUltimoReg[index] = JSON.stringify(GetUltimoRegistro(puertoES[index]));

//   }

//   if (dataUltimoReg.length > 2) {
//     valorX = JSON.parse(dataUltimoReg);
//     // eslint-disable-next-line
//     console.log("--*****--Radar dataRegPuertoEs--*****--" + "," + puertoES + "," + valorX.Valor + '\n');
//     console.log(dataUltimoReg);
//      console.log('---------------Vistas----------------------');
//     console.log(dataVistas);
//     console.log('-------------------------------------------\n\n');
//   }

//   // -------------------- STYLE ----------------------
//   const chartStyle = {
//     // height: 280,
//     resize: "80%",
//     overflow: false,
//     left: "center",
//     innerHeight: "93%",
//     position: "static",
//     height: "80%",
//     width: "100%",
//   };

//   //------------------------OPTIONS-----------------------------------

//   let option = {
//     color: ["#026D49FF", "#5693E4FF", "#03DACD", "#F05334FF"],
//     width: "3px",
//     legend: {
//       bottom: 0,
//       data: []
//     },
//     splitNumber: 2,
//     tooltip: {},
//     title: {
//       text: "Tension de linea "+ puertoES[0] + ':' + puertoES[1] + ':' + puertoES[2],
//       left: "center",
//     },
//     //Chart label
//     radar: [
//       {
//         center: ["52%", "65%"],
//         indicator: [

//           { text: "L1", color: "black", max: 390, min: 370 },
//           { text: "L2", color: "black", max: 390, min: 370 },
//           { text: "L3", color: "black", max: 390, min: 370 }
//         ],
//         splitNumber: 3,
//         radius: 100,  // radio de la circunferencia adonde esta el triangulo
//         startAngle: 90,  // angulo de rotacion del triangulo
//         splitArea: {
//           areaStyle: {
//             color: ["#FFF", "#FFF"]
//           }
//         },
//         axisLine: {
//           lineStyle: {
//             color: '#000000FF',
//           }
//         },
//         splitLine: {
//           lineStyle: {
//             color: "#82C7FFFF"
//           }
//         }
//       }
//     ],
//     series: [

//       {
//         type: "radar",
//         emphasis: {
//           lineStyle: {
//             width: 4,

//           }
//         },
//         center: ["52%", "65%"],
//         //Chart data
//         data: [
//           {
//             value: [385, 387, 382],
//             name: "Data A",
//             symbol: "square",
//             symbolSize: 6,
//             // areaStyle: {
//             //   color: "#0075FF99"
//             // }
//             label: {
//               show: true,
//               formatter: function (params) {
//                 return params.value;
//               },
//               //     markLine: {
//               //       data: [{name: 'Mark Line', yAxis: 1}],
//               //  }
//             }

//           },


//         ]

//       }
//     ]
//   };
//   //---------------------------------------------------------------------
//   return (
//     <ReactEChartsCore
//       echarts={echarts}
//       option={option}
//       //notMerge={true}
//       lazyUpdate={true}
//       theme={'theme_name'}
//       style={chartStyle}
//     />
//   );
// };
// export default RadarChart1;


import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';
 
const RadarChart1 = () => {
 
    // Sample data
    const data = [
        { name: 'A', x: 21 },
        { name: 'B', x: 22 },
        { name: 'C', x: -32 },
        { name: 'D', x: -14 },
        { name: 'E', x: -51 },
        { name: 'F', x: 16 },
        { name: 'G', x: 7 },
        { name: 'H', x: -8 },
        { name: 'I', x: 9 },
    ];
 
    return (
        <RadarChart 
            height={200} 
            width={200} 
            outerRadius="80%"
            data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="green"
                fill="green" fillOpacity={0.5} />
        </RadarChart>
    );
}
 
export default RadarChart1;