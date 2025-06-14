
import ReactEcharts from "echarts-for-react";
import Sidebar from "../Sidebar/Sidebar";
//import axios from "axios";
import { useState } from "react";
import "./Grafico.css";

import GetRegistros from "../helpers/GetRegistros.helpers";
import GetPuertoEs from "../helpers/GetPuertoES.helpers";
const { DateTime } = require("luxon");


function Grafico() {
  const [mensajeFrontSidebar, setmensajeFrontSidebar] = useState(1);

  // tomo los valores de la tabla para generar los ejes X e Y     {DateTime.fromSeconds(Number(user.FechaHoraRegistro)).toUnixInteger()}
  var cadenaenviar=mensajeFrontSidebar.toString();
  console.log("Mensaje Front Sidebar")
  console.log(cadenaenviar);
  const words = cadenaenviar.split(',');
  const dataRegPuertoEs = GetRegistros(
   // cadenaenviar
  //   ,
  //  DateTime.now().minus({days:66}).toUnixInteger(),
  //  DateTime.now().minus({days:64}).toUnixInteger()
  //12,1731341764,1737044164  // si pongo un valor completo con id, fechaini,fecha fin sirve
  words[0], words[1], words[2]

  );

//const fechaI=DateTime.now().minus({days:66}).toUnixInteger;


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
  const dataPuertoES = GetPuertoEs(mensajeFrontSidebar);
  const option = {
    

   // autoPlay: true,
   // playInterval: 1000,

    tooltip: {
      valueFormatter: (value) => value + " " + String(dataPuertoES.Unidad),
    },
    title: {
      left: "center",
      text:
        "Puerto seleccionado N°: " +
        (words[0] + " " + String(dataPuertoES.Nombre)),
    },
    toolbox: {
      show: true,
      orient: "horizontal", //Modo de diseño, el valor predeterminado es el diseño horizontal, opcional: 'horizontal' ¦ 'vertical'
      x: "right", // Posición de colocación horizontal, el valor predeterminado es alinear toda la imagen a la derecha, las opciones son:
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}(coordenada x, unidad px)
      y: "top", //Posición de ubicación vertical, el valor predeterminado es la parte superior de toda la imagen, las opciones son:
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}(coordenada y, unidad px)
      color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"],
      backgroundColor: "rgba(0,0,0,0)", // Color de fondo de la caja de herramientas
      borderColor: "#ccc", // Color del borde de la caja de herramientas
      borderWidth: 0, // Ancho de línea del borde de la caja de herramientas, unidad px, el valor predeterminado es 0 (sin borde)
      padding: 5, // El margen interior de la caja de herramientas, en px, el margen interior predeterminado en cada dirección es 5.
      showTitle: true,
      feature: {
        mark: {
          show: true,
          title: {
            mark: "interruptor de línea auxiliar",
            markUndo: "Líneas auxiliares-eliminar",
            markClear: "Líneas auxiliares - claras",
          },
          lineStyle: {
            width: 1,
            color: "#1e90ff",
            type: "dashed",
          },
        },
        dataZoom: {
          show: true,
          title: {
            dataZoom: "zoom de área",
            dataZoomReset: "Acercamiento de región",
          },
        },
        dataView: {
          show: true,
          title: "Vista de datos",
          readOnly: false,
          lang: ["Vista de datos", "Cerrar", "Actualizar"],
        },
        magicType: {
          show: true,
          title: {
            line: "Gráfico de líneas",
            bar: "Gráfico de barras",
           
           
          },
          type: ["line", "bar"],
        },
        restore: {
          show: true,
          title: "Recuperar",
          color: "black",
        },
        saveAsImage: {
          show: true,
          title: "Guardar como imagen",
          type: "jpeg",
          lang: ["Haga clic para guardar localmente"],
        },
      },
    },

    grid: [
      {
        // left: 40,
        right: 10,
        height: "65%",
      },
      {
        // left: 40,
        right: 10,
        // top: "15%",
        height: "65%",
      },
    ],
    legend: {
      top: 12,
      left: 16,
      data: ["Fecha", "Valor"],
    },

    xAxis: [
      {
        type: "category",
        data: ejeX,
        axisTick: {
          show: true,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0, 0, 0, 0.5)",
            type: "dashed",
          },
        },
        axisLabel: {
          fontSize: 11,
          color: "#767676",
        },
        axisLine: {
          color: "#D1D1D1",
        },
      },
    ],
    yAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },

    series: [
      {
        data: valorX,
        type: "line",
        // smooth: true,
        markPoint : {
          data : [
              {type : 'max', name: 'Maximo :{c}'},
              {type : 'min', name: 'Minimo :{c}'}
          ]
      },
      },
    ],

    dataZoom: [
      {
        start: 0,
        end: 100,
        textStyle: {
          color: "black",
          fontWeight: "bold",
          // backgroundColor: {
          //   color: "white",
          // },
        },
        moveHandleIcon:
          "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
        moveHandleSize: 20,
        moveHandleStyle: { color: "darkgreen" },

        handleIcon:
          "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
        brushSelect: true,
        height: 30,
        bottom: 25,

        dataBackground: {
          areaStyle: {
            color: "green",
          },
          lineStyle: {
            color: "darkblue",
          },
        },
      },
      {
        type: "inside",
      },
    ],
  };

  //----------------------- Props para recibir desde el elemento Sidebar---------------------------
  const AddMensaje = (mensajeIng) => {
    setmensajeFrontSidebar(mensajeIng); // me llega la props mensajeIng y la envio
  };

  return (
    <>
      <Sidebar
        addMensaje={AddMensaje}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <ReactEcharts
        option={option}
        style={{
          top: 0,
          height: "84vh",
          width: "100%",
          border: "black",
        }}
      />
    </>
  );
}
export default Grafico;
