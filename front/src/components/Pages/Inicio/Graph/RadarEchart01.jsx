import ReactECharts from 'echarts-for-react';
import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
import GetUltimoRegistro from "../../helpers/GetUltimoRegistro.helpers";
import GetVistas from "../../helpers/GetVistas.helpers";
let valoresData = [0, 0, 0];
let dataPuertoES = [];
let dataVistas;
let dataUltimoReg = [];
let  titulo = "";

const RadarChart1 = ({ puertoES = "1,2,3", vista = '1' }) => {
  
  let puertos = puertoES.split(',');

  console.log('Puertos de ES:');
  console.log(puertos[0]);
  console.log(puertos[1]);
  console.log(puertos[2]);
  console.log('\n')


  dataPuertoES[0] = GetPuertoEs(parseInt(puertos[0]));
  dataPuertoES[1] = GetPuertoEs(parseInt(puertos[1]));
  dataPuertoES[2] = GetPuertoEs(parseInt(puertos[2]));

  console.log("---Radar data PuertosES--- " + puertoES);
  console.log(dataPuertoES[0]);
  console.log(dataPuertoES[1]);
  console.log(dataPuertoES[2]);

  dataUltimoReg[0] = GetUltimoRegistro(puertos[0]);
  dataUltimoReg[1] = GetUltimoRegistro(puertos[1]);
  dataUltimoReg[2] = GetUltimoRegistro(puertos[2]);

  console.log("---Radar Ultimos Registros ---");
  console.log(dataUltimoReg[0].Valor);
  console.log(dataUltimoReg[1].Valor);
  console.log(dataUltimoReg[2].Valor);

  for (let index = 0; index < dataUltimoReg.length; index++) {

    const element = dataUltimoReg[index];
    if ((element) !== null) {
      valoresData[index] = element.Valor;
    }

  }

  // Titulo de la vista
  dataVistas = GetVistas(vista);
  console.log("---Radar VISTA ---");
  console.log(vista);
  console.log(dataVistas);
  console.log(dataVistas[6]);
  console.log('-------------------')

  for (let index = 0; index < dataVistas.length; index++) {
    const element = dataVistas[index];
    if (element.Id === 10) {
      titulo=element.Comentario;
    }
   }

  // -------------------- STYLE ----------------------
  const chartStyle = {

    resize: "95%",
    overflow: false,

    innerHeight: "95%",
    //    position: "static",
    height: "95%",
    width: "100%",
  };

  const options = {
    title: {
     // text: "Tension de linea", // + dataUltimoReg[0].Valor + ':' + dataUltimoReg[1].Valor + ':' + dataUltimoReg[2].Valor
      text: titulo,
      left: "center",
    },

    radar: {
      center: ['50%', '60%'],

      // shape: 'circle',
      indicator: [
        { name: dataPuertoES[0].Nombre, color: "black", min: dataPuertoES[0].EscalaEjeMin, max: dataPuertoES[0].EscalaEjeMax },  //
        { name: dataPuertoES[2].Nombre, color: "black", min: dataPuertoES[2].EscalaEjeMin, max: dataPuertoES[2].EscalaEjeMax },
        { name: dataPuertoES[1].Nombre, color: "black", min: dataPuertoES[1].EscalaEjeMin, max: dataPuertoES[1].EscalaEjeMax },
      
      ],
      axisLabel: {
        width: 100, //fixed number of pixels
        overflow: 'truncate', // or 'break' to continue in a new line, truncate
       // interval: "auto",
        show: true,
        showMaxLabel: true,
        showMinLabel:true,
        textStyle: {
          color: function (value, index) {
            let valor=(parseInt(dataPuertoES[1].EscalaEjeMin)+ parseInt(dataPuertoES[1].EscalaEjeMax))/2 ;  // calculo el promedio para ver adonde cambia de color los valores del eje
            return value >= valor ? 'green' : 'red';
          },
        fontSize:8,
        
        },
        hideOverlap:true,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0, 0, 250, 1)'
        }
      },
    
      splitLine: {  // lineas de referencia
        interval: 5,
        show:0,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(10, 100, 250, 0.45)',
          width: 2
        }
      }
    },



    series: [{
      name: 'Tension L1,L2,L3',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [dataUltimoReg[0].Valor, dataUltimoReg[1].Valor, dataUltimoReg[2].Valor],
          name: 'Valores Actuales',
          areaStyle: {
            color: 'rgba(5, 80, 229, 0.25)'
          },
          
          // areaStyle: {
          //   color: function (value, index) {
          //     return value >= 223 ? 'rgba(5, 171, 0, 0.25)' : 'rgba(5, 80, 229, 0.25)';  //5, 80, 229
          //   }
          // }



        }
      ]
    }],
    tooltip: {
      formatter: "{a} <br/> {c}"//+ String(dataPuertoES.Unidad)
    },

    // labelLayout: function () {
    //   return {
    //     y:50,
    //     x:'5%',
    //     moveOverlap: 'shiftY',
    //     // dx:'-5%',
    //     // dy:'5%',

    //   };
    // },
    // labelLine: {
    //   show: true,

    //   length2: '15',
    //   lineStyle: {
    //     color: '#bbb',
    //     width:3,
    //   }
    // },
    label: {
      show: true,
      position: 'top',
      backgroundColor: 'rgba(128, 128, 128, 0.6)',
      //borderColor: '#000',
      //borderWidth: 1,
      //borderRadius: 5,
      padding: 3,
      fontSize: 14,


    },
  };

  return <ReactECharts
    option={options}
    style={chartStyle}
  />;
};

export default RadarChart1;
