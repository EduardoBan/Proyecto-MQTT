import ReactEcharts from "echarts-for-react";
import "echarts-liquidfill";

import GetPuertoEs from "../../helpers/GetPuertoES.helpers";
import  GetUltimoRegistro  from "../../helpers/GetUltimoRegistro.helpers";

let valorX = 0;
  // ---------------------------- STYLE ----------------------------
  const chartStyle = {
    // height: 280,
    resize: "80%",
    overflow: false,
    left: "0px",
    top:"5px",
    // innerHeight: "80%",
    // innerWidth: "80%",
    position: "flex",
   // height: "70%",
    //width: "5%",
  };
  //----------------------------------------------------------------

const LiquidFillEchart1 = ({ puertoES = "5" }) => {

  let dataUltimoReg =JSON.stringify(GetUltimoRegistro(puertoES));
  const dataPuertoES = GetPuertoEs(puertoES);
  if (dataUltimoReg.length > 2){
    
    valorX=JSON.parse(dataUltimoReg);
    console.log('---------------------------------------');
    // eslint-disable-next-line
    console.log("---LiquidFill dataRegPuertoEs---"+","+ puertoES+","+valorX.Valor);
    console.log(dataUltimoReg);
    console.log('---------------------------------------');
  }


  const option = {
    title: {
      text: dataPuertoES.Nombre,    
      left: "center",
    },
    tooltip : {
      formatter: "{b} <br/> {c}%"+ String(dataPuertoES.Unidad)
     
  },
    series: [
      {
        type: "liquidFill",
        data: [ Number(valorX.Valor/100),Number(valorX.Valor/100)/1.5,Number(valorX.Valor/100)/3 ,Number(valorX.Valor/100)/5],
        radius: "70%",
        shape: "roundRect",
        center: ["50%", "45%"],
        backgroundStyle:{
          borderColor: "#156ACF",
          borderWidth: 1,
          shadowColor: "rgba(0, 0, 0, 0.4)",
          shadowBlur: 20
        },
        outline: {
          show: false
        },
        waveAnimation: true 
      },
    ]
  };

  return (
    <div className="App">
      <ReactEcharts option={option} style={chartStyle}/>
    </div>
  );
}


export default LiquidFillEchart1;
