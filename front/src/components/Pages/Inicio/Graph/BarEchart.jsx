import React, { memo, useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { usePuertoEs } from "../../helpers/GetPuertoES.helpers";
import { useUltimosRegistros } from "../../helpers/GetUltimoRegistro.helpers";
import { DateTime } from "luxon";

const BarEchart = memo(({ puertoES = 1 }) => {
  const { data: dataRegPuertoEs = [], loading: loadingRegistros } = useUltimosRegistros(puertoES);
  const { data: dataPuertoES = {}, loading: loadingPuerto } = usePuertoEs(puertoES);

  const chartData = useMemo(() => {
    if (!dataRegPuertoEs.length) return { ejeX: [], valorX: [] };

    const ejeX = dataRegPuertoEs.map(item =>
      DateTime.fromSeconds(Number(item.FechaHoraRegistro)).toFormat("dd-MM-yy HH:mm:ss")
    );
    
    const valorX = dataRegPuertoEs.map(item => Number(item.Valor));

    return { ejeX, valorX };
  }, [dataRegPuertoEs]);

  const chartStyle = useMemo(() => ({
    resize: "90%",
    overflow: true,
    position: "relative",
    height: "90%",
    width: "95%",
    left: 10,
  }), []);

  const options = useMemo(() => ({
    title: {
      text: dataPuertoES.Nombre || 'Loading...',
      left: "center",
    },
    grid: { top: 30, right: 20, bottom: 24, left: 45 },
    xAxis: {
      type: "category",
      data: chartData.ejeX,
    },
    yAxis: {
      type: "value",
      min: Number(dataPuertoES.EscalaEjeMin) || 0,
      max: Number(dataPuertoES.EscalaEjeMax) || 100,
    },
    series: [{
      name: dataPuertoES.Nombre,
      data: chartData.valorX,
      type: "line",
      smooth: true,
      markPoint: {
        data: [
          { type: 'max' },
          { type: 'min' }
        ]
      },
      markLine: {
        data: [{
          name: 'Minimo a Maximo',
          type: 'min',
          label: {
            show: true,
            align: 'left',
            position: 'middle',
            color: 'green',
            backgroundColor: "rgba(12, 12, 245, 0.2)",
            padding: 10,
            borderRadius: 5,
            formatter: `Min: {c} Max ${Math.max(...chartData.valorX) || 0}`
          },
          lineStyle: {
            color: "green",
          }
        }, {
          type: 'max'
        }]
      }
    }],
    tooltip: {
      trigger: "axis",
      valueFormatter: (value) => `${value} ${dataPuertoES.Unidad || ''}`,
      axisPointer: { type: "line" },
    },
    toolbox: {
      show: true,
      feature: {
        magicType: { type: ["line", "bar"] },
        saveAsImage: {},
      },
    },
  }), [dataPuertoES, chartData]);

  if (loadingRegistros || loadingPuerto) {
    return <div>Loading chart...</div>;
  }

  return <ReactECharts option={options} style={chartStyle} />;
});

BarEchart.displayName = 'BarEchart';

export default BarEchart;