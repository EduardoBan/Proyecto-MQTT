import ReactEChart from "echarts-for-react";
import moment from "moment";

import GetRegistros from "../../../helpers/GetRegistros.helpers";
import GetPuertoEs from "../../../helpers/GetPuertoES.helpers";

const BarChart = ({ puertoES = "4" }) => {
  // tengo fijo el puerto, en este caso es el 3
  const dataRegPuertoEs = GetRegistros(
    4,
    1714495364, //moment().subtract(3, "days").unix(),
    1714656135 //moment().unix()
    // puertoES,
    // Number(moment().subtract(1, "days").unix()),
    // Number(moment().unix())
  );

  let ejeX = [];
  dataRegPuertoEs.forEach((item) =>
    ejeX.push([
      moment.parseZone(item.FechaHoraRegistro).format("DD-MM-YY HH:mm"),
    ])
  );

  let valorX = [];
  dataRegPuertoEs.forEach((item) => valorX.push(Number([item.Valor])));

  console.log(
    " --------------- Valores de X del PuertoES: " +
      puertoES +
      " ---------------"
  );
  console.log(JSON.parse(valorX));

  const dataPuertoES = GetPuertoEs(puertoES);

  const eChartsOption = {
    title: {
      // title of our chart
      text: "Aca tengo titulo",
      //text: dataPuertoES.Nombre,
    },
    xAxis: {
      // name of X Axis
      name: "X Axis",
      type: "category",
      // Contains the values for XAxis
      data: ejeX,
    },
    yAxis: {
      // name of Y Axis
      name: "Y Axis",
      type: "value",
      //  data: ejeX,
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {},
      },
    },

    series: {
      name: dataPuertoES.Nombre,
      data: valorX, // datos del eje X,
      type: "line",
    },
  };
  return (
    <div
      style={{
        width: "50%",
        height: "50%",
      }}
    >
      <ReactEChart
        style={{
          width: "100%",
          height: "100%",
        }}
        option={eChartsOption}
      />
    </div>
  );
};
export default BarChart;

// import React from "react";
// import ReactEcharts from "echarts-for-react";

// const BarChart = ({ puertoES = "4" }) => {
//   const option = {
//     xAxis: {
//       type: "category",
//       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     },
//     yAxis: {
//       type: "value",
//     },
//     series: [
//       {
//         data: [120, 200, 150, 80, 70, 110, 130],
//         type: "bar",
//       },
//     ],
//   };
//   return (
//     <div
//       style={{
//         width: "50%",
//         height: "50%",
//       }}
//     >
//       <ReactEcharts
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//         option={option}
//       />
//     </div>
//   );
// };
// export default BarChart;

// import React from "react";
// import ReactECharts from "echarts-for-react";

// const BarChart = () => {
//   const option = {
//     title: {
//       text: "堆叠区域图",
//     },
//     tooltip: {
//       trigger: "axis",
//     },
//     legend: {
//       data: ["邮件营销", "联盟广告", "视频广告"],
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: {},
//       },
//     },
//     grid: {
//       left: "3%",
//       right: "4%",
//       bottom: "3%",
//       containLabel: true,
//     },
//     xAxis: [
//       {
//         type: "category",
//         boundaryGap: false,
//         data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
//       },
//     ],
//     yAxis: [
//       {
//         type: "value",
//       },
//     ],
//     series: [
//       {
//         name: "邮件营销",
//         type: "line",
//         stack: "总量",
//         areaStyle: { normal: {} },
//         data: [120, 132, 101, 134, 90, 230, 210],
//       },
//       {
//         name: "联盟广告",
//         type: "line",
//         stack: "总量",
//         areaStyle: { normal: {} },
//         data: [220, 182, 191, 234, 290, 330, 310],
//       },
//       {
//         name: "视频广告",
//         type: "line",
//         stack: "总量",
//         areaStyle: { normal: {} },
//         data: [150, 232, 201, 154, 190, 330, 410],
//       },
//     ],
//   };

//   return <ReactECharts option={option} style={{ height: "100%" }} />;
// };

// export default BarChart;
