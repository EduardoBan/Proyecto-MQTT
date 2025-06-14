import ReactECharts from "echarts-for-react";

const GaugueEchart2 = ({ puertoES = "5" }) => {
  // -----------------------OPTIONS -------------------------------
  const option = {
    title: {
      text: "Humedad",
      //subtext: "70%",
      left: "center",
      //top: "45%",

      textStyle: {
        left: "center",
        //top: "45%",
        fontFamily: "Noto Sans JP",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 25,
        color: "#333333",
      },
      // subtextStyle: {
      //   left: "center",
      //   top: "45%",
      //   fontFamily: "Noto Sans JP",
      //   fontStyle: "normal",
      //   fontWeight: "bold",
      //   fontSize: 20,
      //   lineHeight: 12,
      //   color: "#828282",
      // },
    },
    angleAxis: {
      max: 100,
      startAngle: -90,
      show: false,
    },
    radiusAxis: {
      type: "category",
      show: false,
    },
    polar: {},
    series: [
      {
        type: "bar",
        data: [0],
        coordinateSystem: "polar",
        name: "placeholder",
        roundCap: true,
        color: "black",
      },
      {
        type: "bar",
        data: [0],
        coordinateSystem: "polar",
        name: "placeholder",
        roundCap: true,
        color: "black",
      },
      {
        type: "bar",
        data: [70],
        coordinateSystem: "polar",
        name: "A",
        roundCap: true,
        color: "#0496eb",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(219, 223, 241, 0.4)",
        },
      },


      
    ],
    detail: {
      show: true,
      valueAnimation: true,
      fontSize: 24,
      //offsetCenter: [0, "25%"],
      //formatter: "{value}" + dataPuertoES.Unidad,
      //  formatter: ejeX[ultimaPosX],
      formatter: "88",
      color: "inherit",
    },
  };
  // ----------------------------------------------------------------
  // -------------------------STYLE ---------------------------------
  const chartStyle = {
 
    resize: "80%",
    overflow: false,
    left: "center",
    innerHeight: "90%",
    innerWidth:"90%",
    position: "static",
    //height: "90%",
    //width: "90%",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "12.8vw 12.8vw",
  };
  //-----------------------------------------------------------------
  return (
    <div className="App">
      <ReactECharts
        option={option}
        notMerge
        lazyUpdate
        style={chartStyle}
      />
    </div>
  );
};

export default GaugueEchart2;