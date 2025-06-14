import ReactECharts from "echarts-for-react";
//import moment from "moment";

import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
//import GetRegistros from "../../helpers/GetRegistros.helpers";
import  {GetUltimosRegistros}  from "../../helpers/GetUltimoRegistro.helpers";
const { DateTime } = require("luxon");

const BarEchart = ({ puertoES = 1 }) => {
  // const dataRegPuertoEs = GetRegistros(
  //   puertoES,
  //   Number(moment().subtract(2, "days").unix()),
  //   Number(moment().unix())
  // );

  const dataRegPuertoEs = GetUltimosRegistros(puertoES);

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

  const dataPuertoES = GetPuertoEs(puertoES);
  console.log(" xxxxxx Datos Puerto ES xxxxx");
  console.log(dataPuertoES);

  // configuro el grafico
  const chartStyle = {
    // height: 280,
    resize: "90%",
    overflow: true,
    position: "relative",
    height: "90%",
    //height: "74vh",
    width: "95%",
    left:10,
    
      };

  const options = {
    title: {
      text: dataPuertoES.Nombre,
      left: "center",
    },
    grid: { top: 30, right: 20, bottom: 24, left: 45 },
    xAxis: {
      type: "category",
      data: ejeX,
      
    },
    yAxis: {
      type: "value",
      min: Number(dataPuertoES.EscalaEjeMin),
      max: Number(dataPuertoES.EscalaEjeMax),
      //max: Number(Math.max(...valorX) * 1.05).toFixed(2),
      
    },
    series: [
      {
        name: dataPuertoES.Nombre,
        data: valorX,
        
        type: "line",
        smooth: true,
        //step: "end",
        markPoint : {
          data : [
              {type : 'max'},
              {type : 'min'}
          ]
      },
       //-----------------------------------------------------------------------------
       markLine: {
        data: [
                //     {
                //     name: 'Promedio',
                //     // 'average', 'min', and 'max' are supported
                  
                //     type: 'average',
                //     label: {
                //       show:true,
                //       align:'left',
                //       position: 'insideStartTop', //'start', 'middle', 'end', 'insideStartTop', 'insideStartBottom', 'insideMiddleTop', 'insideMiddleBottom', 'insideEndTop','insideEndBottom'.'insideMiddleBottom'
                //       distance: [0,0],
                //       color: 'blue',
                //       // backgroundColor: 'green',
                //       backgroundColor: {
                //           image: 'icon/no_disturb.png'
                //       },

                //       padding: 15,
                //       width:600,
                //       height:900,
                //       // borderRadius: 5,
                //       formatter:'{b}: {c}'
                //       // formatter: function(value) {
                //       //     return `Nombre`;
                //       //  }
                //   }
                // },
      
      // {
      //     name: 'Horizontal line with Y value at 100',
      //     yAxis: 100
      // },
      [
        
          {
              // Use the same name with starting and ending point
              name: 'Minimo a Maximo',
              type: 'min',
              label: {
                show:true,
                align:'left',
                position: 'middle', //'start', 'middle', 'end', 'insideStartTop', 'insideStartBottom', 'insideMiddleTop', 'insideMiddleBottom', 'insideEndTop','insideEndBottom'.'insideMiddleBottom'
                distance: [0,0],
                color: 'green',
                backgroundColor:"rgba(12, 12, 245, 0.2)",
                padding: 10,
                
                // width:600,
                // height:900,
                borderRadius: 5,
                //  max: Number(Math.max(...valorX) * 1.1).toFixed(2),
                formatter: `  Min: {c} Max ${Math.max(...valorX)}`
            },
            lineStyle:{
              color:"green",

            } 
          },
          {
              type: 'max'
          }
      ],
  // [
  //         {
  //             name: 'Markline between two points',
  //             coord: [10, 20]
  //         },
  //         {
  //             coord: [20, 30]
  //         }
  //     ], 
    //   [
    //     {
    //     // Mark line with a fixed X position in starting point. This is used to generate an arrow pointing to maximum line.
    //       yAxis: 'max',
    //       x: '90%'
    //      }, 
    //      {
    //       type: 'max'
    //    }
    //  ],
/*       [
          {
              name: 'Mark line between two points',
              x: 100,
              y: 100
          },
          {
              x: 500,
              y: 200
          }
      ] */
    ],
   }
      
      },
    ],

    tooltip: {
      trigger: "axis",
      valueFormatter: (value) => value + " " + String(dataPuertoES.Unidad),
      axisPointer: { type: "line" },
    },
    toolbox: {
      show: true,
      feature: {
        // dataZoom: {
        //   yAxisIndex: "none",
        // },
        // dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        // restore: {},
        saveAsImage: {},
      },
    },
  };

  return <ReactECharts option={options} style={chartStyle} />;
};

export default BarEchart;