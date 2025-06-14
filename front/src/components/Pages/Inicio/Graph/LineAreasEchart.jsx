import ReactECharts from "echarts-for-react";
import  {GetUltimosRegistros}  from "../../helpers/GetUltimoRegistro.helpers";

//import GetRegistros from "../../helpers/GetRegistros.helpers";
import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
const { DateTime } = require("luxon");

const LineAreasEchart = ({ puertoES = "5" }) => {
  // El puerto 5 es el acumulado
  // tomo los valores de la tabla para generar los ejes X e Y
  // const dataRegPuertoEs = GetRegistros(
  //   puertoES,
  //   Number(moment().subtract(2, "days").unix()),
  //   Number(moment().unix())
  // );

  const dataRegPuertoEs = GetUltimosRegistros(puertoES);

  let ejeX = [];
  dataRegPuertoEs.forEach((item) =>
    //  ejeX.push([moment(item.FechaHoraRegistro).format("DD-MM-YY:HH:mm")])
    //DateTime.fromSeconds(Number(item.FechaHoraRegistro)).toFormat("dd-MM-yy HH:mm:ss")
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
    width: "95%",
    left:10,
      };
  // defino el grafico
  const option = {
    title: {
      text: dataPuertoES.Nombre,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      valueFormatter: (value) => value + " " + String(dataPuertoES.Unidad),
      axisPointer: { type: "line" },
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        dataView: { readOnly: false },
        // magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {},
      },
    },
    // grid: {
    //   left: "3%",
    //   right: "4%",
    //   bottom: "3%",
    //   containLabel: true,
    // },
    grid: { top: 30, right: 20, bottom: 24, left: 45 },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ejeX, // datos del eje X
      },
    ],
    yAxis: [
      {
        min: Number(dataPuertoES.EscalaEjeMin),
        // max: Number(dataPuertoES.EscalaEjeMax),
        //max: Number(Math.max(...valorX) * 1.15).toFixed(2),
        max: Number(dataPuertoES.EscalaEjeMax* 1.10).toFixed(2),
        
        // max: Number(Math.max(...valorX)) * 1.05,
        type:"value", // "value",category time
        // min: dataPuertoES.EscalaEjeMin,
        // max: dataPuertoES.EscalaEjeMax,
      },
    ],
    series: [
      {
        name: dataPuertoES.Nombre,
        type: "line",
        smooth: true,
        stack: "Cantidad total",
        areaStyle: { normal: {} },
        data: valorX, // valores a representar
       // step: "end",
       markPoint : {
        data : [
            {type : 'max', name: 'Maximo :{c}'},
            {type : 'min', name: 'Minimo :{c}'}
        ]
    },

       //-----------------------------------------------------------------------------
       markLine: {
        data: [{
          name: 'Promedio',
          // 'average', 'min', and 'max' are supported
        
          type: 'average',
          label: {
            show:true,
            align:'left',
            position: 'middle', //'start', 'middle', 'end', 'insideStartTop', 'insideStartBottom', 'insideMiddleTop', 'insideMiddleBottom', 'insideEndTop','insideEndBottom'.'insideMiddleBottom'
            distance: [0,0],
            color: 'blue',
            backgroundColor:"rgba(12, 12, 245, 0.2)",
            padding: 15,
            // width:600,
            // height:900,
            formatter:'{b}: {c}'
            // formatter: function(value) {
            //     return `Nombre`;
            //  }
        }
      },
      
      // {
      //     name: 'Horizontal line with Y value at 100',
      //     yAxis: 100
      // },
      // [
        
      //     {
      //         // Use the same name with starting and ending point
      //         name: 'Minimo a Maximo',
      //         type: 'min',
      //         label: {
      //           show:true,
      //           align:'left',
      //           position: 'insideStartTop', //'start', 'middle', 'end', 'insideStartTop', 'insideStartBottom', 'insideMiddleTop', 'insideMiddleBottom', 'insideEndTop','insideEndBottom'.'insideMiddleBottom'
      //           distance: [0,0],
      //           color: 'green',
      //           // backgroundColor: 'green',
      //           backgroundColor: {
      //               image: 'icon/no_disturb.png'
      //           },
    
      //           padding: 15,
      //           width:600,
      //           height:900,
      //           // borderRadius: 5,
      //           formatter:'{b},min: {c}'

      //       },
      //       lineStyle:{
      //         color:"green",

      //       } 

            
      //     },
      //     {
      //         type: 'max'
      //     }
      // ],
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
};
  return <ReactECharts option={option} style={chartStyle}  />;
};

export default LineAreasEchart;
