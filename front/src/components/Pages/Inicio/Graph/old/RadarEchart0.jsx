import { color } from "echarts";
import ReactEcharts from "echarts-for-react";

//-----------------------STYLE ---------------------------------------
const style = {
  // height: "90vh",
 // height: "90%",
  // height: 280,
      // resize: "80%",
      // overflow: false,
      // left: "center",
      // innerHeight: "99%",
      // position: "static",
      // height: "110%",
      resize: "80%",
      overflow: false,
      left: "center",
      innerHeight: "93%",
      position: "static",
      height: "80%",
      width: "100%",
};
//-------------------------------------------------------------------
//------------------------Option -----------------------------------
let option = {
  color: ["#FF6781", "#909FB7", "#03DACD", "#FF917C"],
  legend: {
    bottom: 0,
    data: []
  },
  splitNumber: 2,
  tooltip: {},
  title: {
    text: "Tension de linea",
    left: "center",
  },
  //Chart label
  radar: [
    {
      indicator: [

        { text: "L1", color: "black", max:390, min:370 },
        { text: "L2", color: "black", max:390, min:370 },
        { text: "L3", color: "black", max:390, min:370 }
      ],
      splitNumber: 3,
      radius: 100,  // radio de la circunferencia adonde esta el triangulo
      startAngle: 90,  // angulo de rotacion del triangulo
      splitArea: {
        areaStyle: {
          color: ["#FFF", "#FFF"]
        }
      },
      axisLine: {
        lineStyle: {
           color: '#2A2C2F',
         }
      },
      splitLine: {
        lineStyle: {
          color: "#C3CBD8"
        }
      }
    }
  ],
  series: [
    {
      type: "radar",
      emphasis: {
        lineStyle: {
          width: 4,
      
        }
      },

      //Chart data
      data: [
        {
          value: [385, 387,382],
          name: "Data A",
          symbol: "square",
          symbolSize: 6,
          // areaStyle: {
          //   color: "#0075FF99"
          // }
          label: {
            show: true,
            formatter: function (params) {
              return params.value;
            },
            //     markLine: {
            //       data: [{name: 'Mark Line', yAxis: 1}],
            //  }
          }



        },
       
    
      ]
    }
  ]
};
//-----------------------------------------------------------

const RadarChart1 = () => (
  <ReactEcharts 
  option={option} 
  style={style} 
  className="pie-chart" />
);
export default RadarChart1;
