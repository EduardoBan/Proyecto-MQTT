import React from "react";
import GaugeComponent from "react-gauge-component";

const chartStyle = {
  // height: 280,
  resize: "90%",
  overflow: true,
  position: "relative",
  height: "90%",
  width: "90%",
};

const GaugueEchart = ({ puertoES = "3" }) => (
  <GaugeComponent
    type="semicircle"
    arc={{
      width: 0.2,
      padding: 0.005,
      cornerRadius: 1,
      // gradient: true,

      subArcs: [
        {
          limit: 12,
          color: "#0000FF",
          showTick: true,
          tooltip: {
            text: "Muy baja temperatura!",
          },
        },
        {
          limit: 17,
          color: "#00FFFF",
          showTick: true,
          tooltip: {
            text: "Baja temperatura",
          },
        },
        {
          limit: 23,
          color: "#00FF00",
          showTick: true,
          tooltip: {
            text: "Temperatura correcta",
          },
        },
        {
          limit: 28,
          color: "#F5CD19",
          showTick: true,
          tooltip: {
            text: "Alta temperatura",
          },
        },
        {
          color: "#EA4228",
          tooltip: {
            text: "Temperatura muy alta",
          },
        },
      ],
    }}
    pointer={{
      type: "arrow", // "needle", "blob" or "arrow".
      color: "#464A4F",
      length: 0.8,
      width: 15,
      // elastic: true,
    }}
    labels={{
      valueLabel: {
        formatTextValue: (value) => value + " Veces",
        fontSize: 14,
        style: {
          fontSize: "35px",
          fill: "#fff",
          background: "blue",
          textShadow:
            "black 1px 1px 0px, black 0px 0px 2.5em, black 0px 0px 0.2em",
        },
      },
      tickLabels: {
        type: "outer",
        valueConfig: { formatTextValue: (value) => value + "ºC" },
        ticks: [{ value: 13 }, { value: 24.5 }, { value: 32 }],
      },
    }}
    value={22.5}
    minValue={0}
    maxValue={35}
    style={chartStyle}
  />
);

export default GaugueEchart;
