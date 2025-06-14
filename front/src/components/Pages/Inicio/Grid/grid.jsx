import React from "react";

import "react-grid-layout/css/styles.css";
//import "react-resizable/css/styles.css";
import "./grid.css";
import { Responsive, WidthProvider } from "react-grid-layout";

import BarEchart from "../Graph/BarEchart";
import LineAreasEchart from "../Graph/LineAreasEchart";
import SimpleMap from "../Graph/Mapa.jsx";
import CardData from "../Graph/CardData";

import GaugueEchart1 from "../Graph/GaugueEchart1";
import GaugueEchart2 from "../Graph/GaugueEchart2.jsx";
import GaugueEchart3 from "../Graph/GaugueEchart3.jsx";

import LiquidFillEchart from "../Graph/LiquidFillEchart1.jsx";
import RadarChart1 from "../Graph/RadarEchart01.jsx";

import Thermometer1 from "../Graph/TermometroChart1.jsx";
import Thermometer2 from "../Graph/TermometroChart2.jsx";
import Thermometer3 from "../Graph/TermometroChart3.jsx";
import Thermometer4 from "../Graph/TermometroChart4.jsx";

import axios from "axios";

const ResponsiveGridLayout = WidthProvider(Responsive);
//var data = [];



// function getFromLS(key) {
//   let ls = {};
//   if (global.localStorage) {
//     try {
//       ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
//     } catch (e) {
//       /*Ignore*/
//     }
//   }
//   return ls[key];
// }

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}


function TipoGrafico(tipo, puerto) {
  switch (tipo) {
    case "CARD01":
      return (
        <>
          {" "}
          <CardData puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );

    case "CURVA01":
      return (
        <>
          {" "}
          <BarEchart puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );

    case "AREA01":
      return (
        <>
          {" "}
          <LineAreasEchart puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );
    case "GAUGE01":
      return (
        <>
          {" "}
          <GaugueEchart1 puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );

    case "GAUGE02":
      return (
        <>
          {" "}
          <GaugueEchart2 puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );
    case "GAUGE03":
      return (
        <>
          {" "}
          <GaugueEchart3 puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );
    case "LIQUIDF01":
      return (
        <>
          {" "}
          <LiquidFillEchart puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );
    case "RADAR01":
      return (
        <>
          {" "}
          <RadarChart1 puertoES={puerto} />{" "}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );
    case "MAPA01":
      return (
        <>
          {" "}
          <SimpleMap puertoES={puerto} /> {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );

    case "THERMOM01":
      return (
        <>
          {" "}
          <Thermometer1 puertoES={puerto} /> {" "}
        </>
      );
    case "THERMOM02":
      return (
        <>
          {" "}
          <Thermometer2 puertoES={puerto} /> {" "}
        </>
      );
    case "THERMOM03":
      return (
        <>
          {" "}
          <Thermometer3 puertoES={puerto} /> {" "}
        </>
      );
    case "THERMOM04":
      return (
        <>
          {" "}
          <Thermometer4 puertoES={puerto} /> {" "}
        </>
      );
    default:
      return (
        <>
          {" "}
          <SimpleMap /> {/* Entre parentesis esta el puerto seleccionado */}
          {/* Entre parentesis esta el puerto seleccionado */}
        </>
      );
  }
}



class ExampleGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://64.181.164.73:5000/vistas").then((res) => {
      //  axios.get("http://64.181.164.73:5000/puntodemedicion").then((res) => {  
      const data = res.data;
      this.setState({ data });
    });
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
   
    // const handleLayoutChange = (layout, layouts) => {
    //   localStorage.setItem('grid-layout', JSON.stringify(layouts));
    //   //alert("La posicion nueva es: x:"+JSON.stringify(layouts));

    //   if (window.confirm("El layout es:" + JSON.stringify(layout) + " : " + JSON.stringify(layouts))) {

    //     // código si el usuario presiona OK
    //   } else {
    //     // código si el usuario presiona Cancelar
    //   }

    // };

    return (
      <ResponsiveGridLayout
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }


        //  onResizeStop={(layout, oldItem, newItem, placeholder, e, element)=>this.saveLayout(layout, oldItem, newItem, placeholder, e, element)} 
        //  onDragStop={(layout, oldItem, newItem, placeholder, e, element)=>this.saveLayout(layout, oldItem, newItem, placeholder, e, element)} 
        //onDragStop={(layout, oldItem, newItem, placeholder, e, element) => this.saveLayout(layout, oldItem, newItem, placeholder, e, element)}
        //onDrop={(layout, oldItem, newItem, placeholder, e, element) => this.saveLayout(layout, oldItem, newItem, placeholder, e, element)}
         //onLayoutChange={(layout, oldItem, newItem, placeholder, e, element) => this.saveLayout(layout, oldItem, newItem, placeholder, e, element)}

        className="example-layout"
        breakpoints={{ ulg: 2048, vlg: 1440, lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ ulg: 18, vlg: 14, lg: 12, md: 10, sm: 12, xs: 8, xxs: 4 }}
        rowHeight={20}
        margin={[5, 5]}
        isDragable={true}
        isResizable={true}
      
       
      >
        {this.state.data.map((item) => (
          <div
            key={item.Id}
            data-grid={item}
            style={{
              background: "white",
              border: "2px dotted #000000FF",
              minWidth: 50,
              // display: "-ms-grid",

              alignitems: "center",
              justifycontent: "center",
              position: "relative",
              marginleft: "auto",
              marginright: "auto",
            }}>
            <div onclick="myFunction()" class="tooltip" style={{ background: "LightCyan ", padding: 2, borderBottomStyle: "solid", borderBottomColor: "blue", borderBottomWidth: 2, position: "relative" }}><b> Cuadro {item.Id}</b>
              <span class="tooltiptext">x:{item.x} y:{item.y} w:{item.w} h:{item.h}</span>
            </div>

            {TipoGrafico(item.MimicoCodigo, item.PuertoES_Id)}


          </div>
        ))}
      </ResponsiveGridLayout>
    );
  }
}
export default ExampleGrid;

